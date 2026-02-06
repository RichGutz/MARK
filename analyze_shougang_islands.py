import re
import statistics

def parse_js_coords(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Extract the ALL_COORDS array content
    match = re.search(r'const ALL_COORDS = \[\s*([\s\S]*?)\];', content)
    if not match:
        print("Could not find ALL_COORDS")
        return []
    
    raw_coords = match.group(1)
    
    # Parse coordinates manually or use regex
    # Format: [-15.310100, -74.956170], // 1
    coords_list = []
    lines = raw_coords.strip().split('\n')
    for line in lines:
        line = line.strip()
        if not line or line.startswith('//'): continue
        
        # specific match for [lat, lon]
        pt_match = re.search(r'\[\s*(-?[\d\.]+)\s*,\s*(-?[\d\.]+)\s*\]', line)
        if pt_match:
            lat = float(pt_match.group(1))
            lon = float(pt_match.group(2))
            coords_list.append((lat, lon))
            
    return coords_list

def analyze_groups(coords):
    # Group 1: Indices 0-14 (15 points)
    g1 = coords[0:15]
    
    # Group 2: Indices 15-21 (7 points)
    g2 = coords[15:22]
    
    # Group 3: Indices 22-25 (4 points) - assuming up to end
    g3 = coords[22:]
    
    groups = {
        "Group 1 (Outer?)": g1,
        "Group 2 (Hole 1?)": g2,
        "Group 3 (Hole 2?)": g3
    }
    
    best_group = None
    max_north = -90
    
    print(f"Total coords found: {len(coords)}")
    
    for name, pts in groups.items():
        if not pts: continue
        lats = [p[0] for p in pts]
        lons = [p[1] for p in pts]
        
        avg_lat = statistics.mean(lats)
        min_lat = min(lats)
        max_lat = max(lats) # North-most
        
        print(f"\n{name}: {len(pts)} points")
        print(f"  Lat Range: {min_lat} to {max_lat}")
        print(f"  Avg Lat: {avg_lat}")
        
        if max_lat > max_north:
            max_north = max_lat
            best_group = name

    print(f"\nNorthernmost Island is: {best_group}")

if __name__ == "__main__":
    path = "c:\\Users\\rguti\\Petral.MARK\\shougang_polygon.js"
    coords = parse_js_coords(path)
    analyze_groups(coords)
