
import os
import math
import requests
import json
import markdown
import subprocess
import matplotlib.pyplot as plt
import base64

# --- Paths ---
INPUT_JSON = r"c:\Users\rguti\Petral.MARK\ic821_ic822_consolidated.json"
OUTPUT_MD = r"c:\Users\rguti\Petral.MARK\Reporte_IC821_DETALLADO.md"
OUTPUT_HTML = r"c:\Users\rguti\Petral.MARK\Reporte_IC821_DETALLADO.html"
OUTPUT_PDF = r"c:\Users\rguti\Petral.MARK\Reporte_IC821_DETALLADO.pdf"
OUTPUT_PLOT = r"c:\Users\rguti\Petral.MARK\IC821_Visual_Detallado.png"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

# --- Constants ---
INTERVAL_M = 500 # 500 meters as requested

def haversine(lat1, lon1, lat2, lon2):
    R = 6371000
    phi1, phi2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lon2 - lon1)
    a = math.sin(dphi/2)**2 + math.cos(phi1)*math.cos(phi2)*math.sin(dlambda/2)**2
    return R * 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))

def get_elevations(coords, batch_size=100):
    elevations = []
    print(f"⛰️ Fetching elevations for {len(coords)} points...")
    for i in range(0, len(coords), batch_size):
        batch = coords[i:i+batch_size]
        lats = [c[0] for c in batch]
        lons = [c[1] for c in batch]
        url = "https://api.open-meteo.com/v1/elevation"
        params = {"latitude": lats, "longitude": lons}
        try:
            resp = requests.get(url, params=params, timeout=10)
            data = resp.json()
            elevations.extend(data.get('elevation', []))
        except Exception as e:
            print(f"Error fetching elevations: {e}")
            elevations.extend([0] * len(batch))
    return elevations

def process_ic821(features):
    # Aplanar segmentos
    all_coords = []
    for f in features:
        # GeoJSON is [lon, lat] -> we want [lat, lon]
        all_coords.extend([[c[1], c[0]] for c in f["geometry"]["coordinates"]])
    
    if not all_coords:
        return None

    # Interpolación a INTERVAL_M
    total_dist = 0
    next_mark = float(INTERVAL_M)
    last_pt = all_coords[0]
    
    hitos = [{
        "idx": 0,
        "km": 0.0,
        "lat": all_coords[0][0],
        "lon": all_coords[0][1]
    }]

    for i in range(1, len(all_coords)):
        curr_pt = all_coords[i]
        d = haversine(last_pt[0], last_pt[1], curr_pt[0], curr_pt[1])
        
        while total_dist + d >= next_mark:
            frac = (next_mark - total_dist) / d
            interp_lat = last_pt[0] + (curr_pt[0] - last_pt[0]) * frac
            interp_lon = last_pt[1] + (curr_pt[1] - last_pt[1]) * frac
            
            hitos.append({
                "idx": int(next_mark / INTERVAL_M),
                "km": next_mark / 1000.0,
                "lat": interp_lat,
                "lon": interp_lon
            })
            next_mark += INTERVAL_M
        
        total_dist += d
        last_pt = curr_pt

    # Last point
    hitos.append({
        "idx": len(hitos),
        "km": total_dist / 1000.0,
        "lat": all_coords[-1][0],
        "lon": all_coords[-1][1],
        "is_final": True
    })
    
    # Elevations
    elevs = get_elevations([[p['lat'], p['lon']] for p in hitos])
    for i, p in enumerate(hitos):
        p['alt'] = elevs[i]
        if i > 0:
            prev = hitos[i-1]
            dist_m = (p['km'] - prev['km']) * 1000
            p['slope'] = ((p['alt'] - prev['alt']) / dist_m * 100) if dist_m > 0 else 0
        else:
            p['slope'] = 0
            
    return {
        "hitos": hitos,
        "full_path": all_coords,
        "desc": features[0]["properties"].get("TRAYECTORI", "N/A")
    }

def generate():
    with open(INPUT_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    ic821_features = [f for f in data["features"] if f["properties"]["CODRUTA"] == "IC-821"]
    
    if not ic821_features:
        print("❌ IC-821 not found in consolidated data.")
        return

    print("📊 Processing IC-821...")
    result = process_ic821(ic821_features)

    # Plot
    plt.figure(figsize=(12, 10))
    path = result["full_path"]
    plt.plot([p[1] for p in path], [p[0] for p in path], color="#9c27b0", label="IC-821", linewidth=3)
    
    # Annotations/Labels
    for i, h in enumerate(result["hitos"]):
        plt.scatter(h["lon"], h["lat"], color="black", s=15, zorder=5)
        label = "Inicio" if i == 0 else (f"{i}")
        plt.annotate(label, (h["lon"], h["lat"]), textcoords="offset points", xytext=(0,5), ha='center', fontsize=7, fontweight='bold', color='darkmagenta')
            
    plt.title("REPORTE VISUAL: RUTA IC-821 (DETALLE CADA 500M)", fontsize=14, fontweight='bold')
    plt.xlabel("Longitud")
    plt.ylabel("Latitud")
    plt.grid(True, linestyle=':', alpha=0.6)
    plt.axis('equal')
    plt.savefig(OUTPUT_PLOT, dpi=150, bbox_inches='tight')
    plt.close()

    # Markdown
    md = [
        f"# REPORTE TÉCNICO: COORDENADAS RUTA IC-821 (PROYECTO MARK)",
        "",
        f"**Trayectoria:** {result['desc']}",
        "",
        "Este reporte contiene los puntos de control cada 500 metros para la **Ruta IC-821**.",
        "",
        "| Punto | KM | Latitud | Longitud | Altitud (m) | Pendiente (%) |",
        "| :--- | :--- | :--- | :--- | :--- | :--- |"
    ]
    
    for i, h in enumerate(result["hitos"]):
        name = "INICIO" if i == 0 else ("FINAL" if h.get("is_final") else f"P{i}")
        md.append(f"| {name} | {h['km']:.2f} | {h['lat']:.6f} | {h['lon']:.6f} | {h['alt']:.1f} | {h['slope']:.2f}% |")

    with open(OUTPUT_MD, "w", encoding="utf-8") as f:
        f.write("\n".join(md))

    # PDF
    with open(OUTPUT_PLOT, "rb") as f: img_b64 = base64.b64encode(f.read()).decode()
    html_body = markdown.markdown("\n".join(md), extensions=['extra', 'tables'])
    html = f"""
    <html><head><meta charset="UTF-8"><style>
        body {{ font-family: 'Segoe UI', Tahoma, sans-serif; padding: 40px; color: #333; }}
        h1 {{ color: #2c3e50; border-bottom: 2px solid #2c3e50; padding-bottom: 10px; }}
        table {{ width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 11px; }}
        th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
        th {{ background-color: #f2f2f2; font-weight: bold; }}
        tr:nth-child(even) {{ background-color: #f9f9f9; }}
        .map-container {{ text-align: center; margin-bottom: 30px; }}
    </style></head><body>
        <h1>REPORTE TÉCNICO: IC-821</h1>
        <div class="map-container">
            <img src="data:image/png;base64,{img_b64}" style="max-width:100%; border:1px solid #ddd;">
        </div>
        {html_body}
    </body></html>"""
    
    with open(OUTPUT_HTML, "w", encoding="utf-8") as f: f.write(html)
    subprocess.run([EDGE_PATH, "--headless", "--disable-gpu", "--no-pdf-header-footer", f"--print-to-pdf={OUTPUT_PDF}", f"file:///{os.path.abspath(OUTPUT_HTML)}"], timeout=30)
    print(f"✅ Reporte generado: {OUTPUT_PDF}")

    # --- NEW: GENERATE JS FOR DASHBOARD ---
    print("🌐 Generando Layers JS para el Dashboard...")
    
    def export_js(result_obj, name_prefix):
        rid = result_obj["hitos"][0]["km"] # dummy check
        geojson = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {"name": result_obj["id"]},
                "geometry": {"type": "LineString", "coordinates": [[p[1], p[0]] for p in result_obj["full_path"]]}
            }]
        }
        
        points = []
        for i, h in enumerate(result_obj["hitos"]):
            points.append({
                "name": "Inicio" if i == 0 else (f"KM {h['km']:.1f}"),
                "coords": [h['lat'], h['lon']],
                "alt": round(h['alt'], 1),
                "slope": round(h['slope'], 2),
                "km": round(h['km'], 2)
            })
            
        js_content = f"// Auto-generated Layer for {result_obj['id']}\n"
        js_content += f"const LAYER_{name_prefix}_GEOJSON = {json.dumps(geojson, indent=4)};\n"
        js_content += f"const LAYER_{name_prefix}_POINTS = {json.dumps(points, indent=4)};\n"
        
        out_path = f"c:\\Users\\rguti\\Petral.MARK\\Dashboard_Puertos\\layer_{name_prefix.lower()}.js"
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(js_content)
        print(f"✅ JS Layer exported: {out_path}")

    result["id"] = "IC-821" # Ensure ID is present
    export_js(result, "IC821_FULL")

    # Also extract IC-822 for JS (re-running process_ic821 for it)
    ic822_features = [f for f in data["features"] if f["properties"]["CODRUTA"] == "IC-822"]
    if ic822_features:
        print("📊 Processing IC-822 for JS...")
        result_822 = process_ic821(ic822_features) # Same logic
        result_822["id"] = "IC-822"
        export_js(result_822, "IC822_FULL")

if __name__ == "__main__":
    generate()
