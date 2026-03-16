
import shapefile
import json
import os

SHP_PATH = r"c:\Users\rguti\Petral.MARK\red.vial.vecinal\red_vial_vecinal_dic20"

def search_routes():
    try:
        sf = shapefile.Reader(SHP_PATH)
        fields = [f[0] for f in sf.fields[1:]]
        print(f"Fields: {fields}")
        
        target_routes = ["IC-821", "IC-822"]
        extracted_features = []
        
        codruta_idx = fields.index('CODRUTA')
        
        print(f"Scanning shapefile for routes: {target_routes}...")
        
        for i, record in enumerate(sf.iterRecords()):
            route_id = record[codruta_idx]
            if route_id in target_routes:
                print(f"✅ Match found in record {i}: {dict(zip(fields, record))}")
                
                shape = sf.shape(i)
                points = shape.points
                
                feature = {
                    "type": "Feature",
                    "properties": dict(zip(fields, record)),
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [[p[0], p[1]] for p in points]
                    }
                }
                extracted_features.append(feature)
        
        if extracted_features:
            output_file = "routes_extracted.json"
            with open(output_file, "w", encoding="utf-8") as f:
                json.dump({
                    "type": "FeatureCollection",
                    "features": extracted_features
                }, f, indent=2)
            
            print(f"✅ Extracted {len(extracted_features)} features to {output_file}")
            
            # Create separate files for convenience
            for feat in extracted_features:
                name = feat["properties"]["CODRUTA"].replace("-", "").lower()
                with open(f"{name}_full.json", "w", encoding="utf-8") as f:
                    json.dump(feat, f, indent=2)
                print(f"✅ Saved separate file: {name}_full.json")
        else:
            print("❌ No matches found for the specified routes.")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    search_routes()
