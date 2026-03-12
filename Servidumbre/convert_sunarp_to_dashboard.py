import json
from pyproj import Transformer

# Configurar transformador de PSAD56 UTM Zona 18S (EPSG:24878) a WGS84 (EPSG:4326)
transformer = Transformer.from_crs("epsg:24878", "epsg:4326", always_xy=True)

def convert_file(input_path, output_path, var_name, layer_name, color):
    with open(input_path, 'r') as f:
        data = json.load(f)
    
    coords = []
    for p in data:
        # pyproj usa (norte, este) para UTM o (lat, lon) para WGS84 dependiendo del orden del CRS
        # En EPSG:4326 usualmente es (lat, lon)
        lat, lon = transformer.transform(p['este'], p['norte'])
        coords.append([lon, lat]) # GeoJSON usa [lon, lat]
    
    # Cerrar polígono si no está cerrado
    if coords[0] != coords[-1]:
        coords.append(coords[0])
        
    geojson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "name": layer_name,
                    "style": "sunarp",
                    "color": color
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [coords]
                }
            }
        ]
    }
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(f"const {var_name} = {json.dumps(geojson, indent=4)};")
    print(f"Generado {output_path}")

# Ejecutar conversiones
convert_file(r'C:\Users\rguti\Petral.MARK\Servidumbre\SUNARP 1.json', 
             r'C:\Users\rguti\Petral.MARK\Dashboard_Puertos\layer_sunarp_1.js', 
             'SUNARP_1_GEOJSON', 'SUNARP 1 (Norte)', '#FF5733')

convert_file(r'C:\Users\rguti\Petral.MARK\Servidumbre\SUNARP 2.json', 
             r'C:\Users\rguti\Petral.MARK\Dashboard_Puertos\layer_sunarp_2.js', 
             'SUNARP_2_GEOJSON', 'SUNARP 2 (Este)', '#33FF57')

convert_file(r'C:\Users\rguti\Petral.MARK\Servidumbre\SUNARP 3.json', 
             r'C:\Users\rguti\Petral.MARK\Dashboard_Puertos\layer_sunarp_3.js', 
             'SUNARP_3_GEOJSON', 'SUNARP 3 (Oeste)', '#3357FF')
