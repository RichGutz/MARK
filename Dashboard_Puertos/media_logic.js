// ========================================
// MEDIA LAYER LOGIC (Modularized V2)
// ========================================

let mediaLayer = null;

function renderMediaLayer() {
    const showThumbs = document.getElementById('toggle-media-thumbnails')?.checked;

    if (typeof LAYER_MEDIA_DATA !== 'undefined') {
        if (mediaLayer) {
            map.removeLayer(mediaLayer);
        }
        mediaLayer = L.layerGroup();
        
        LAYER_MEDIA_DATA.forEach(item => {
            let icon;
            if (showThumbs) {
                // Map Thumbnail with scale effect on hover
                icon = L.divIcon({
                    className: 'thumb-marker-container',
                    html: `<img src="media_thumbnails/${item.thumb}" 
                                class="thumb-marker-img" 
                                onerror="this.src='https://placehold.co/40x30/444/fff?text=?'">
                           ${item.type === 'video' ? '<span class="video-badge">🎥</span>' : ''}`,
                    iconSize: [40, 30],
                    iconAnchor: [20, 15]
                });
            } else {
                // Standard Pink Pin
                icon = L.divIcon({
                    className: 'custom-div-icon',
                    html: `<div style="background-color: #e91e63; border: 2px solid white; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 8px rgba(0,0,0,0.4);">
                            <span style="font-size: 14px;">${item.type === 'video' ? '🎥' : '📷'}</span>
                           </div>`,
                    iconSize: [26, 26],
                    iconAnchor: [13, 13]
                });
            }

            const marker = L.marker([item.lat, item.lon], { icon: icon });
            
            const popupContent = `
                <div style="text-align: center; font-family: 'Rajdhani', sans-serif; color: #fff; min-width:160px;">
                    <strong style="color: #e91e63; font-size: 1.1em;">${item.type === 'video' ? '🎥 VIDEO' : '📷 FOTO'}</strong><br>
                    <div style="margin: 8px 0; border: 1px solid #444; border-radius: 4px; overflow: hidden; background: #000; position:relative;">
                        <img src="media_thumbnails/${item.thumb}" 
                             style="width: 160px; height: 120px; object-fit: cover; display: block; cursor: pointer; transition: transform 0.2s;" 
                             onclick="openLightbox('${item.filename}')"
                             onmouseover="this.style.transform='scale(1.05)'" 
                             onmouseout="this.style.transform='scale(1)'"
                             onerror="this.src='https://placehold.co/160x120/444/fff?text=No+Thumbnail'">
                        ${item.type === 'video' ? '<div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); border:2px solid white; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.4); pointer-events:none;">▶</div>' : ''}
                    </div>
                    <span style="font-size: 9px; color: #888; display: block; max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.filename}</span>
                    <button onclick="openLightbox('${item.filename}')" style="margin-top:5px; background:#e91e63; border:none; color:white; padding:3px 8px; border-radius:3px; font-size:10px; cursor:pointer;">
                        ${item.type === 'video' ? 'Reproducir' : 'Ver Grande'}
                    </button>
                </div>
            `;
            
            marker.bindPopup(popupContent, { maxWidth: 200, className: 'custom-popup-dark' });
            mediaLayer.addLayer(marker);
        });

        if (document.getElementById('toggle-media-pines')?.checked) {
            map.addLayer(mediaLayer);
        }
    }
}

function toggleMediaPines() {
    const el = document.getElementById('toggle-media-pines');
    if (!el) return;
    const show = el.checked;
    
    if (!mediaLayer) {
        renderMediaLayer();
    } else {
        if (show) map.addLayer(mediaLayer);
        else map.removeLayer(mediaLayer);
    }
}

function toggleMediaThumbnails() {
    renderMediaLayer();
}

function openLightbox(filename) {
    const modal = document.getElementById('media-modal');
    const modalContent = document.getElementById('modal-content-area'); // Need to change HTML for this
    const modalTitle = document.getElementById('modal-title');
    
    if (!modal || !LAYER_MEDIA_DATA) return;

    const item = LAYER_MEDIA_DATA.find(i => i.filename === filename);
    if (!item) return;

    modal.style.display = "flex";
    if (modalTitle) modalTitle.textContent = item.filename;

    // Direct url from Cloud (Google Photos) or fallback to local thumbnail
    let finalUrl = item.original_url || `media_thumbnails/${item.thumb}`;
    
    // Clear area
    modalContent.innerHTML = '';

    if (item.type === 'video') {
        // Handle Video
        if (item.original_url) {
            console.log("Intentando reproducir video de Google Photos:", item.filename);
            // Hint Google to stream the video instead of showing the placeholder image
            const streamUrl = item.original_url.includes('googleusercontent.com') ? `${item.original_url}=m22` : item.original_url;
            
            modalContent.innerHTML = `
                <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; color:white;">
                    <video id="lightbox-video" src="${streamUrl}" controls autoplay style="max-width:90%; max-height:75%; border-radius:8px; box-shadow:0 0 30px rgba(0,0,0,0.8);"></video>
                    <div style="margin-top:20px; text-align:center;">
                        <p style="font-size:14px; margin-bottom:10px; opacity:0.8;">Si el video no carga aquí, ábrelo en Google Photos:</p>
                        <a href="${item.original_url}" target="_blank" style="background:#e91e63; color:white; padding:10px 20px; border-radius:5px; text-decoration:none; font-family:'Rajdhani',sans-serif; font-weight:bold; font-size:16px; box-shadow:0 4px 12px rgba(233,30,99,0.4); display:inline-block;">
                            ▶ REPRODUCIR EN GOOGLE PHOTOS
                        </a>
                    </div>
                </div>`;
            
            // Inline error handler to show fallback immediately
            const v = document.getElementById('lightbox-video');
            if (v) {
                v.onerror = () => {
                    console.warn("Fallo la reproducción directa del video. Mostrando link de respaldo.");
                    modalContent.innerHTML = `
                        <div style="text-align:center; color:white; font-family:'Rajdhani',sans-serif; background:rgba(0,0,0,0.8); padding:40px; border-radius:15px; border:1px solid #e91e63;">
                            <p style="font-size:1.8rem; margin-bottom:15px;">🎥 Video Protegido</p>
                            <p style="color:#ccc; margin-bottom:25px; line-height:1.4;">Google Photos no permite la reproducción directa en paneles externos para este video.</p>
                            <a href="${item.original_url}" target="_blank" style="background:#e91e63; color:white; padding:15px 30px; border-radius:8px; text-decoration:none; font-weight:bold; font-size:18px; box-shadow:0 5px 15px rgba(233,30,99,0.4);">
                                ▶ VER EN GOOGLE PHOTOS
                            </a>
                        </div>`;
                };
            }
        } else {
            modalContent.innerHTML = `<div style="color:#ff4444; background:#000; padding:20px; border-radius:8px;">
                                        <p>Link de video no encontrado.</p>
                                        <p style="font-size:0.8em; color:#888;">Por favor usa el botón "ACTUALIZAR" para sincronizar con Google Photos.</p>
                                      </div>`;
        }
    } else {
        // Handle Image
        modalContent.innerHTML = `<img src="${finalUrl}" style="max-width:90%; max-height:80%; border-radius:8px; box-shadow:0 0 30px rgba(0,0,0,0.8);">`;
    }
}

function closeLightbox() {
    const modal = document.getElementById('media-modal');
    const modalContent = document.getElementById('modal-content-area');
    if (modal) {
        modal.style.display = "none";
        if (modalContent) modalContent.innerHTML = ''; // Stop video playback
    }
}
