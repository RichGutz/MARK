
import shapefile
import json
import os

SHP_PATH = r"c:\Users\rguti\Petral.MARK\red.vial.vecinal\red_vial_vecinal_dic20"

def search_ic822():
    try:
        sf = shapefile.Reader(SHP_PATH)
        fields = [f[0] for f in sf.fields[1:]]
        print(f"Fields: {fields}")
        
        # Look for IC-822 in any field
        found = False
        for i, record in enumerate(sf.iterRecords()):
            if any("IC-822" in str(val) for val in record) or any("IC 822" in str(val) for val in record):
                print(f"Match found in record {i}: {dict(zip(fields, record))}")
                
                # Extract shape
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
                
                with open("ic822_extracted.json", "w", encoding="utf-8") as f:
                    json.dump(geojson, f, indent=2)
                
                print("✅ IC-822 GeoJSON extracted to ic822_extracted.json")
                found = True
                break
        
        if not found:
            print("❌ IC-822 not found in shapefile.")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    search_ic822()
