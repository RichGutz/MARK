import json
import os
import subprocess
import markdown
import base64
import matplotlib.pyplot as plt
from pyproj import Transformer
import io

# --- Configuración de Rutas ---
BASE_DIR = r"C:\Users\rguti\Petral.MARK"
SERVIDUMBRE_DIR = os.path.join(BASE_DIR, "Servidumbre")
OUTPUT_HTML = os.path.join(SERVIDUMBRE_DIR, "Reporte_Visual_SUNARP.html")
OUTPUT_PDF = os.path.join(SERVIDUMBRE_DIR, "Reporte_Visual_SUNARP.pdf")
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

# --- Transformador (PSAD56 UTM 18S -> WGS84) ---
transformer = Transformer.from_crs("epsg:24878", "epsg:4326", always_xy=True)

def transform_coords(este, norte):
    lon, lat = transformer.transform(este, norte)
    return lat, lon

def load_json(filename):
    path = os.path.join(SERVIDUMBRE_DIR, filename)
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def plot_to_base64(tramos, title, individual=False, color_map=None):
    plt.figure(figsize=(10, 8))
    
    for t in tramos:
        x = [p['este'] for p in t['data']]
        y = [p['norte'] for p in t['data']]
        # Cerrar poligono
        x.append(x[0])
        y.append(y[0])
        
        color = color_map.get(t['name'], 'blue') if color_map else 'blue'
        plt.plot(x, y, label=t['name'], marker='.', markersize=4, color=color, linewidth=1.5)
        plt.fill(x, y, color=color, alpha=0.1)
        
        # Etiquetas de vertices
        for p in t['data']:
            plt.text(p['este'], p['norte'], f" {p['vertice']}", fontsize=8, alpha=0.8)

    plt.title(title)
    plt.xlabel("Este (X)")
    plt.ylabel("Norte (Y)")
    plt.grid(True, linestyle='--', alpha=0.6)
    if not individual:
        plt.legend(fontsize=9)
    plt.axis('equal')
    
    buf = io.BytesIO()
    plt.savefig(buf, format='png', dpi=150, bbox_inches='tight')
    plt.close()
    return base64.b64encode(buf.getvalue()).decode()

def generate_report():
    print("🚀 Iniciando generación de reporte visual...")
    
    # 1. Cargar datos (Sistema / Ajustados)
    sunarp1 = load_json("SUNARP 1.json")
    sunarp2_man = load_json("SUNARP 2.json")
    sunarp3 = load_json("SUNARP 3.json")
    
    # Tramo 2 (Original con corrección .54)
    sunarp2_orig = [dict(p) for p in sunarp2_man]
    for p in sunarp2_orig:
        if p['vertice'] == "10":
            p['este'] = 476890.54
            p['norte'] = 8313655.6247

    color_map = {
        "Tramo 1 (Norte)": "#e53935",
        "Tramo 2 (Este)": "#43a047",
        "Tramo 3 (Oeste)": "#1e88e5",
        "Trabajo 2: Tramo 2 Original": "#fb8c00"
    }

    # --- GENERAR REPORT SECTIONS ---
    sections_html = []
    
    # 1. VISUALIZACIÓN GENERAL (SISTEMA)
    sistema_tramos = [
        {"name": "Tramo 1 (Norte)", "data": sunarp1},
        {"name": "Tramo 2 (Este)", "data": sunarp2_man},
        {"name": "Tramo 3 (Oeste)", "data": sunarp3}
    ]
    img_general = plot_to_base64(sistema_tramos, "VISUALIZACIÓN GENERAL DE SERVIDUMBRES (SISTEMA)", color_map=color_map)
    sections_html.append(f"""
        <h1>Reporte de Servidumbres SUNARP</h1>
        <div class="summary">
            <p>Este reporte contiene la visualización y tablas de coordenadas para los tramos de servidumbre, comparando los datos actuales del sistema con los datos originales de SUNARP.</p>
        </div>
        <h2>1. Vista General del Sistema</h2>
        <div class="plot-container"><img src="data:image/png;base64,{img_general}"></div>
    """)

    # 2. SECCIONES INDIVIDUALES
    for t in sistema_tramos:
        img_ind = plot_to_base64([t], f"DETALLE: {t['name']}", individual=True, color_map=color_map)
        
        # Generar Tabla
        rows = ""
        for p in t['data']:
            lat, lon = transform_coords(p['este'], p['norte'])
            rows += f"<tr><td>{p['vertice']}</td><td>{p['este']:.4f}</td><td>{p['norte']:.4f}</td><td>{lat:.8f}</td><td>{lon:.8f}</td></tr>"
        
        sections_html.append(f"""
            <div class="page-break"></div>
            <h2>{t['name']} - Coordenadas de Sistema</h2>
            <div class="plot-container"><img src="data:image/png;base64,{img_ind}"></div>
            <table>
                <thead>
                    <tr><th>Vértice</th><th>Este (X)</th><th>Norte (Y)</th><th>Latitud</th><th>Longitud</th></tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        """)

    # 3. TRABAJO 2: TRAMO 2 ORIGINAL
    t2_orig = {"name": "Trabajo 2: Tramo 2 Original", "data": sunarp2_orig}
    img_orig = plot_to_base64([t2_orig], "TRABAJO 2: TRAMO 2 (COORDENADAS ORIGINALES SUNARP)", individual=True, color_map=color_map)
    
    rows_orig = ""
    for p in sunarp2_orig:
        lat, lon = transform_coords(p['este'], p['norte'])
        style = 'style="background:#fff3e0; font-weight:bold;"' if p['vertice'] == '10' else ""
        nota = "Dato Oficial SUNARP (.54)" if p['vertice'] == '10' else ""
        rows_orig += f"<tr {style}><td>{p['vertice']}</td><td>{p['este']:.4f}</td><td>{p['norte']:.4f}</td><td>{lat:.8f}</td><td>{lon:.8f}</td><td>{nota}</td></tr>"

    sections_html.append(f"""
        <div class="page-break"></div>
        <h2 style="color:#fb8c00;">Trabajo 2: Tramo 2 (Original SUNARP)</h2>
        <div class="note">
            Este ploteo utiliza las coordenadas originales de la partida SUNARP, incluyendo la corrección del Punto 10 a 476890.54. 
            <strong>Nota:</strong> Este polígono no cierra técnicamente (gap de ~900m) pero se incluye para validación documental.
        </div>
        <div class="plot-container"><img src="data:image/png;base64,{img_orig}"></div>
        <table>
            <thead>
                <tr><th>Vértice</th><th>Este (X)</th><th>Norte (Y)</th><th>Latitud</th><th>Longitud</th><th>Nota</th></tr>
            </thead>
            <tbody>{rows_orig}</tbody>
        </table>
    """)

    # --- HTML WRAPPER ---
    html = f"""<html><head><meta charset="UTF-8"><style>
        body {{ font-family: 'Segoe UI', Arial, sans-serif; padding: 20px; color: #333; }}
        h1 {{ text-align: center; color: #1a73e8; font-size: 24px; border-bottom: 3px solid #1a73e8; padding-bottom: 10px; margin-bottom: 30px; }}
        h2 {{ color: #1a73e8; border-left: 5px solid #1a73e8; padding-left: 10px; margin-top: 40px; }}
        .summary {{ background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; font-size: 14px; border-left: 5px solid #ccc; }}
        .plot-container {{ text-align: center; margin: 20px 0; border: 1px solid #eee; padding: 10px; background: white; }}
        .plot-container img {{ max-width: 90%; height: auto; }}
        table {{ width: 100%; border-collapse: collapse; font-size: 10px; margin-top: 20px; }}
        th, td {{ border: 1px solid #ccc; padding: 6px; text-align: center; }}
        th {{ background: #1a73e8; color: white; text-transform: uppercase; }}
        tr:nth-child(even) {{ background: #f2f2f2; }}
        .note {{ background: #fff3e0; border-left: 5px solid #ff9800; padding: 15px; margin-bottom: 20px; font-size: 13px; }}
        .page-break {{ page-break-before: always; }}
    </style></head><body>
        {" ".join(sections_html)}
    </body></html>"""

    with open(OUTPUT_HTML, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"✅ HTML generado: {OUTPUT_HTML}")

    # --- PDF EXPORT ---
    try:
        subprocess.run([
            EDGE_PATH, "--headless", "--disable-gpu", "--no-pdf-header-footer",
            f"--print-to-pdf={OUTPUT_PDF}", f"file:///{os.path.abspath(OUTPUT_HTML)}"
        ], timeout=30, check=True)
        print(f"✨ PDF generado con éxito: {OUTPUT_PDF}")
    except Exception as e:
        print(f"❌ Error al generar PDF: {e}")

if __name__ == "__main__":
    generate_report()
