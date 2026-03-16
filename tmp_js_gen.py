
import json

def to_js_obj(features, name_key):
    # Consolidate LineStrings into one array of coordinates for the GeoJSON LineString
    all_coords = []
    # We assume segments might be separate Features in the features list
    for f in features:
        all_coords.extend(f["geometry"]["coordinates"])
        
    geojson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": {"name": name_key},
            "geometry": {"type": "LineString", "coordinates": all_coords}
        }]
    }
    return geojson

def get_hitos(name_full_json):
    # Re-using logic to get hitos but specifically for JS export
    with open(name_full_json, "r", encoding="utf-8") as f:
        data = json.load(f)
    # The full.json doesn't have hitos, it has the Feature.
    # I should have used the process_route output.
    # Let's re-run or better, create a small script that reads the routes_extracted.json and generates JS
    pass

# Simplified: I will modify the generate_ic821_report_v2.py to also EXPORT THE JS FILES
# as it already has the hitos and processing logic.
