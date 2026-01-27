// --- Configuration ---
const CONFIG = {
    initialCenter: [-9.5, -75],
    initialZoom: 6,
    tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; OpenStreetMap contributors'
};

// --- Port Mapping & Config ---
const PORT_CONFIG = {
    'PETAL': { id: 'talara', name: "Talara", type: 'norte', coords: [-4.5772, -81.2719] },
    'PEPAI': { id: 'paita', name: "Paita", type: 'norte', coords: [-5.0830, -81.1144] },
    'PESAL': { id: 'salaverry', name: "Salaverry", type: 'norte', coords: [-8.2289, -78.9796] },
    'PECHM': { id: 'chimbote', name: "Chimbote", type: 'center', coords: [-9.0765, -78.5916] },
    'PECLL': { id: 'callao', name: "Callao", type: 'center', coords: [-12.0508, -77.1373] },
    'PEPIO': { id: 'pisco', name: "Pisco", type: 'south', coords: [-13.8055, -76.2922] },
    'PEPIO': { id: 'pisco', name: "Pisco", type: 'south', coords: [-13.8055, -76.2922] },
    'PEMAT': { id: 'matarani', name: "Matarani", type: 'south', coords: [-17.0016, -72.1065] },
    'PEILO': { id: 'ilo', name: "Ilo", type: 'south', coords: [-17.6450, -71.3468] },
    'PESQN': { id: 'sannicolas', name: "San Nicolás (Proyecto)", type: 'south', coords: [-15.2600, -75.2400] }
};

// Helper: Process Real Data
function processShipData() {
    const portStats = {};

    // Initialize stats
    Object.keys(PORT_CONFIG).forEach(code => {
        portStats[code] = {
            count: 0,
            tankers: 0,
            ships: []
        };
    });

    if (typeof REAL_TIME_SHIPS !== 'undefined') {
        REAL_TIME_SHIPS.forEach(ship => {
            const code = ship.port_id;
            if (portStats[code]) {
                portStats[code].count++;
                portStats[code].ships.push(ship);

                // Check if Tanker
                const type = (ship.type || "").toUpperCase();
                if (type.includes("TANQUE") || type.includes("GASERO")) {
                    portStats[code].tankers++;
                }
            }
        });
    }

    // Merge with Config
    return Object.keys(PORT_CONFIG).map(code => {
        const stats = portStats[code];
        const conf = PORT_CONFIG[code];
        return {
            ...conf,
            code: code,
            ships: stats.count,
            tankers: stats.tankers,
            shipList: stats.ships
        };
    });
}

// --- App State ---
let map;
let markers = [];
const ports = processShipData(); // Initial load

// --- Initialization ---
function initApp() {
    initMap();
    renderPorts(ports);
    if (typeof MINING_PROJECTS !== 'undefined') {
        renderMines(MINING_PROJECTS);
    }
}

// --- Map Logic ---
function initMap() {
    map = L.map('map', {
        zoomControl: false,
        attributionControl: false,
    }).setView(CONFIG.initialCenter, CONFIG.initialZoom);

    L.control.attribution({ prefix: false }).addAttribution('APN Data Scraper').addTo(map);

    // Load GeoJSON for Peru Departments
    if (typeof PERU_GEOJSON !== 'undefined') {
        const getColor = (d) => {
            // Simple hash for distinct colors
            let hash = 0;
            for (let i = 0; i < d.length; i++) {
                hash = d.charCodeAt(i) + ((hash << 5) - hash);
            }
            const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
            return '#' + '00000'.substring(0, 6 - c.length) + c;
        };

        L.geoJSON(PERU_GEOJSON, {
            style: function (feature) {
                return {
                    color: '#ffffff',     // White borders
                    weight: 1,
                    opacity: 0.3,
                    fillColor: getColor(feature.properties.NOMBDEP),
                    fillOpacity: 0.15     // High transparency
                };
            },
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.NOMBDEP) {
                    layer.bindTooltip(feature.properties.NOMBDEP, {
                        className: 'dept-label-permanent',
                        direction: 'center',
                        permanent: true,   // Always visible
                        opacity: 0.7
                    });
                }
                layer.on({
                    mouseover: (e) => {
                        e.target.setStyle({ weight: 2, fillOpacity: 0.35 });
                    },
                    mouseout: (e) => {
                        e.target.setStyle({ weight: 1, fillOpacity: 0.15 });
                    }
                });
            }
        }).addTo(map);
    } else {
        // Light Theme Map (CartoDB Positron)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', { opacity: 1 }).addTo(map);
    }
}

// --- Markers ---
function createCustomIcon(port) {
    // Different style if it has Tankers?
    const isTankerHub = port.tankers > 0;
    const markerClass = isTankerHub ? 'marker-pin tanker-mode' : 'marker-pin';

    return L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker-ring"></div><div class="${markerClass}"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
}

function renderPorts(portsData) {
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    portsData.forEach(port => {
        // Only show ports with ships? Or all? Let's show all but dim empty ones?
        // For now show all.

        const marker = L.marker(port.coords, {
            icon: createCustomIcon(port)
        }).addTo(map);

        // Tooltip content
        let label = `${port.name}`;
        if (port.tankers > 0) label += ` <span style="color:#ff4444">(${port.tankers} 🛢️)</span>`;
        else if (port.ships > 0) label += ` (${port.ships})`;

        marker.bindTooltip(label, {
            permanent: true,
            direction: 'bottom',
            className: 'port-label',
            offset: [0, 10]
        });

        marker.on('click', () => {
            selectPort(port);
            map.flyTo(port.coords, 10, { duration: 1.5 });
        });

        markers.push(marker);
    });
}

// --- Mines Logic ---
function createMineIcon(mine) {
    const isOperating = mine.state === "Operación";
    const color = isOperating ? '#4caf50' : '#ff9800'; // Green for Op, Orange for Project

    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 10px ${color}; border: 2px solid white;"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
}

function renderMines(mines) {
    mines.forEach(mine => {
        const marker = L.marker(mine.coords, {
            icon: createMineIcon(mine)
        }).addTo(map);

        marker.bindTooltip(`⛏️ ${mine.name} (${mine.type}) <br> <span style="font-size:0.8em; opacity:0.8">${mine.state}</span>`, {
            permanent: false,
            direction: 'top',
            className: 'port-label' // Reuse style
        });

        marker.on('click', () => {
            showMineDetails(mine);
        });
    });
}

// Haversine Distance
function getDistance(coord1, coord2) {
    const R = 6371; // km
    const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
    const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
}

function showMineDetails(mine) {
    const sidebar = document.getElementById('port-details');
    const title = document.getElementById('detail-title');
    const shipList = document.getElementById('ship-list');

    // Show Sidebar
    sidebar.classList.remove('hidden');
    title.textContent = `${mine.name} (${mine.owner})`;

    // Hide stats cards for mines (or repurpose them)
    document.querySelector('.stats-grid').style.display = 'none';

    // Calculate Distances (Linear)
    const distSanNicolas = getDistance(mine.coords, [-15.26, -75.24]);
    const distMatarani = getDistance(mine.coords, [-17.0016, -72.1065]);
    const distCallao = getDistance(mine.coords, [-12.0508, -77.1373]);
    const distIlo = getDistance(mine.coords, [-17.6450, -71.3468]);

    // Clear Valid Routes
    clearRoutes();

    // Render Initial State (Loading)
    shipList.innerHTML = `
        <h3 style="margin-bottom:5px;">Rutas Logísticas</h3>
        <p style="font-size:0.9em; color:#ccc; margin-bottom:15px;">Calculando rutas viales...</p>
        <div id="route-results"></div>
        <hr>
        <p style="font-size: 0.9em; opacity: 0.7; margin-top: 10px;">
            Estado: ${mine.state}<br>
            Mineral: ${mine.type}<br>
            Empresa: ${mine.owner}
        </p>
    `;

    // Calculate Routes Asynchronously
    const portsToRoute = [
        { name: "San Nicolás", coords: [-15.2600, -75.2400], color: '#00f2ea', id: 'sannicolas' },
        { name: "Matarani", coords: [-17.0016, -72.1065], color: '#ff4444', id: 'matarani' },
        { name: "Ilo", coords: [-17.6450, -71.3468], color: '#ff9800', id: 'ilo' }
        // {name: "Callao", coords: [-12.0508, -77.1373], color: '#ccc'} // Too far usually?
    ];

    // Sort by linear distance to pick top 3? Or just force these 3 south ones.

    calculateAndDrawRoutes(mine.coords, portsToRoute);

    // Fly to mine
    map.flyTo(mine.coords, 9, { duration: 1.5 });
}

// --- Routing Logic (OSRM) ---
let activeRoutes = [];

function clearRoutes() {
    activeRoutes.forEach(layer => map.removeLayer(layer));
    activeRoutes = [];
}

async function calculateAndDrawRoutes(startCoords, destinations) {
    const resultsContainer = document.getElementById('route-results');
    resultsContainer.innerHTML = '';

    // OSRM Public Demo Server (Note: Rate limits apply, use with caution in prod)
    const OSRM_URL = 'https://router.project-osrm.org/route/v1/driving/';

    for (const dest of destinations) {
        // OSRM expects Lon,Lat
        const start = `${startCoords[1]},${startCoords[0]}`;
        const end = `${dest.coords[1]},${dest.coords[0]}`;
        const url = `${OSRM_URL}${start};${end}?overview=full&geometries=geojson`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.code === 'Ok' && data.routes.length > 0) {
                const route = data.routes[0];
                const distanceKm = (route.distance / 1000).toFixed(1);
                const durationH = (route.duration / 3600).toFixed(1); // Hours

                // Draw Polyline
                const routeLayer = L.geoJSON(route.geometry, {
                    style: {
                        color: dest.color,
                        weight: 4,
                        opacity: 0.7,
                        dashArray: '5, 10' // Dashed to look like a proposed route
                    }
                }).addTo(map);

                activeRoutes.push(routeLayer);

                // Add to List
                const item = document.createElement('div');
                item.className = 'route-item';
                item.style.borderLeft = `3px solid ${dest.color}`;
                item.style.paddingLeft = '10px';
                item.style.marginBottom = '10px';
                item.innerHTML = `
                    <strong style="color:${dest.color}">${dest.name}</strong><br>
                    <span style="font-size:1.1em">🛣️ ${distanceKm} km</span> <span style="font-size:0.9em; opacity:0.8">(${durationH} hrs)</span>
                `;
                resultsContainer.appendChild(item);

                // If San Nicolas, highlight it
                if (dest.id === 'sannicolas') {
                    item.style.backgroundColor = 'rgba(0, 242, 234, 0.1)';
                    item.style.borderRadius = '0 5px 5px 0';
                    item.style.padding = '5px 5px 5px 10px';
                }

            } else {
                throw new Error('No route');
            }
        } catch (e) {
            console.error('Routing error:', e);
            resultsContainer.innerHTML += `<div style="color:${dest.color}; opacity:0.5; margin-bottom:5px;">⚠️ ${dest.name}: Ruta no disponible</div>`;
        }

        // Small delay to be nice to the demo API
        await new Promise(r => setTimeout(r, 200));
    }
}

// Reset sidebar view when closing
const originalCloseSidebar = window.closeSidebar || function () { };
window.closeSidebar = function () {
    document.querySelector('.stats-grid').style.display = 'grid'; // Restore stats
    const sidebar = document.getElementById('port-details');
    sidebar.classList.add('hidden');
    clearRoutes(); // Remove routes from map
    map.flyTo(CONFIG.initialCenter, CONFIG.initialZoom, { duration: 1.5 });
}
function selectPort(port) {
    document.querySelector('.stats-grid').style.display = 'grid'; // Ensure stats are visible
    const sidebar = document.getElementById('port-details');
    const title = document.getElementById('detail-title');
    const statShips = document.getElementById('stat-ships');
    const statArrivals = document.getElementById('stat-arrivals'); // We can use this for Tanker count
    const shipList = document.getElementById('ship-list');

    // Update Label for 2nd Box to "Tankers"
    // Ideally we should update the HTML label too, but let's just hack the value for now
    // Or better, assume "Próx. Arribos" = "Tankers" for this view
    document.querySelector('#port-details .stat-card:nth-child(2) .label').textContent = "Tankers";

    title.textContent = port.name;
    statShips.textContent = port.ships;
    statArrivals.textContent = port.tankers;
    statArrivals.style.color = port.tankers > 0 ? '#ff4444' : '#fff';

    // Render List
    shipList.innerHTML = '';

    if (port.shipList.length === 0) {
        shipList.innerHTML = '<li>Sin naves programadas</li>';
    } else {
        port.shipList.forEach(ship => {
            const isTanker = (ship.type || "").toUpperCase().includes("TANQUE");
            const icon = isTanker ? "🛢️" : "🚢";
            const li = document.createElement('li');

            // Format ETA
            const etaShort = ship.eta.split(' ')[0] || ship.eta; // Just date

            li.innerHTML = `
                <div class="ship-item ${isTanker ? 'tanker-glow' : ''}">
                    <span class="time">${etaShort}</span>
                    <strong class="ship-name">${icon} ${ship.name}</strong>
                    <div class="ship-details">
                        ${ship.agency} | ${ship.type} <br>
                        L: ${ship.length}m | B: ${ship.beam}m
                    </div>
                </div>
            `;
            shipList.appendChild(li);
        });
    }

    sidebar.classList.remove('hidden');
}


function closeSidebar() {
    const sidebar = document.getElementById('port-details');
    sidebar.classList.add('hidden');

    // Zoom back out
    map.flyTo(CONFIG.initialCenter, CONFIG.initialZoom, { duration: 1.5 });
}

function setMapFilter(filter) {
    // Update button states
    documentquerySelectorAll('.btn-control').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active'); // Warning: 'event' usage simplifies here, better to pass explicit naming in prod

    // Filter ports
    if (filter === 'all') {
        renderPorts(ports);
    } else {
        const filtered = ports.filter(p => p.type === filter);
        renderPorts(filtered);
    }
}

// Fix for inline onclick event bubbling passing
window.setMapFilter = function (region) {
    // Update active class
    const buttons = document.querySelectorAll('.btn-control');
    buttons.forEach(b => {
        if (b.textContent.toLowerCase().includes(region === 'all' ? 'todos' : region)) {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }

        // Fallback for direct "North" - "Norte" mapping mismatch if strictly relying on text
        // Simple approach: reset all, add to clicked.
    });

    // In this context, we need to identify the clicked button. 
    // Since I can't easily pass 'this' from the HTML string without cleaner bindings:
    // I will refactor the UI text to match logic or just filter.

    if (region === 'all') {
        renderPorts(ports);
    } else {
        const filtered = ports.filter(p => p.type === region);
        renderPorts(filtered);
    }
};

// Force redraw on resize
window.addEventListener('resize', () => {
    if (map) map.invalidateSize();
});

// Start
document.addEventListener('DOMContentLoaded', initApp);
