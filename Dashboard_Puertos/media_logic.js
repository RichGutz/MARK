// ========================================
// MEDIA LAYER LOGIC (Modularized)
// ========================================

let mediaLayer = null;

function renderMediaLayer() {
    const showThumbs = document.getElementById('toggle-media-thumbnails')?.checked;

    if (typeof LAYER_MEDIA_DATA !== 'undefined') {
        // Clear existing layer if switching mode
        if (mediaLayer) {
            map.removeLayer(mediaLayer);
        }
        mediaLayer = L.layerGroup();
        
        LAYER_MEDIA_DATA.forEach(item => {
            let icon;
            if (showThumbs) {
                // Map Thumbnail
                icon = L.divIcon({
                    className: 'thumb-marker-container',
                    html: `<img src="media_thumbnails/${item.thumb}" class="thumb-marker-img">
                           ${item.type === 'video' ? '<span style="position:absolute; bottom:0; right:0; background:rgba(0,0,0,0.6); font-size:10px; padding:2px;">🎥</span>' : ''}`,
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
                <div style="text-align: center; font-family: 'Rajdhani', sans-serif; color: #fff;">
                    <strong style="color: #e91e63; font-size: 1.1em;">${item.type === 'video' ? 'VIDEO' : 'FOTO'}</strong><br>
                    <div style="margin: 8px 0; border: 1px solid #444; border-radius: 4px; overflow: hidden; background: #000;">
                        <img src="media_thumbnails/${item.thumb}" style="width: 160px; display: block; cursor: pointer; transition: transform 0.2s;" 
                             onclick="openLightbox('media_thumbnails/${item.thumb}', '${item.type === 'video' ? 'VIDEO' : 'FOTO'}', '${item.filename}')"
                             onmouseover="this.style.transform='scale(1.05)'" 
                             onmouseout="this.style.transform='scale(1)'">
                    </div>
                    <span style="font-size: 9px; color: #888; display: block; max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.filename}</span>
                </div>
            `;
            
            marker.bindPopup(popupContent, { maxWidth: 200, className: 'custom-popup-dark' });
            mediaLayer.addLayer(marker);
        });

        // Add back if the main media toggle is active
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
    // Re-render to switch between PINS/THUMBS
    renderMediaLayer();
}

function openLightbox(src, title, filename) {
    const modal = document.getElementById('media-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    if (modal && modalImg) {
        modal.style.display = "flex";
        
        // Cloud Link Support
        if (typeof LAYER_MEDIA_DATA !== 'undefined' && filename) {
            const item = LAYER_MEDIA_DATA.find(i => i.filename === filename);
            if (item && item.original_url) {
                modalImg.src = item.original_url;
                console.log("Loading Cloud Image:", item.original_url);
            } else {
                modalImg.src = src;
            }
        } else {
            modalImg.src = src;
        }

        if (modalTitle) modalTitle.textContent = title || filename;
    }
}

function closeLightbox() {
    const modal = document.getElementById('media-modal');
    if (modal) modal.style.display = "none";
}
