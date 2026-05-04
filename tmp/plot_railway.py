import json
import re
import math
import matplotlib.pyplot as plt
from matplotlib.backends.backend_pdf import PdfPages

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
        # Try without const if it fails
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
file_ext = r'c:\Users\rguti\Petral.MARK\Dashboard_Puertos\layer_ferrocarril_ext.js'

print("Loading data...")
gj_main = get_geojson_from_js(file_main, "RAILWAY_MARCONA_ANDAHUAYLAS")
gj_ext = get_geojson_from_js(file_ext, "FERROCARRIL_EXT_GEOJSON")

len_main, coords_main = calculate_length(gj_main)
len_ext, coords_ext = calculate_length(gj_ext)

total_len = len_main + len_ext

print(f"Main Railway Length: {len_main:.2f} km")
print(f"Extension Railway Length: {len_ext:.2f} km")
print(f"Total Railway Length: {total_len:.2f} km")

# Plotting
plt.figure(figsize=(10, 8))
plt.title(f"Trazado del Ferrocarril Marcona - Andahuaylas\nLongitud Total: {total_len:.2f} km")
plt.xlabel("Longitud")
plt.ylabel("Latitud")

# Plot main railway
for line in coords_main:
    lons = [c[0] for c in line]
    lats = [c[1] for c in line]
    plt.plot(lons, lats, color='blue', linewidth=1.5, label='Ferrocarril Principal' if line == coords_main[0] else "")

# Plot extension
for line in coords_ext:
    lons = [c[0] for c in line]
    lats = [c[1] for c in line]
    plt.plot(lons, lats, color='red', linewidth=2, label='Extensión Ferrocarril' if line == coords_ext[0] else "")

plt.legend()
plt.grid(True, linestyle='--', alpha=0.6)
plt.axis('equal')

# Save to PDF
pdf_path = r'c:\Users\rguti\Petral.MARK\Reporte_Ferrocarril.pdf'
plt.savefig(pdf_path)
print(f"PDF generated: {pdf_path}")

# Also update the log
with open(r'c:\Users\rguti\Petral.MARK\interaction_log.txt', 'a', encoding='utf-8') as f:
    f.write(f"\n[2026-03-17 20:55] Cálculo de longitud y generación de PDF para el Ferrocarril. Longitud Total: {total_len:.2f} km.\n")
