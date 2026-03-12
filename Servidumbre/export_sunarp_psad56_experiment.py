import json
import zipfile
import os
from pyproj import Transformer

# Configurar transformador de PSAD56 UTM Zona 18S (EPSG:24878) a WGS84 (EPSG:4326)
# NOTA: EPSG:24878 es PSAD56 / UTM zone 18S.
# pyproj manejará la transformación del datum (incluyendo el desplazamiento de ~250m)
transformer = Transformer.from_crs("epsg:24878", "epsg:4326", always_xy=True)

def create_psad56_experiment_kmz():
    print("🛰️ Generando experimento KMZ: Asumiendo que SUNARP está en PSAD56...")
    
    # Definir la estructura de entrada (mismos archivos JSON)
    polygons = [
        {
            "id": "SUNARP_1_PSAD56",
            "name": "SUNARP 1 (Posiblemente PSAD56)",
            "file": r'C:\Users\rguti\Petral.MARK\Servidumbre\SUNARP 1.json',
            "color": "990000ff" # Rojo suave
        },
        {
            "id": "SUNARP_2_PSAD56",
            "name": "SUNARP 2 (Posiblemente PSAD56)",
            "file": r'C:\Users\rguti\Petral.MARK\Servidumbre\SUNARP 2.json',
            "color": "9900ff00" # Verde suave
        },
        {
            "id": "SUNARP_3_PSAD56",
            "name": "SUNARP 3 (Posiblemente PSAD56)",
            "file": r'C:\Users\rguti\Petral.MARK\Servidumbre\SUNARP 3.json',
            "color": "99ff0000" # Azul suave
        }
    ]

    kml_content = []
    kml_content.append('<?xml version="1.0" encoding="UTF-8"?>')
    kml_content.append('<kml xmlns="http://www.opengis.net/kml/2.2">')
    kml_content.append('  <Document>')
    kml_content.append('    <name>Experimento_SUNARP_PSAD56</name>')
    kml_content.append('    <description>IMPORTANTE: Estos polígonos asumen que los datos de SUNARP son PSAD56 y los transforman a WGS84 para ver si "encajan" mejor.</description>')
    
    for poly in polygons:
        kml_content.append(f'    <Style id="style_{poly["id"]}">')
        kml_content.append('      <LineStyle><color>ffffffff</color><width>2</width></LineStyle>')
        kml_content.append(f'      <PolyStyle><color>{poly["color"]}</color></PolyStyle>')
        kml_content.append('    </Style>')

    kml_content.append('    <Folder><name>Polígonos Transformados de PSAD56</name>')

    for poly in polygons:
        try:
            with open(poly["file"], 'r') as f:
                data = json.load(f)
            
            coords = []
            for p in data:
                # pyproj transform (x, y) = (Este, Norte) -> (lon, lat)
                lon, lat = transformer.transform(p['este'], p['norte'])
                coords.append(f"{lon:.8f},{lat:.8f},0")
            
            if coords[0] != coords[-1]:
                coords.append(coords[0])
                
            coords_str = " ".join(coords)
            
            kml_content.append('      <Placemark>')
            kml_content.append(f'        <name>{poly["name"]}</name>')
            kml_content.append(f'        <description>Transformado asumiendo origen PSAD56 UTM 18S</description>')
            kml_content.append(f'        <styleUrl>#style_{poly["id"]}</styleUrl>')
            kml_content.append('        <Polygon><outerBoundaryIs><LinearRing>')
            kml_content.append(f'          <coordinates>{coords_str}</coordinates>')
            kml_content.append('        </LinearRing></outerBoundaryIs></Polygon>')
            kml_content.append('      </Placemark>')
            
            print(f"✅ Procesado: {poly['name']} (Origen PSAD56)")
            
        except Exception as e:
            print(f"❌ Error procesando {poly['file']}: {e}")

    kml_content.append('    </Folder>')
    kml_content.append('  </Document>')
    kml_content.append('</kml>')
    
    output_path = r'C:\Users\rguti\Petral.MARK\Servidumbre\SUNARP_ASUMIENDO_PSAD56.kmz'
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as kmz:
        kmz.writestr("doc.kml", "\n".join(kml_content))
        
    print(f"\n✨ ¡KMZ de EXPERIMENTO generado en: {output_path}!")

if __name__ == "__main__":
    create_psad56_experiment_kmz()
