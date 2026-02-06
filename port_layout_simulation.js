// port_layout_simulation.js

let portSimulationLayer = null;

function renderPortSimulation() {
    if (portSimulationLayer) return; // Already rendered

    portSimulationLayer = L.layerGroup();

    // 1. RECEPTION SITE (Small Northern Island - Indices 15-21)
    if (typeof SHOUGANG_RAW_COORDS !== 'undefined') {
        // Extract indices 15 to 21 (The "small island with ~6 vertices")
        const receptionCoords = SHOUGANG_RAW_COORDS.slice(15, 22);
        // GeoJSON expects [Lon, Lat]
        const receptionGeoJSON = receptionCoords.map(d => [d[1], d[0]]);

        // Calculate Centroid for Conveyor Start
        let sumLat = 0, sumLon = 0;
        receptionCoords.forEach(c => { sumLat += c[0]; sumLon += c[1]; });
        const startPoint = [sumLat / receptionCoords.length, sumLon / receptionCoords.length]; // [Lat, Lon]

        // Function helper for Petral Points (defined in perimeter_sides.js usually, but we know the triangle logic)
        // Point 1 (North): -15.165498334382889, -75.25695083552709
        // Point 3 (South/Pier): -15.197477563030073, -75.23798892224755

        const petralNorth = [-15.165498334382889, -75.25695083552709];
        const petralPier = [-15.197477563030073, -75.23798892224755];

        // --- LAYER 1: RECEPTION POLYGON ---
        const receptionFeature = {
            "type": "Feature",
            "properties": { "name": "Sitio de Recepcion (Tren/Camion)" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [receptionGeoJSON]
            }
        };

        L.geoJSON(receptionFeature, {
            style: {
                color: '#ffc107', // Amber
                weight: 2,
                opacity: 1,
                fillColor: '#ffc107',
                fillOpacity: 0.4,
                dashArray: '5, 5'
            }
        }).bindTooltip("Sitio de Recepción", { permanent: true, direction: "center", className: "vertex-label" })
            .addTo(portSimulationLayer);

        // --- LAYER 2: CONVEYOR BELT (Faja Transportadora) ---
        // Route: Reception Centroid -> Petral North -> Petral Pier (Internal flow)
        // Or just Reception -> Petral North (Drop off point)
        const conveyorLine = [
            startPoint,  // Centroid
            petralNorth  // Top of Petral
        ];

        L.polyline(conveyorLine, {
            color: '#795548', // Brown (Conveyor)
            weight: 4,
            dashArray: '10, 10',
            opacity: 0.8
        }).bindTooltip("Gran Faja Transportadora", { sticky: true }).addTo(portSimulationLayer);

        // --- LAYER 3: FINGER PIER & LOADERS (Lowest Point) ---
        // Marker at petralPier

        // Pier Icon
        const pierIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="font-size:20px; color:#0d47a1;"><i class="fas fa-anchor"></i></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        L.marker(petralPier, { icon: pierIcon })
            .bindTooltip("Finger Pier & Ship Loaders", { permanent: true, direction: "bottom", className: "road-label-container" })
            .addTo(portSimulationLayer);

        // Visual Line for Pier sticking out into sea?
        // Let's just keep the marker for now as requested "vamos a colocar...".
    }
}

function togglePortSimulation() {
    const el = document.getElementById('toggle-port-simulation');
    if (!el) return;
    const show = el.checked;

    if (!portSimulationLayer) renderPortSimulation();

    if (show) {
        if (portSimulationLayer) map.addLayer(portSimulationLayer);
    } else {
        if (portSimulationLayer) map.removeLayer(portSimulationLayer);
    }
}
