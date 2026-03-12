import os
import json
import zipfile
from supabase import create_client, Client
from dotenv import load_dotenv
from datetime import datetime
from pyproj import Transformer

# Cargar variables de entorno
load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))
url = os.environ.get("SUPABASE_URL") or "https://mancsrsbtzgctgorpogs.supabase.co"
key = os.environ.get("SUPABASE_KEY") or "sb_publishable_CT41HFF7NMtQunrSSGsksg_uwxmfteK"

# --- TRANSFORMADORES ---
# 1. GPS/Tracking: Ya viene en WGS84 (EPSG:4326)
# 2. Perimetro Nuevo: UTM 18S (WGS84) -> EPSG:32718 a EPSG:4326
tf_wgs_to_geo = Transformer.from_crs("epsg:32718", "epsg:4326", always_xy=True)

# 3. SUNARP: UTM 18S (PSAD56) -> EPSG:24878 a EPSG:4326 (Confirmado como estándar de SUNARP)
tf_sunarp = Transformer.from_crs("epsg:24878", "epsg:4326", always_xy=True)

def generate_master_final_kmz():
    print("🛰️ Generando Master KMZ FINAL (SUNARP estandarizado a PSAD56)...")
    
    kml_content = []
    kml_content.append('<?xml version="1.0" encoding="UTF-8"?>')
    kml_content.append('<kml xmlns="http://www.opengis.net/kml/2.2">')
    kml_content.append('  <Document>')
    kml_content.append('    <name>Master_Viaje_Campo_Final</name>')
    kml_content.append('    <description>Consolidado: Tracking GPS RG + SUNARP (Traducido de PSAD56) + Nuevo Perímetro</description>')
    
    # --- ESTILOS ---
    kml_content.append('''
    <Style id="trackingRouteStyle"><LineStyle><color>ff0000ff</color><width>4</width></LineStyle></Style>
    <Style id="trackingPointStyle"><IconStyle><scale>0.6</scale><Icon><href>http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png</href></Icon></IconStyle></Style>
    
    <!-- Estilos SUNARP (Traducidos de PSAD56) -->
    <Style id="style_SUNARP_1"><LineStyle><color>ff3357ff</color><width>2</width></LineStyle><PolyStyle><color>7f3357ff</color></PolyStyle></Style>
    <Style id="style_SUNARP_2"><LineStyle><color>ff57ff33</color><width>2</width></LineStyle><PolyStyle><color>7f57ff33</color></PolyStyle></Style>
    <Style id="style_SUNARP_3"><LineStyle><color>ffff5733</color><width>2</width></LineStyle><PolyStyle><color>7fff5733</color></PolyStyle></Style>
    
    <!-- Estilo Perimetro -->
    <Style id="style_PERIMETRO"><LineStyle><color>ff00ffff</color><width>3</width></LineStyle><PolyStyle><color>1f00ffff</color></PolyStyle></Style>
    ''')

    # 1. TRACKING GPS (RG)
    kml_content.append('    <Folder><name>1. Tracking GPS (RG)</name>')
    try:
        supabase: Client = create_client(url, key)
        response = supabase.table("field_tracking_elevation").select("*").order("created_at").execute()
        records = response.data
        if records:
            coords_str = []
            valid_p = 0
            for r in records:
                lat = r.get('latitude', 0)
                user = r.get('user_name') or ""
                if lat > -13 or user.strip().upper() != "RG": continue
                lon, elev = r.get('longitude'), r.get('elevation', 0) or 0
                valid_p += 1
                coords_str.append(f"{lon},{lat},{elev}")
                kml_content.append(f'      <Placemark><name>Pto {valid_p} (DB_ID: {r.get("id")})</name><styleUrl>#trackingPointStyle</styleUrl><Point><coordinates>{lon},{lat},{elev}</coordinates></Point></Placemark>')
            kml_content.append(f'      <Placemark><name>Ruta de Viaje (RG)</name><styleUrl>#trackingRouteStyle</styleUrl><LineString><tessellate>1</tessellate><altitudeMode>absolute</altitudeMode><coordinates>{" ".join(coords_str)}</coordinates></LineString></Placemark>')
            print(f"✅ GPS: {valid_p} puntos procesados.")
    except Exception as e: print(f"Error GPS: {e}")
    kml_content.append('    </Folder>')

    # 2. POLIGONOS SUNARP (PSAD56 a WGS84)
    kml_content.append('    <Folder><name>2. Polígonos SUNARP (PSAD56)</name>')
    base_dir = r'C:\Users\rguti\Petral.MARK\Servidumbre'
    sunarp_files = [("SUNARP 1.json", "1"), ("SUNARP 2.json", "2"), ("SUNARP 3.json", "3")]
    for fname, idx in sunarp_files:
        try:
            with open(os.path.join(base_dir, fname), 'r') as f:
                data = json.load(f)
            # Transformamos asumiendo que el JSON tiene UTM PSAD56
            coords = []
            for p in data:
                lon, lat = tf_sunarp.transform(p['este'], p['norte'])
                coords.append(f"{lon:.8f},{lat:.8f},0")
            if coords[0] != coords[-1]: coords.append(coords[0])
            kml_content.append(f'      <Placemark><name>SUNARP {idx}</name><styleUrl>#style_SUNARP_{idx}</styleUrl><Polygon><outerBoundaryIs><LinearRing><coordinates>{" ".join(coords)}</coordinates></LinearRing></outerBoundaryIs></Polygon></Placemark>')
            print(f"✅ SUNARP {idx}: Traducido de PSAD56.")
        except Exception as e: print(f"Error SUNARP {idx}: {e}")
    kml_content.append('    </Folder>')

    # 3. PERIMETRO NUEVO (WGS84 UTM 18S)
    kml_content.append('    <Folder><name>3. Perímetro Nuevo</name>')
    try:
        with open(os.path.join(base_dir, "PERIMETRO_NUEVO.json"), 'r') as f:
            data = json.load(f)
        coords = []
        for p in data:
            lon, lat = tf_wgs_to_geo.transform(p['este'], p['norte'])
            coords.append(f"{lon:.8f},{lat:.8f},0")
        if coords[0] != coords[-1]: coords.append(coords[0])
        kml_content.append(f'      <Placemark><name>Perímetro</name><description>26 Vértices</description><styleUrl>#style_PERIMETRO</styleUrl><Polygon><outerBoundaryIs><LinearRing><coordinates>{" ".join(coords)}</coordinates></LinearRing></outerBoundaryIs></Polygon></Placemark>')
        print(f"✅ Perímetro: Procesado.")
    except Exception as e: print(f"Error Perimetro: {e}")
    kml_content.append('    </Folder>')

    kml_content.append('  </Document></kml>')
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    out_name = f"Master_Viaje_Campo_Standard_{timestamp}.kmz"
    output_path = os.path.join(r'C:\Users\rguti\Petral.MARK\Dashboard_Puertos', out_name)
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as kmz:
        kmz.writestr("doc.kml", "\n".join(kml_content))
    print(f"\n✨ ¡Master KMZ FINAL generado en: {output_path}!")

if __name__ == "__main__":
    generate_master_final_kmz()
