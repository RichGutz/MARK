
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
OUTPUT_MD = r"c:\Users\rguti\Petral.MARK\Reporte_IC821_IC822.md"
OUTPUT_HTML = r"c:\Users\rguti\Petral.MARK\Reporte_IC821_IC822.html"
OUTPUT_PDF = r"c:\Users\rguti\Petral.MARK\Reporte_IC821_IC822.pdf"
OUTPUT_PLOT = r"c:\Users\rguti\Petral.MARK\IC821_IC822_Visual.png"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

# --- Constants ---
INTERVAL_M = 1000 # KM interval for the report table

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

def process_route(route_id, features):
    # Aplanar segmentos de la ruta
    # Nota: Los segmentos en el GeoJSON pueden no estar en orden secuencial perfecto, 
    # pero para el reporte "best-effort" los uniremos.
    all_coords = []
    for f in features:
        # GeoJSON is [lon, lat] -> we want [lat, lon]
        all_coords.extend([[c[1], c[0]] for c in f["geometry"]["coordinates"]])
    
    if not all_coords:
        return None

    # Interpolación simple
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

    # Final point
    hitos.append({
        "idx": len(hitos),
        "km": total_dist / 1000.0,
        "lat": all_coords[-1][0],
        "lon": all_coords[-1][1],
        "is_final": True
    })
    
    # Altitudes
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
        "id": route_id,
        "hitos": hitos,
        "full_path": all_coords,
        "desc": features[0]["properties"].get("TRAYECTORI", "N/A")
    }

def generate():
    with open(INPUT_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    by_route = {}
    for f in data["features"]:
        rid = f["properties"]["CODRUTA"]
        if rid not in by_route: by_route[rid] = []
        by_route[rid].append(f)
        
    results = []
    for rid in ["IC-821", "IC-822"]:
        if rid in by_route:
            print(f"📊 Processing {rid}...")
            results.append(process_route(rid, by_route[rid]))

    # Plot
    plt.figure(figsize=(10, 8))
    colors = {"IC-821": "#9c27b0", "IC-822": "#1a73e8"}
    
    for res in results:
        rid = res["id"]
        path = res["full_path"]
        plt.plot([p[1] for p in path], [p[0] for p in path], color=colors[rid], label=rid, linewidth=2)
        for h in res["hitos"]:
            plt.scatter(h["lon"], h["lat"], color="black", s=10)
            
    plt.title("MAPA VIAL: IC-821 E IC-822 (MARCONA)", fontsize=14)
    plt.xlabel("Longitud")
    plt.ylabel("Latitud")
    plt.grid(True, alpha=0.3)
    plt.legend()
    plt.savefig(OUTPUT_PLOT, dpi=120)
    plt.close()

    # Markdown
    md = ["# REPORTE TÉCNICO: RUTAS IC-821 E IC-822 (MARCONA)", ""]
    
    for res in results:
        md.append(f"## Ruta {res['id']}")
        md.append(f"**Trayectoria:** {res['desc']}")
        md.append("")
        md.append("| Punto | KM | Latitud | Longitud | Altitud (m) | Pendiente (%) |")
        md.append("| :--- | :--- | :--- | :--- | :--- | :--- |")
        for i, h in enumerate(res["hitos"]):
            name = "INICIO" if i == 0 else ("FINAL" if h.get("is_final") else f"P{h['idx']}")
            md.append(f"| {name} | {h['km']:.2f} | {h['lat']:.6f} | {h['lon']:.6f} | {h['alt']:.1f} | {h['slope']:.2f}% |")
        md.append("")

    with open(OUTPUT_MD, "w", encoding="utf-8") as f:
        f.write("\n".join(md))

    # PDF
    with open(OUTPUT_PLOT, "rb") as f: img_b64 = base64.b64encode(f.read()).decode()
    html_body = markdown.markdown("\n".join(md), extensions=['tables'])
    html = f"""<html><head><meta charset="UTF-8"><style>
        body {{ font-family: Segoe UI, sans-serif; padding: 30px; line-height: 1.4; }}
        h1, h2 {{ color: #1a73e8; border-bottom: 1px solid #ddd; }}
        table {{ width: 100%; border-collapse: collapse; font-size: 10px; margin-top: 10px; }}
        th, td {{ border: 1px solid #ccc; padding: 4px; text-align: left; }}
        th {{ background: #f5f5f5; }}
    </style></head><body>
        <div style="text-align:center;"><img src="data:image/png;base64,{img_b64}" style="max-width:80%; border:1px solid #eee;"></div>
        {html_body}
    </body></html>"""
    
    with open(OUTPUT_HTML, "w", encoding="utf-8") as f: f.write(html)
    subprocess.run([EDGE_PATH, "--headless", "--disable-gpu", "--no-pdf-header-footer", f"--print-to-pdf={OUTPUT_PDF}", f"file:///{os.path.abspath(OUTPUT_HTML)}"], timeout=30)
    print(f"✅ Reporte generado: {OUTPUT_PDF}")

if __name__ == "__main__":
    generate()
