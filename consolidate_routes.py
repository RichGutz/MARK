
import json

def consolidate():
    with open("routes_extracted.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    features = data["features"]
    
    # Organize by route
    routes = {}
    for feat in features:
        rid = feat["properties"]["CODRUTA"]
        if rid not in routes:
            routes[rid] = []
        routes[rid].append(feat)
    
    # For each route, we could try to join geometries if they are contiguous, 
    # but as a GeoJSON FeatureCollection it's fine to have multiple features.
    # We will just verify they are the correct ones.
    
    for rid, feats in routes.items():
        print(f"Route {rid}: {len(feats)} segments found.")
        
    # Output the final consolidated file for the project
    with open("ic821_ic822_consolidated.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    
    print("✅ Consolidated file created: ic821_ic822_consolidated.json")

if __name__ == "__main__":
    consolidate()
