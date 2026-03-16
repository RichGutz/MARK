
import shapefile
import json
import os

SHP_PATH = r"c:\Users\rguti\Petral.MARK\red.vial.vecinal\red_vial_vecinal_dic20"

def search_ic822():
    try:
        sf = shapefile.Reader(SHP_PATH)
        fields = [f[0] for f in sf.fields[1:]]
        print(f"Fields: {fields}")
        
        found = False
        # First, search specifically for CODRUTA == IC-822
        codruta_idx = fields.index('CODRUTA')
        
        for i, record in enumerate(sf.iterRecords()):
            if record[codruta_idx] == 'IC-822' or record[codruta_idx] == 'IC822':
                print(f"✅ Exact match found in record {i}: {dict(zip(fields, record))}")
                
                shape = sf.shape(i)
                points = shape.points
                
                geojson = {
                    "type": "Feature",
                    "properties": dict(zip(fields, record)),
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [[p[0], p[1]] for p in points]
                    }
                }
                
                with open("ic822_exact.json", "w", encoding="utf-8") as f:
                    json.dump(geojson, f, indent=2)
                
                print("✅ IC-822 GeoJSON extracted to ic822_exact.json")
                found = True
                # We don't break, maybe there are multiple segments
        
        if not found:
            print("❌ IC-822 not found as a primary route ID. Checking trajectory descriptions...")
            # Fallback to description search but collect all matches
            matches = []
            for i, record in enumerate(sf.iterRecords()):
                if any("IC-822" in str(val) for val in record):
                    matches.append(dict(zip(fields, record)))
            
            if matches:
                 print(f"Found {len(matches)} records mentioning IC-822:")
                 for m in matches[:5]:
                     print(f" - {m['CODRUTA']}: {m['TRAYECTORI']}")
            else:
                 print("❌ No mentions of IC-822 found.")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    search_ic822()
