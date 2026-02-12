import json
import math
import requests
import time

def haversine_distance(coord1, coord2):
    R = 6371000  # Radius of Earth in meters
    lat1, lon1 = math.radians(coord1[1]), math.radians(coord1[0])
    lat2, lon2 = math.radians(coord2[1]), math.radians(coord2[0])
    
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    
    a = math.sin(dlat / 2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    
    return R * c

def get_elevation_batch(coords):
    if not coords:
        return []
    # Open-Meteo accepts lats and longs as comma-separated lists
    lats = [c[1] for c in coords]
    longs = [c[0] for c in coords]
    
    url = "https://api.open-meteo.com/v1/elevation"
    params = {
        "latitude": ",".join(map(str, lats)),
        "longitude": ",".join(map(str, longs))
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        return data.get("elevation", [0] * len(coords))
    except Exception as e:
        print(f"Error fetching elevation: {e}")
        return [0] * len(coords)

def process_and_label(geojson_data, interval=500):
    features = geojson_data['features']
    all_points = []

    # 1. Flatten all coordinates into a single sequence
    for feature in features:
        geometry = feature['geometry']
        coordinates = geometry['coordinates']
        
        if geometry['type'] == 'MultiLineString':
            for segment in coordinates:
                all_points.extend(segment)
        elif geometry['type'] == 'LineString':
            all_points.extend(coordinates)

    if not all_points:
        return {"type": "FeatureCollection", "features": []}

    # 2. Reorient so KM 0 is at the South-most point
    # Find index of minimum latitude (most negative)
    min_lat = 90
    min_lat_idx = -1
    for i, p in enumerate(all_points):
        if p[1] < min_lat:
            min_lat = p[1]
            min_lat_idx = i
            
    # Heuristic: If the south-most point is in the second half of the list, 
    # the list probably goes North->South. We want South->North (Starts at South).
    # So we reverse. If it's in the first half, we assume it's already South->North 
    # or the start is close enough to the South end.
    if min_lat_idx > len(all_points) // 2:
        print("Reversing path to start from South...")
        all_points.reverse()
    else:
        print("Path seems to start near South. Keeping order.")

    # 3. Interpolate
    label_features = []
    
    current_interval = interval
    accumulated_dist = 0
    
    points_to_query = []
    point_metadata = [] # (label_text, distance)

    # Label for start point (0.0 km)
    if len(all_points) > 0:
        points_to_query.append(all_points[0])
        point_metadata.append(("0.0 km", 0))

    for i in range(len(all_points) - 1):
        p1 = all_points[i]
        p2 = all_points[i+1]
        
        try:
            dist = haversine_distance(p1, p2)
        except:
            continue
        
        # Artifact detection removed to allow interpolation on long straight segments
        # if dist > 2000:
        #    print(f"Skipping artifact gap of {dist:.0f}m at index {i}")
        #    continue

        if dist == 0:
            continue

        # Check for intervals within this segment
        while accumulated_dist + dist >= current_interval:
            remaining = current_interval - accumulated_dist
            ratio = remaining / dist
            
            new_lon = p1[0] + (p2[0] - p1[0]) * ratio
            new_lat = p1[1] + (p2[1] - p1[1]) * ratio
            
            label_text = f"{current_interval/1000:.1f} km"
            points_to_query.append([new_lon, new_lat])
            point_metadata.append((label_text, current_interval))
            
            current_interval += interval
        
        accumulated_dist += dist

    # 4. Fetch Elevations
    elevations = []
    chunk_size = 50 
    print(f"Fetching elevations for {len(points_to_query)} points...")
    for i in range(0, len(points_to_query), chunk_size):
        chunk = points_to_query[i:i+chunk_size]
        elevs = get_elevation_batch(chunk)
        elevations.extend(elevs)
        time.sleep(0.2)

    # 5. Build GeoJSON
    for i, coord in enumerate(points_to_query):
        elev = elevations[i] if i < len(elevations) else 0
        label = point_metadata[i][0]
        
        feat = {
            "type": "Feature",
            "properties": {
                "label": label,
                "elevation": elev,
                "type": "distance_marker"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [coord[0], coord[1], elev]
            }
        }
        label_features.append(feat)

    return {
        "type": "FeatureCollection",
        "features": label_features
    }

def main():
    try:
        with open('ferrocarril_ext_fusionado.geojson', 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print("GeoJSON file not found.")
        return

    labels_geojson = process_and_label(data)
    
    js_content = f"const FERROCARRIL_EXT_LABELS_GEOJSON = {json.dumps(labels_geojson, indent=4)};"
    
    with open('Dashboard_Puertos/layer_ferrocarril_ext_labels.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print("Labels generated successfully.")

if __name__ == "__main__":
    main()
