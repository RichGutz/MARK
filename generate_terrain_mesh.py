import json
import math
import requests
import time

# --- Constants ---
# Perimeter Vertices (Extracted from analyze_perimeter_sides.py output)
V1 = [-75.25695083552709, -15.165498334382889] # NE
V2 = [-75.26825393885237, -15.172534472456562] # NW
V3 = [-75.23798892224755, -15.197477563030073] # S

# Output File (Isolated)
OUTPUT_FILE = r'C:\Users\rguti\Petral.MARK\Dashboard_Puertos\terrain_mesh_3d.js'

# Config
GRID_SPACING_METERS = 50 # High Resolution

# --- Helpers ---
def get_elevation_batch(locations):
    """
    Fetch elevations from Open-Meteo for a list of (lat, lon).
    API limits: Check documentation. Often chunks of locations are better.
    """
    base_url = "https://api.open-meteo.com/v1/elevation"
    elevations = []
    
    # Process in chunks to respect URL length / API limits
    CHUNK_SIZE = 100 
    
    print(f"Fetching elevation for {len(locations)} points...")
    
    for i in range(0, len(locations), CHUNK_SIZE):
        chunk = locations[i:i+CHUNK_SIZE]
        lats = [f"{p[1]:.6f}" for p in chunk]
        lons = [f"{p[0]:.6f}" for p in chunk]
        
        url = f"{base_url}?latitude={','.join(lats)}&longitude={','.join(lons)}"
        
        while True:
            try:
                resp = requests.get(url)
                data = resp.json()
                
                if 'elevation' in data:
                    elevations.extend(data['elevation'])
                    print(f"  Chunk {i}: OK")
                    break # Success
                elif 'error' in data and 'limit' in str(data.get('reason', '')).lower():
                    print("  Rate limit hit. Waiting 60s...")
                    time.sleep(60)
                    continue # Retry
                else:
                    print(f"  Error in chunk {i}: {data}")
                    elevations.extend([0]*len(chunk))
                    break # Skip batch on other errors
                
            except Exception as e:
                print(f"Request failed: {e}")
                time.sleep(5)
                # Simple retry logic could define separate counter, here just break to avoid inf loop on net error
                elevations.extend([0]*len(chunk))
                break
            
        time.sleep(2) # Increased polite delay
            
    return elevations

def point_in_triangle(pt, v1, v2, v3):
    """
    Barycentric coordinate technique to check if pt is in triangle v1,v2,v3
    pt, v1, v2, v3 are [lon, lat]
    """
    def sign(p1, p2, p3):
        return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1])

    d1 = sign(pt, v1, v2)
    d2 = sign(pt, v2, v3)
    d3 = sign(pt, v3, v1)

    has_neg = (d1 < 0) or (d2 < 0) or (d3 < 0)
    has_pos = (d1 > 0) or (d2 > 0) or (d3 > 0)

    return not (has_neg and has_pos)

def add_meters_to_coords(lat, lon, dy_meters, dx_meters):
    """
    Approximate offset.
    1 deg lat ~= 111132.92 m
    1 deg lon ~= 111412.84 * cos(lat) m
    """
    r_earth = 6378137
    pi = math.pi
    
    new_lat = lat + (dy_meters / r_earth) * (180 / pi)
    new_lon = lon + (dx_meters / r_earth) * (180 / pi) / math.cos(lat * pi/180)
    
    return [new_lon, new_lat]

def main():
    print("=" * 60)
    print("GENERACIÓN DE MALLA 3D DE TERRENO - MODO BATCH")
    print("=" * 60)
    
    # 1. Define Bounding Box
    lons = [V1[0], V2[0], V3[0]]
    lats = [V1[1], V2[1], V3[1]]
    
    min_lon, max_lon = min(lons), max(lons)
    min_lat, max_lat = min(lats), max(lats)
    
    # 2. Generate Grid Points
    lat_step = (50 / 111132) 
    avg_lat = (min_lat + max_lat) / 2
    lon_step = (50 / (111320 * math.cos(math.radians(avg_lat))))
    
    print(f"\nGrid Steps (deg): Lat {lat_step:.6f}, Lon {lon_step:.6f}")
    
    grid_points = []
    
    curr_lat = max_lat
    while curr_lat >= min_lat:
        curr_lon = min_lon
        while curr_lon <= max_lon:
            pt = [curr_lon, curr_lat]
            if point_in_triangle(pt, V1, V2, V3):
                grid_points.append(pt)
            curr_lon += lon_step
        curr_lat -= lat_step
        
    total_points = len(grid_points)
    print(f"\n✓ Generated {total_points} points inside triangle")
    
    if not grid_points:
        print("ERROR: No points found. Check logic.")
        return

    # 3. DIVIDE INTO 5 BATCHES
    NUM_BATCHES = 5
    batch_size = math.ceil(total_points / NUM_BATCHES)
    
    print(f"\n{'='*60}")
    print(f"PROCESSING IN {NUM_BATCHES} BATCHES (~{batch_size} points each)")
    print(f"{'='*60}\n")
    
    all_elevations = []
    
    for batch_num in range(NUM_BATCHES):
        start_idx = batch_num * batch_size
        end_idx = min((batch_num + 1) * batch_size, total_points)
        batch_points = grid_points[start_idx:end_idx]
        
        print(f"┌─ BATCH {batch_num + 1}/{NUM_BATCHES} ─────────────────────────")
        print(f"│ Points: {len(batch_points)} (indices {start_idx} to {end_idx-1})")
        print(f"└{'─'*50}")
        
        # Fetch elevations for this batch
        batch_elevations = get_elevation_batch(batch_points)
        all_elevations.extend(batch_elevations)
        
        # Count zeros (potential failures)
        zeros = batch_elevations.count(0)
        valid = len(batch_elevations) - zeros
        print(f"  ✓ Valid: {valid} | Zeros: {zeros}")
        
        # Pause between batches (except after last one)
        if batch_num < NUM_BATCHES - 1:
            wait_time = 10
            print(f"  ⏸  Waiting {wait_time}s before next batch...\n")
            time.sleep(wait_time)
        else:
            print()
    
    # 4. Summary
    total_zeros = all_elevations.count(0)
    total_valid = len(all_elevations) - total_zeros
    
    print(f"{'='*60}")
    print(f"FINAL SUMMARY")
    print(f"{'='*60}")
    print(f"Total Points:  {len(all_elevations)}")
    print(f"Valid Data:    {total_valid} ({100*total_valid/len(all_elevations):.1f}%)")
    print(f"Zero Values:   {total_zeros} ({100*total_zeros/len(all_elevations):.1f}%)")
    
    if total_valid > 0:
        valid_elevations = [e for e in all_elevations if e > 0]
        print(f"Min Altitude:  {min(valid_elevations):.1f} m")
        print(f"Max Altitude:  {max(valid_elevations):.1f} m")
    print(f"{'='*60}\n")
    
    # 5. Format for Plotly
    x_coords = [p[0] for p in grid_points]
    y_coords = [p[1] for p in grid_points]
    z_coords = all_elevations
    
    # 6. Create JS file
    js_content = f"""
// Auto-generated by generate_terrain_mesh.py
// Isolated 3D Terrain Data
// Generated: {time.strftime('%Y-%m-%d %H:%M:%S')}
// Total Points: {len(grid_points)} | Valid: {total_valid} | Zeros: {total_zeros}
const TERRAIN_MESH_DATA = {{
    x: {json.dumps(x_coords)},
    y: {json.dumps(y_coords)},
    z: {json.dumps(z_coords)},
    type: 'mesh3d',
    intensity: {json.dumps(z_coords)},
    colorscale: 'Earth'
}};
"""
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"✓ Saved to: {OUTPUT_FILE}\n")

if __name__ == "__main__":
    main()

