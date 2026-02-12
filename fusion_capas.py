import json
import re
import os
import ast

def extract_json(file_path, var_name):
    """Specific extraction for different JS files."""
    basename = os.path.basename(file_path)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if basename == 'shougang_polygon.js':
        # Reconstruct manually because it uses variables
        coords_match = re.search(r'const\s+ALL_COORDS\s*=\s*\[(.*?)\];', content, re.DOTALL)
        if coords_match:
            try:
                raw = coords_match.group(1)
                raw = re.sub(r'//.*', '', raw)
                coords_str = '[' + raw.strip() + ']'
                # ast.literal_eval is more robust for JS-like lists with trailing commas
                all_coords = ast.literal_eval(coords_str)
                
                def to_geojson(coords):
                    return [[p[1], p[0]] for p in coords]

                outer = to_geojson(all_coords[0:15])
                hole1 = to_geojson(all_coords[15:22])
                hole2 = to_geojson(all_coords[22:26])
                
                # Ensure rings are closed for KML/GeoJSON standards
                for ring in [outer, hole1, hole2]:
                    if ring and ring[0] != ring[-1]:
                        ring.append(ring[0])
                
                return {
                    "type": "Feature",
                    "properties": {"name": "Concesión Shougang", "color": "#ffd700"},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [outer, hole1, hole2]
                    }
                }
            except Exception as e:
                print(f"Error parsing shougang: {e}")
                return None

    # For other files, try regex + cleanup
    pattern = rf'const\s+{var_name}\s*=\s*(.*?);'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        json_str = match.group(1).strip()
        # Clean up common JS non-JSON junk
        json_str = re.sub(r'//.*', '', json_str) # remove comments
        # Try to use ast.literal_eval first as it handles single quotes and trailing commas
        try:
            return ast.literal_eval(json_str)
        except:
            # Fallback to json.loads with cleanup
            json_str = json_str.replace("'", '"')
            json_str = re.sub(r',\s*([\]}])', r'\1', json_str) # remove trailing commas
            try:
                return json.loads(json_str)
            except json.JSONDecodeError as e:
                print(f"Error decoding {basename} variable {var_name}: {e}")
    return None

def geojson_to_kml_folder(name, geojson):
    if not geojson: return ""
    kml = f'  <Folder>\n    <name>{name}</name>\n'
    
    features = []
    if geojson.get('type') == 'Feature':
        features = [geojson]
    elif geojson.get('type') == 'FeatureCollection':
        features = geojson.get('features', [])
    elif geojson.get('type') in ['Polygon', 'LineString']:
        features = [{'type': 'Feature', 'geometry': geojson, 'properties': {}}]

    for i, feature in enumerate(features):
        geom = feature.get('geometry')
        if not geom: continue
        
        props = feature.get('properties', {})
        feat_name = props.get('name') or props.get('Name') or props.get('anp_nomb') or f"{name} Item {i+1}"
        
        # Color KML (AABBGGRR)
        color = "ff1400ff" # Red default
        if name == 'Shougang': color = "ff00d7ff" 
        elif name == 'Petral (BORDE)': color = "ff00ff00" # Green
        elif name == 'Servidumbre': color = "ff0000ff" # Red
        
        if geom['type'] == 'Polygon':
            kml += f'    <Placemark>\n      <name>{feat_name}</name>\n'
            kml += f'      <Style><LineStyle><color>{color}</color><width>2</width></LineStyle><PolyStyle><fill>0</fill></PolyStyle></Style>\n'
            kml += '      <Polygon>\n'
            
            rings = geom['coordinates']
            # Outer ring
            kml += '        <outerBoundaryIs>\n          <LinearRing>\n            <coordinates>\n'
            outer = rings[0]
            if outer[0] != outer[-1]: outer.append(outer[0])
            coords_str = " ".join([f"{c[0]},{c[1]},0" for c in outer])
            kml += f'              {coords_str}\n'
            kml += '            </coordinates>\n          </LinearRing>\n        </outerBoundaryIs>\n'
            
            # Inner rings
            for hole in rings[1:]:
                if hole[0] != hole[-1]: hole.append(hole[0])
                kml += '        <innerBoundaryIs>\n          <LinearRing>\n            <coordinates>\n'
                kml += " ".join([f"{c[0]},{c[1]},0" for c in hole])
                kml += '            </coordinates>\n          </LinearRing>\n        </innerBoundaryIs>\n'
            
            kml += '      </Polygon>\n    </Placemark>\n'
            
        elif geom['type'] in ['LineString', 'MultiLineString']:
            kml += f'    <Placemark>\n      <name>{feat_name}</name>\n'
            kml += f'      <Style><LineStyle><color>{color}</color><width>3</width></LineStyle></Style>\n'
            
            if geom['type'] == 'LineString':
                kml += '      <LineString>\n        <coordinates>\n'
                kml += " ".join([f"{c[0]},{c[1]},0" for c in geom['coordinates']])
                kml += '\n        </coordinates>\n      </LineString>\n'
            else: # MultiLineString
                kml += '      <MultiLineString>\n'
                for line in geom['coordinates']:
                    kml += '        <LineString>\n          <coordinates>\n'
                    kml += " ".join([f"{c[0]},{c[1]},0" for c in line])
                    kml += '\n          </coordinates>\n        </LineString>\n'
                kml += '      </MultiLineString>\n'
            kml += '    </Placemark>\n'

    kml += '  </Folder>\n'
    return kml

def main():
    base_path = r'c:\Users\rguti\Petral.MARK\Dashboard_Puertos'
    output_file = r'c:\Users\rguti\Petral.MARK\capas_fusionadas.kml'
    
    layers = [
        {'name': 'Shougang', 'file': 'shougang_polygon.js', 'var': 'SHOUGANG_POLYGON_FEATURE'},
        {'name': 'Petral (BORDE)', 'file': 'perimeter_sides.js', 'var': 'PERIMETER_SIDES_GEOJSON'},
        {'name': 'Ferrocarril', 'file': 'railway_marcona_andahuaylas.js', 'var': 'RAILWAY_MARCONA_ANDAHUAYLAS'},
        {'name': 'Ruta Costera', 'file': 'coastal_route.js', 'var': 'COASTAL_ROUTE_GEOJSON'},
        {'name': 'Servidumbre', 'file': 'layer_servidumbre.js', 'var': 'SERVIDUMBRE_GEOJSON'}
    ]
    
    kml_full = '<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2">\n<Document>\n'
    kml_full += '  <name>Capas Fusionadas PETRAL MARCONA</name>\n'
    
    for layer in layers:
        fpath = os.path.join(base_path, layer['file'])
        print(f"Procesando {layer['name']}...")
        data = extract_json(fpath, layer['var'])
        if data:
            kml_full += geojson_to_kml_folder(layer['name'], data)
        else:
            print(f"  Error: No se pudo cargar la capa")
            
    kml_full += '</Document>\n</kml>'
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(kml_full)
    print(f"\nExito: KML generado en {output_file}")

if __name__ == "__main__":
    main()
