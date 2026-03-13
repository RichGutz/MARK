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
            // Google Photos video streaming trick: append =m22 or =m18 for quality
            const streamUrl = item.original_url.includes('googleusercontent.com') ? `${item.original_url}=m22` : item.original_url;
            
            modalContent.innerHTML = `
                <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                    <video id="lightbox-video" src="${streamUrl}" controls autoplay style="max-width:90%; max-height:75%; border-radius:8px; box-shadow:0 0 30px rgba(0,0,0,0.8);"></video>
                    <div style="margin-top:15px;">
                        <a href="${item.original_url}" target="_blank" style="background:#e91e63; color:white; padding:8px 15px; border-radius:5px; text-decoration:none; font-family:'Rajdhani',sans-serif; font-weight:bold; font-size:14px; box-shadow:0 4px 10px rgba(233,30,99,0.3);">
                            🔗 ABRIR EN PESTAÑA NUEVA
                        </a>
                    </div>
                </div>`;
            
            // Auto-fallback if video fails to load
            const v = document.getElementById('lightbox-video');
            if (v) {
                v.onerror = () => {
                    modalContent.innerHTML = `
                        <div style="text-align:center; color:white; font-family:'Rajdhani',sans-serif; background:rgba(0,0,0,0.8); padding:30px; border-radius:12px;">
                            <p style="font-size:1.5rem; margin-bottom:10px;">🎥 El video no se puede previsualizar aquí</p>
                            <p style="color:#aaa; margin-bottom:20px;">Google Photos bloquea la reproducción directa a veces.</p>
                            <a href="${item.original_url}" target="_blank" style="background:#e91e63; color:white; padding:12px 25px; border-radius:6px; text-decoration:none; font-weight:bold; font-size:16px;">
                                ▶ REPRODUCIR EN GOOGLE PHOTOS
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
