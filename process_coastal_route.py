
import json
import requests
import math
import xml.etree.ElementTree as ET

# Parse KML
tree = ET.parse(r'C:\Users\rguti\Petral.MARK\Archivos.CAD\RUTA.COSTERA.MARK.kml')
root = tree.getroot()

# KML namespace
ns = {'kml': 'http://www.opengis.net/kml/2.2'}

# Find LineString coordinates
linestring = root.find('.//kml:LineString/kml:coordinates', ns)

if linestring is None:
    print("❌ No se encontró LineString en el KML")
    exit(1)

# Extract coordinates
coords_text = linestring.text.strip()
points = coords_text.split()

route_coords = []
for point in points:
    parts = point.split(',')
    if len(parts) >= 2:
        lon = float(parts[0])
        lat = float(parts[1])
        route_coords.append([lon, lat])

print(f"✅ Extraídas {len(route_coords)} coordenadas de la ruta costera")

# Convert to lat/lon for elevation API
route_latlon = [[coord[1], coord[0]] for coord in route_coords]

# Get elevation data
def get_elevations(coords, batch_size=100):
    elevations = []
    for i in range(0, len(coords), batch_size):
        batch = coords[i:i+batch_size]
        lats = [c[0] for c in batch]
        lons = [c[1] for c in batch]
        
        url = "https://api.open-meteo.com/v1/elevation"
        params = {
            "latitude": lats,
            "longitude": lons
        }
        
        try:
            response = requests.get(url, params=params)
            data = response.json()
            elevations.extend(data.get('elevation', []))
            print(f"  Elevaciones {i} a {i+len(batch)}")
        except Exception as e:
            print(f"  Error: {e}")
            elevations.extend([0] * len(batch))
    
    return elevations

print("🔄 Obteniendo datos de elevación...")
elevations = get_elevations(route_latlon)

# Calculate distances and slopes
def haversine(lat1, lon1, lat2, lon2):
    R = 6371000  # Earth radius in meters
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lon2 - lon1)
    
    a = math.sin(dphi/2)**2 + math.cos(phi1) * math.cos(phi2) * math.sin(dlambda/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    
    return R * c

cumulative_distance = 0
points_data = []
last_km_marker = -1

for i in range(len(route_coords)):
    lat, lon = route_latlon[i]
    alt = elevations[i]
    
    if i > 0:
        prev_lat, prev_lon = route_latlon[i-1]
        prev_alt = elevations[i-1]
        
        dist = haversine(prev_lat, prev_lon, lat, lon)
        cumulative_distance += dist
        
        # Calculate slope
        if dist > 0:
            slope = ((alt - prev_alt) / dist) * 100
        else:
            slope = 0
    else:
        slope = 0
    
    km = cumulative_distance / 1000
    
    # Only add points every 1000 meters (1 km)
    current_km = int(km)
    if current_km > last_km_marker or i == 0:
        points_data.append({
            "coords": [lat, lon],
            "alt": round(alt, 1),
            "slope": round(slope, 2),
            "km": round(km, 2)
        })
        last_km_marker = current_km

print(f"✅ Generados {len(points_data)} puntos de marcadores (cada ~1 km)")

# Create GeoJSON
route_feature = {
    "type": "Feature",
    "properties": {
        "name": "Ruta Costera MARK",
        "style": "coastal_route"
    },
    "geometry": {
        "type": "LineString",
        "coordinates": route_coords
    }
}

geojson = {
    "type": "FeatureCollection",
    "features": [route_feature]
}

# Write to JS file
js_content = f"const COASTAL_ROUTE_GEOJSON = {json.dumps(geojson, indent=4)};\n\n"
js_content += f"const COASTAL_ROUTE_POINTS = {json.dumps(points_data, indent=4)};"

with open(r'C:\Users\rguti\Petral.MARK\Dashboard_Puertos\coastal_route.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\n✅ Generado coastal_route.js")
print(f"📏 Distancia total: {cumulative_distance/1000:.2f} km")
print(f"📍 Puntos con etiquetas: {len(points_data)}")
print(f"⛰️  Rango elevación: {min(elevations):.1f}m - {max(elevations):.1f}m")
