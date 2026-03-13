import os
import re
import math
import requests
import json
import markdown
import subprocess
import matplotlib.pyplot as plt

# --- Paths ---
KML_FILE_1 = r"c:\Users\rguti\Petral.MARK\Dashboard_Puertos\Tramo1_Final_Consolidado_V2.kml"
KML_FILE_2 = r"c:\Users\rguti\Petral.MARK\Dashboard_Puertos\Imagenes.Rutas.Viaje\RECORRIDO PETRAL.kml"
OUTPUT_MD = r"c:\Users\rguti\Petral.MARK\Dashboard_Puertos\Tramo1_Reporte_Coordenadas.md"
OUTPUT_HTML = r"c:\Users\rguti\Petral.MARK\Dashboard_Puertos\Tramo1_Reporte_Coordenadas.html"
OUTPUT_PDF = r"c:\Users\rguti\Petral.MARK\Dashboard_Puertos\Tramo1_Reporte_Coordenadas.pdf"
OUTPUT_JS = r"c:\Users\rguti\Petral.MARK\Dashboard_Puertos\layer_1S_Garita.js"
OUTPUT_PLOT = r"c:\Users\rguti\Petral.MARK\Dashboard_Puertos\Tramo1_Ruta_Visual.png"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

# --- Constants ---
INTERVAL_M = 500

# --- Helper Functions ---
def haversine(lat1, lon1, lat2, lon2):
    R = 6371000  # radius in meters
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lon2 - lon1)
    a = math.sin(dphi/2)**2 + math.cos(phi1)*math.cos(phi2)*math.sin(dlambda/2)**2
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))

def parse_kml_coords(filename):
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()
    coords_matches = re.findall(r'<coordinates>(.*?)</coordinates>', content, re.DOTALL)
    full_path = []
    for match in coords_matches:
        raw_coords = match.strip().split()
        for c in raw_coords:
            parts = c.split(',')
            if len(parts) >= 2:
                # [lon, lat, alt] -> [lat, lon]
                full_path.append([float(parts[1]), float(parts[0])])
    return full_path

def get_elevations(coords, batch_size=100):
    elevations = []
    for i in range(0, len(coords), batch_size):
        batch = coords[i:i+batch_size]
        lats = [c[0] for c in batch]
        lons = [c[1] for c in batch]
        url = "https://api.open-meteo.com/v1/elevation"
        params = {"latitude": lats, "longitude": lons}
        try:
            resp = requests.get(url, params=params)
            data = resp.json()
            elevations.extend(data.get('elevation', []))
            print(f"  Fetched {len(batch)} points...")
        except:
            elevations.extend([0] * len(batch))
    return elevations

def generate_report():
    print(f"📖 Cargando rutas...")
    path1 = parse_kml_coords(KML_FILE_1)
    path2 = parse_kml_coords(KML_FILE_2)
    
    if not path1 or not path2:
        print("❌ Error al cargar coordenadas de los KML.")
        return

    # Buscar intersección (punto más cercano)
    # Buscamos en la segunda mitad de Path 1 para ir del este hacia el oeste
    min_dist = float('inf')
    best_idx1 = -1
    best_idx2 = -1
    
    print(f"🔄 Buscando punto de unión entre {len(path1)} y {len(path2)} nodos...")
    search_start = len(path1) // 2
    for i in range(search_start, len(path1)):
        p1 = path1[i]
        for j in range(len(path2)):
            p2 = path2[j]
            d = haversine(p1[0], p1[1], p2[0], p2[1])
            if d < min_dist:
                min_dist = d
                best_idx1 = i
                best_idx2 = j
    
    print(f"📍 Punto de unión encontrado a {min_dist:.2f}m.")
    # Stitching: Path 1 hasta la intersección + Path 2 desde la intersección
    path = path1[:best_idx1] + path2[best_idx2:]
    
    print(f"✅ Ruta híbrida generada con {len(path)} puntos.")

    # Interpolación cada 500m
    interpolated = [path[0]]
    total_dist = 0
    next_mark = INTERVAL_M
    
    current_path_idx = 1
    last_pt = path[0]
    
    labeled_points = [{
        "km": 0.0,
        "lat": path[0][0],
        "lon": path[0][1]
    }]

    while current_path_idx < len(path):
        curr_pt = path[current_path_idx]
        d = haversine(last_pt[0], last_pt[1], curr_pt[0], curr_pt[1])
        
        if total_dist + d >= next_mark:
            # Interpolar punto exacto
            needed = next_mark - total_dist
            frac = needed / d
            interp_lat = last_pt[0] + (curr_pt[0] - last_pt[0]) * frac
            interp_lon = last_pt[1] + (curr_pt[1] - last_pt[1]) * frac
            
            labeled_points.append({
                "km": next_mark / 1000.0,
                "lat": interp_lat,
                "lon": interp_lon
            })
            next_mark += INTERVAL_M
            # No avanzamos el index aún, por si hay más de un intervalo en el mismo segmento
            last_pt = [interp_lat, interp_lon]
            total_dist += needed
        else:
            total_dist += d
            last_pt = curr_pt
            current_path_idx += 1

    # Asegurar el último punto
    last_pt_actual = path[-1]
    last_km = total_dist / 1000.0
    labeled_points.append({
        "km": last_km,
        "lat": last_pt_actual[0],
        "lon": last_pt_actual[1]
    })

    print(f"⛰️ Obteniendo elevaciones para {len(labeled_points)} hitos...")
    lats_lons = [[p['lat'], p['lon']] for p in labeled_points]
    elevs = get_elevations(lats_lons)
    
    for i, p in enumerate(labeled_points):
        p['alt'] = elevs[i]
        # Calcular pendiente con el anterior
        if i > 0:
            prev = labeled_points[i-1]
            dist_m = (p['km'] - prev['km']) * 1000
            if dist_m > 0:
                p['slope'] = ((p['alt'] - prev['alt']) / dist_m) * 100
            else:
                p['slope'] = 0
        else:
            p['slope'] = 0

    # Generar Markdown
    md = [
        "# REPORTE TÉCNICO: COORDENADAS RUTA.FRANCO (PROYECTO MARK)",
        "",
        "Este reporte contiene los puntos de control cada 500 metros para la **Ruta.Franco**, resultado de la unión del Tramo 1 y el Recorrido Petral.",
        "",
        "| Punto | KM | Latitud | Longitud | Altitud (m) | Pendiente (%) |",
        "| :--- | :--- | :--- | :--- | :--- | :--- |"
    ]
    
    for i, p in enumerate(labeled_points):
        name = "INICIO" if i == 0 else (f"FINAL" if i == len(labeled_points)-1 else f"P{i}")
        md.append(f"| {name} | {p['km']:.2f} | {p['lat']:.6f} | {p['lon']:.6f} | {p['alt']:.1f} | {p['slope']:.2f}% |")

    with open(OUTPUT_MD, "w", encoding="utf-8") as f:
        f.write("\n".join(md))
    
    print(f"📝 Markdown generado: {OUTPUT_MD}")

    # Generar Gráfico de la Ruta
    print("📊 Generando gráfico de la ruta...")
    all_lats = [p[0] for p in path]
    all_lons = [p[1] for p in path]
    
    plt.figure(figsize=(10, 6))
    plt.plot(all_lons, all_lats, 'r-', linewidth=2, label='Ruta Tramo 1')
    plt.scatter(all_lons[0], all_lats[0], color='green', s=100, label='Inicio (Este)')
    plt.scatter(all_lons[-1], all_lats[-1], color='blue', s=100, label='Fin (Oeste/Garita)')
    
    # Marcar los hitos de 500m
    hitos_lats = [p['lat'] for p in labeled_points]
    hitos_lons = [p['lon'] for p in labeled_points]
    plt.scatter(hitos_lons, hitos_lats, color='black', s=20, alpha=0.5, label='Hitos 500m')
    
    plt.title("Visualización de la Ruta - Ruta.Franco")
    plt.xlabel("Longitud")
    plt.ylabel("Latitud")
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.legend()
    plt.axis('equal') # Mantener proporciones para que no se deforme la ruta
    
    plt.savefig(OUTPUT_PLOT)
    plt.close()
    print(f"🖼️ Gráfico guardado: {OUTPUT_PLOT}")

    # Convertir a HTML y luego PDF
    html_body = markdown.markdown("\n".join(md), extensions=['extra', 'tables'])
    
    # Insertar la imagen en el HTML (usando base64 para que el PDF la incluya sin problemas externos)
    import base64
    with open(OUTPUT_PLOT, "rb") as img_file:
        img_base64 = base64.b64encode(img_file.read()).decode('utf-8')
    
    image_html = f'<div style="text-align:center; margin-bottom:30px;"><img src="data:image/png;base64,{img_base64}" style="max-width:100%; border:1px solid #ddd;"></div>'
    
    html_template = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body {{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #333; }}
            h1 {{ color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 10px; }}
            table {{ width: 100%; border-collapse: collapse; margin-top: 20px; }}
            th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; font-size: 11px; }}
            th {{ background-color: #f2f2f2; font-weight: bold; }}
            tr:nth-child(even) {{ background-color: #f9f9f9; }}
            .map-container {{ margin-bottom: 30px; }}
        </style>
    </head>
    <body>
        <h1>REPORTE TÉCNICO: RUTA.FRANCO</h1>
        <div class="map-container">
            {image_html}
        </div>
        {html_body}
    </body>
    </html>
    """
    
    with open(OUTPUT_HTML, "w", encoding="utf-8") as f:
        f.write(html_template)

    print("📄 Generando PDF con Edge...")
    cmd = [
        EDGE_PATH, 
        "--headless", 
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={OUTPUT_PDF}", 
        f"file:///{OUTPUT_HTML.replace('\\', '/')}"
    ]
    subprocess.run(cmd, timeout=30)
    
    if os.path.exists(OUTPUT_PDF):
        print(f"✨ PDF CREADO EXITOSAMENTE: {OUTPUT_PDF}")
    else:
        print("❌ Error al generar el PDF.")

    # --- EXPORTAR JS PARA DASHBOARD ---
    print("🌐 Generando Layer JS para el Dashboard...")
    
    # 1. GeoJSON LineString
    line_coords = [[p['lon'], p['lat']] for p in labeled_points] # [lon, lat] for GeoJSON
    geojson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": {
                "name": "Ruta.Franco",
                "style": "franco_style"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": line_coords
            }
        }]
    }

    # 2. Points data for labels
    js_points = []
    for i, p in enumerate(labeled_points):
        js_points.append({
            "name": f"KM {p['km']:.1f}",
            "coords": [p['lat'], p['lon']],
            "alt": round(p['alt'], 1),
            "slope": round(p['slope'], 2),
            "km": round(p['km'], 2)
        })

    js_content = f"// Auto-generated from generate_tramo1_report.py\n"
    js_content += f"const LAYER_1S_GARITA_GEOJSON = {json.dumps(geojson, indent=4)};\n\n"
    js_content += f"const LAYER_1S_GARITA_POINTS = {json.dumps(js_points, indent=4)};"

    with open(OUTPUT_JS, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"✅ JS Layer generado: {OUTPUT_JS}")

if __name__ == "__main__":
    generate_report()
