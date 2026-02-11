import json
from pyproj import Transformer
import os

def convert_coords():
    input_path = r"C:\Users\rguti\Petral.MARK\Servidumbre\coordenadas_servidumbre.json"
    output_path = r"C:\Users\rguti\Petral.MARK\Dashboard_Puertos\layer_servidumbre.js"
    
    if not os.path.exists(input_path):
        print(f"Error: No se encuentra {input_path}")
        return

    with open(input_path, 'r', encoding='utf-8') as f:
        coords_raw = json.load(f)

    # Transformer: EPSG:24878 (PSAD-56 / UTM zone 18S) -> EPSG:4326 (WGS84)
    transformer = Transformer.from_crs("EPSG:24878", "EPSG:4326", always_xy=True)
    
    features = []
    latlon_polygon = []
    
    # Process each vertex for the polygon and individual points (for labels)
    for item in coords_raw:
        v = item["vertice"]
        e = item["este"]
        n = item["norte"]
        
        lon, lat = transformer.transform(e, n)
        latlon_polygon.append([lon, lat])
        
        # Add a point feature for each vertex (useful for labeling if needed)
        features.append({
            "type": "Feature",
            "properties": {
                "vertice": v,
                "type": "vertex"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [lon, lat]
            }
        })

    # Close the polygon
    if latlon_polygon[0] != latlon_polygon[-1]:
        latlon_polygon.append(latlon_polygon[0])

    # Main polygon feature
    polygon_feature = {
        "type": "Feature",
        "properties": {
            "name": "Servidumbre PETRAL (42 Vértices)",
            "style": "servidumbre",
            "color": "#ff0000"
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [latlon_polygon]
        }
    }
    
    # We prepend the polygon so it renders under the vertices (if rendered)
    geojson = {
        "type": "FeatureCollection",
        "features": [polygon_feature] + features
    }

    js_content = f"const SERVIDUMBRE_GEOJSON = {json.dumps(geojson, indent=4)};"
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Capa generada con {len(coords_raw)} vértices en {output_path}")

if __name__ == "__main__":
    convert_coords()
