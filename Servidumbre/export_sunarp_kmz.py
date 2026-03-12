import json
import zipfile
import os
from pyproj import Transformer

# Configurar transformador de PSAD56 UTM Zona 18S (EPSG:24878) a WGS84 (EPSG:4326)
transformer = Transformer.from_crs("epsg:24878", "epsg:4326", always_xy=True)

def create_sunarp_kmz():
    print("🛰️ Generando consolidado KMZ de Servidumbres SUNARP...")
    
    # Definir la estructura de entrada
    polygons = [
        {
            "id": "SUNARP_1",
            "name": "SUNARP 1 (Norte)",
            "file": r'C:\Users\rguti\Petral.MARK\Servidumbre\SUNARP 1.json',
            "color": "7f3357ff", # abgr (Opaqueness 50% + BGR) - Rojo en KML es ff0000ff (abgr), pero le daremos un rojo suave
            "line_color": "ff3357ff" # Rojo fuerte para linea
        },
        {
            "id": "SUNARP_2",
            "name": "SUNARP 2 (Este)",
            "file": r'C:\Users\rguti\Petral.MARK\Servidumbre\SUNARP 2.json',
            "color": "7f57ff33", # Verde en KML
            "line_color": "ff57ff33"
        },
        {
            "id": "SUNARP_3",
            "name": "SUNARP 3 (Oeste)",
            "file": r'C:\Users\rguti\Petral.MARK\Servidumbre\SUNARP 3.json',
            "color": "7fff5733", # Azul en KML
            "line_color": "ffff5733"
        }
    ]

    kml_content = []
    kml_content.append('<?xml version="1.0" encoding="UTF-8"?>')
    kml_content.append('<kml xmlns="http://www.opengis.net/kml/2.2">')
    kml_content.append('  <Document>')
    kml_content.append('    <name>Servidumbres_SUNARP</name>')
    kml_content.append('    <description>Polígonos de Servidumbre de SUNARP</description>')
    
    for poly in polygons:
        # Estilos para cada poligono
        kml_content.append(f'    <Style id="style_{poly["id"]}">')
        kml_content.append('      <LineStyle>')
        kml_content.append(f'        <color>{poly["line_color"]}</color>')
        kml_content.append('        <width>2</width>')
        kml_content.append('      </LineStyle>')
        kml_content.append('      <PolyStyle>')
        kml_content.append(f'        <color>{poly["color"]}</color>')
        kml_content.append('      </PolyStyle>')
        kml_content.append('    </Style>')

    kml_content.append('    <Folder>')
    kml_content.append('      <name>Polígonos SUNARP</name>')

    for poly in polygons:
        try:
            with open(poly["file"], 'r') as f:
                data = json.load(f)
            
            coords = []
            for p in data:
                lat, lon = transformer.transform(p['este'], p['norte'])
                coords.append(f"{lon},{lat},0")
            
            # Cerrar el poligono si el primer y el ultimo no son iguales
            if coords[0] != coords[-1]:
                coords.append(coords[0])
                
            coords_str = " ".join(coords)
            
            kml_content.append('      <Placemark>')
            kml_content.append(f'        <name>{poly["name"]}</name>')
            kml_content.append(f'        <styleUrl>#style_{poly["id"]}</styleUrl>')
            kml_content.append('        <Polygon>')
            kml_content.append('          <outerBoundaryIs>')
            kml_content.append('            <LinearRing>')
            kml_content.append(f'              <coordinates>{coords_str}</coordinates>')
            kml_content.append('            </LinearRing>')
            kml_content.append('          </outerBoundaryIs>')
            kml_content.append('        </Polygon>')
            kml_content.append('      </Placemark>')
            
            print(f"✅ Agregado polígono: {poly['name']} ({len(coords)} vértices)")
            
        except Exception as e:
            print(f"❌ Error procesando {poly['file']}: {e}")

    kml_content.append('    </Folder>')
    kml_content.append('  </Document>')
    kml_content.append('</kml>')
    
    kml_string = "\n".join(kml_content)
    
    # Guardar KMZ
    output_path = r'C:\Users\rguti\Petral.MARK\Servidumbre\Servidumbres_SUNARP_Consolidadas.kmz'
    
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as kmz:
        kmz.writestr("doc.kml", kml_string)
        
    print(f"✨ ¡KMZ de Servidumbres generado exitosamente en: {output_path}!")

if __name__ == "__main__":
    create_sunarp_kmz()
