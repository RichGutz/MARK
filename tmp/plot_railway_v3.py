import json
import re
import math
import matplotlib
matplotlib.use('Agg') # Headless backend
import matplotlib.pyplot as plt

def haversine(lon1, lat1, lon2, lat2):
    R = 6371.0  # Earth radius in KM
    dlon = math.radians(lon2 - lon1)
    dlat = math.radians(lat2 - lat1)
    a = math.sin(dlat / 2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c

def get_geojson_from_js(filepath, var_name):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(f'const {var_name} = ({{.*}});', content, re.DOTALL)
    if not match:
        match = re.search(f'{var_name} = ({{.*}});', content, re.DOTALL)
    if match:
        return json.loads(match.group(1))
    return None

def calculate_length(geojson):
    total_km = 0
    coords_list = []
    
    for feature in geojson['features']:
        geom = feature['geometry']
        if geom['type'] == 'LineString':
            coords = geom['coordinates']
            coords_list.append(coords)
            for i in range(len(coords) - 1):
                total_km += haversine(coords[i][0], coords[i][1], coords[i+1][0], coords[i+1][1])
        elif geom['type'] == 'MultiLineString':
            for line in geom['coordinates']:
                coords_list.append(line)
                for i in range(len(line) - 1):
                    total_km += haversine(line[i][0], line[i][1], line[i+1][0], line[i+1][1])
                    
    return total_km, coords_list

# Files
file_main = r'c:\Users\rguti\Petral.MARK\Dashboard_Puertos\railway_marcona_andahuaylas.js'

print("Loading main railway data...")
gj_main = get_geojson_from_js(file_main, "RAILWAY_MARCONA_ANDAHUAYLAS")

len_main, coords_main = calculate_length(gj_main)

# Calculate straight line distance (start of first feature to end of last feature)
# Assumes the features are ordered or at least the start/end points represent the whole line
first_point = coords_main[0][0]
last_point = coords_main[-1][-1]
straight_dist = haversine(first_point[0], first_point[1], last_point[0], last_point[1])

print(f"Main Railway Travel Length: {len_main:.2f} km")
print(f"Straight Line Distance: {straight_dist:.2f} km")

# Plotting
plt.figure(figsize=(10, 8))
plt.title(f"Trazado del Ferrocarril Marcona - Andahuaylas\nLongitud de Ruta: {len_main:.2f} km | Desplazamiento Directo: {straight_dist:.2f} km")
plt.xlabel("Longitud")
plt.ylabel("Latitud")

# Plot main railway
for line in coords_main:
    lons = [c[0] for c in line]
    lats = [c[1] for c in line]
    plt.plot(lons, lats, color='#007BFF', linewidth=1.5, label='Ferrocarril Principal' if line == coords_main[0] else "")

# Plot straight line as a dashed indicator
plt.plot([first_point[0], last_point[0]], [first_point[1], last_point[1]], color='gray', linestyle='--', alpha=0.5, label='Distancia Recta')

plt.legend()
plt.grid(True, linestyle='--', alpha=0.6)
plt.axis('equal')

# Save to PDF
pdf_path = r'c:\Users\rguti\Petral.MARK\Reporte_Ferrocarril_Refinado.pdf'
plt.savefig(pdf_path)
print(f"PDF generated: {pdf_path}")

# Update interaction log
with open(r'c:\Users\rguti\Petral.MARK\interaction_log.txt', 'a', encoding='utf-8') as f:
    f.write(f"\n[2026-03-17 21:05] Refinamiento del reporte del Ferrocarril: Eliminación de extensión y cálculo de distancia recta ({straight_dist:.2f} km).\n")
