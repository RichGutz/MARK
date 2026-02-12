import json
import math
import requests
import os

# --- 1. Coordinate Data (From layer_servidumbre.js) ---
# Copied from previous view_file
COORDINATES = [
    [-75.21577720045273, -15.267075293319131],
    [-75.2173651018413, -15.259574413720262],
    [-75.21509553392626, -15.255048603142761],
    [-75.21367113252838, -15.251782433806499],
    [-75.21289620654733, -15.249339890053095],
    [-75.21160988480861, -15.247097356443208],
    [-75.21084100968363, -15.24451755871101],
    [-75.21075163305792, -15.239487780632034],
    [-75.21089940262846, -15.236766714816158],
    [-75.21178751555765, -15.23374235493589],
    [-75.21288530415576, -15.23035245244995],
    [-75.21458410716289, -15.226044145446625],
    [-75.2187328886332, -15.219580831056456],
    [-75.22073644672165, -15.215209887867639],
    [-75.22116883040563, -15.214395516221904],
    [-75.22397954918851, -15.209787691908984],
    [-75.2285354946775, -15.205027445901328],
    [-75.23133081945454, -15.202442886287352],
    [-75.23290766227349, -15.200712198470317],
    [-75.23720147911149, -15.197591154619769],
    [-75.23868572623736, -15.19630063257484],
    [-75.23809166178027, -15.197302444810726],
    [-75.23743529063636, -15.197873163313695],
    [-75.23316128628309, -15.200979544883582],
    [-75.23160443779327, -15.202689239101002],
    [-75.22880055622437, -15.205281766698862],
    [-75.22427958060216, -15.21000545809447],
    [-75.22149489123353, -15.21457058762208],
    [-75.22107235852737, -15.215366326057493],
    [-75.21906267471294, -15.219750839335434],
    [-75.21491910602698, -15.226205837079943],
    [-75.2132372125895, -15.230471457715636],
    [-75.21214425589855, -15.233846168669142],
    [-75.21126914031889, -15.236826579230785],
    [-75.2111243018988, -15.239494120779582],
    [-75.21121250946813, -15.24446332620217],
    [-75.21195597367837, -15.246957349252014],
    [-75.21324071226694, -15.249197079724382],
    [-75.21402152752518, -15.251658421553955],
    [-75.21543473219316, -15.254898923497807],
    [-75.2177012256591, -15.25941813383208],
    [-75.216150719998, -15.267228355886258],
    [-75.21577720045273, -15.267075293319131]
]

# --- 2. Helper Functions ---

def haversine_distance(coord1, coord2):
    R = 6371000  # Earth radius in meters
    lat1, lon1 = math.radians(coord1[1]), math.radians(coord1[0])
    lat2, lon2 = math.radians(coord2[1]), math.radians(coord2[0])
    
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    
    a = math.sin(dlat / 2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    
    return R * c

def get_elevations(locations):
    """
    Fetch elevations from Open-Meteo API.
    locations: list of [lon, lat]
    """
    base_url = "https://api.open-meteo.com/v1/elevation"
    lats = [loc[1] for loc in locations]
    lons = [loc[0] for loc in locations]
    
    # Split into chunks if needed (Open-Meteo handles many points well, but let's be safe)
    chunk_size = 100
    elevations = []
    
    for i in range(0, len(locations), chunk_size):
        chunk_lats = lats[i:i+chunk_size]
        chunk_lons = lons[i:i+chunk_size]
        
        params = {
            "latitude": ",".join(map(str, chunk_lats)),
            "longitude": ",".join(map(str, chunk_lons))
        }
        
        try:
            response = requests.get(base_url, params=params)
            response.raise_for_status()
            data = response.json()
            elevations.extend(data["elevation"])
        except Exception as e:
            print(f"Error fetching elevations: {e}")
            # Fallback: 0
            elevations.extend([0] * len(chunk_lats))
            
    return elevations

# --- 3. Extract ONE side of the strip (The EAST side) ---
# Strategy:
# 1. Identify "long" segments vs "short" end connectors.
# 2. Iterate through segments. If length is large (e.g. > 100m) it's a side.
# 3. Classify side as East or West relative to centroid.

def extract_east_line(coords):
    # Remove closing point if duplicate
    points = coords[:-1] if coords[0] == coords[-1] else coords
    
    center_lon = sum(p[0] for p in points) / len(points)
    
    east_segments = []
    
    # Analyze segments
    for i in range(len(points)):
        p1 = points[i]
        p2 = points[(i + 1) % len(points)]
        
        dist = haversine_distance(p1, p2)
        mid_lon = (p1[0] + p2[0]) / 2
        
        # If segment is significant length (filter out corner turns if any)
        # Assuming the strip is long and thin.
        # Simple heuristic: If midpoint longitude is > center_longitude, it's East side.
        if mid_lon > center_lon:
            east_segments.append((p1, p2))
            
    # Now we have a bunch of disconnected segments (potentially).
    # We need to order them to form a continuous line.
    # The servidumbre coordinates seem to be ordered sequentially around the perimeter.
    # So the "East" segments should be contiguous indices.
    
    # In the provided COORDINATES list:
    # Indices 0-20 go roughly North (-15.26 to -15.19). West Side?
    # Indices 20-42 go roughly South (-15.19 to -15.26). East Side?
    
    # Let's check longitudes.
    # Point 0: -75.215
    # Point 20: -75.238 (More negative -> West)
    # Point 30: -75.214 (Less negative -> East)
    
    # So indices ~21 to ~42 seem to be the East side (returning South).
    # And 0 to 20 are the West side (going North).
    
    # Let's verify start/end of East Line.
    # We want labels to start from South (0.0 km).
    # The East side points seem to be going North -> South in the array (index 21->42).
    # Index 21: -15.19 (North)
    # Index 42: -15.26 (South)
    
    # So if we take that subset, it runs North -> South.
    # Standard railway markers usually start 0 at one end.
    # If we want 0 at South, we should reverse this segment.
    
    # Logic: Filter points where lon > center_lon
    east_points_raw = [p for p in points if p[0] > center_lon]
    
    # But filtering points scatters them. We need the sequence.
    # Let's find the "turning point" (most northern point).
    # Most northern point (max lat):
    north_idx = max(range(len(points)), key=lambda i: points[i][1])
    # Most southern point (min lat):
    south_idx = min(range(len(points)), key=lambda i: points[i][1])
    
    print(f"North Tip Index: {north_idx} ({points[north_idx]})")
    print(f"South Tip Index: {south_idx} ({points[south_idx]})")
    
    # Split into two paths between South and North.
    # Path A: South -> ... -> North
    # Path B: North -> ... -> South
    
    # Case 1: Loop south -> north -> south
    # If array is ordered, indices south_idx to north_idx is one side.
    # Indices north_idx to south_idx (wrapping) is the other side.
    
    if south_idx < north_idx:
        side1 = points[south_idx : north_idx + 1]
        side2 = points[north_idx:] + points[:south_idx+1]
    else:
        side1 = points[south_idx:] + points[:north_idx+1]
        side2 = points[north_idx : south_idx + 1]
        
    # Determine which is East.
    avg_lon_1 = sum(p[0] for p in side1)/len(side1)
    avg_lon_2 = sum(p[0] for p in side2)/len(side2)
    
    if avg_lon_1 > avg_lon_2:
        print("Side 1 is East")
        east_line = side1
    else:
        print("Side 2 is East")
        east_line = side2
        
    # Ensure East Line starts at South (lowest Lat) for 0.0 km
    if east_line[0][1] > east_line[-1][1]:
        # Starts North, ends South. Reverse it.
        print("Reversing East line to start from South")
        east_line = east_line[::-1]
        
    return east_line

# --- 4. Main Processing ---

east_line = extract_east_line(COORDINATES)
print(f"East Line extracted: {len(east_line)} points")

# Interpolate every 500m
interval = 500 # meters
label_features = []
accumulated_dist = 0
current_interval_target = 0 # Start with 0.0 km

# Add 0.0 point
labels_data = [] # (lon, lat, label_text)

# We define points along the line
points_to_elev = []

# First point is 0.0
points_to_elev.append(east_line[0])
labels_data.append([east_line[0][0], east_line[0][1], "0.0 km"])
current_interval_target += interval

for i in range(len(east_line) - 1):
    p1 = east_line[i]
    p2 = east_line[i+1]
    
    dist = haversine_distance(p1, p2)
    
    if dist == 0: continue
    
    # Interpolate
    while accumulated_dist + dist >= current_interval_target:
        remaining = current_interval_target - accumulated_dist
        ratio = remaining / dist
        
        new_lon = p1[0] + (p2[0] - p1[0]) * ratio
        new_lat = p1[1] + (p2[1] - p1[1]) * ratio
        
        points_to_elev.append([new_lon, new_lat])
        labels_data.append([new_lon, new_lat, f"{current_interval_target/1000:.1f} km"])
        
        current_interval_target += interval
        
    accumulated_dist += dist

# Fetch elevations
print(f"Fetching elevations for {len(labels_data)} labels...")
elevations = get_elevations([p[:2] for p in labels_data])

# Build GeoJSON Features
feature_collection = {
    "type": "FeatureCollection",
    "features": []
}

for i, data in enumerate(labels_data):
    lon, lat, text = data
    elev = elevations[i]
    
    feature = {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [lon, lat]
        },
        "properties": {
            "label": text,
            "elevation": elev
        }
    }
    feature_collection["features"].append(feature)

# Output JS file
output_path = r"c:\Users\rguti\Petral.MARK\Dashboard_Puertos\layer_servidumbre_labels.js"
js_content = f"const SERVIDUMBRE_LABELS_GEOJSON = {json.dumps(feature_collection, indent=4)};"

with open(output_path, "w", encoding='utf-8') as f:
    f.write(js_content)
    
print(f"Done. File saved to {output_path}")
