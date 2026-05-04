"""
update_layer_amortiguamiento.py
================================
Convierte los 40 vértices oficiales UTM WGS84 Zona 18S → lon/lat
y sobreescribe layer_amortiguamiento.js con el nuevo GeoJSON.
"""

from pyproj import Transformer
import json, os

OUTPUT = r'C:\Users\rguti\Petral.MARK\Dashboard_Puertos\layer_amortiguamiento.js'

# 40 vértices oficiales RNSFN (UTM WGS84 Zona 18S)
vertices_utm = [
    (1,  439777, 8362636),
    (2,  443777, 8363636),
    (3,  444108, 8364920),
    (4,  444994, 8364818),
    (5,  446777, 8362251),
    (6,  448777, 8362227),
    (7,  448777, 8360637),
    (8,  450517, 8357471),
    (9,  455559, 8354571),
    (10, 458614, 8354891),
    (11, 460938, 8362595),
    (12, 462307, 8362571),
    (13, 463996, 8367358),
    (14, 465720, 8373531),
    (15, 465573, 8373923),
    (16, 465767, 8374045),
    (17, 466152, 8373757),
    (18, 472944, 8371695),
    (19, 481296, 8357477),
    (20, 482830, 8356022),
    (21, 482721, 8355612),
    (22, 491431, 8347677),
    (23, 495870, 8344772),
    (24, 495751, 8343814),
    (25, 496931, 8343126),
    (26, 496776, 8339637),
    (27, 485776, 8329637),
    (28, 483265, 8325410),
    (29, 481400, 8324284),
    (30, 479429, 8317155),
    (31, 475335, 8320369),
    (32, 474596, 8320401),
    (33, 473555, 8321554),
    (34, 472740, 8321687),
    (35, 459406, 8309218),
    (36, 455941, 8311907),
    (37, 449847, 8314816),
    (38, 440772, 8332581),
    (39, 434364, 8336814),
    (40, 432835, 8341371),
]

# Conversión UTM 18S → WGS84 lon/lat
transformer = Transformer.from_crs("EPSG:32718", "EPSG:4326", always_xy=True)
coords_lonlat = []
for num, este, norte in vertices_utm:
    lon, lat = transformer.transform(este, norte)
    coords_lonlat.append([round(lon, 10), round(lat, 10)])

# Cerrar el polígono (repetir el primer punto)
coords_lonlat.append(coords_lonlat[0])

# Construir el GeoJSON como string JS
geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Zona de Amortiguamiento Reserva San Fernando",
                "style": "amortiguamiento"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [coords_lonlat]
            }
        }
    ]
}

js_content = "const AMORTIGUAMIENTO_GEOJSON = " + json.dumps(geojson, indent=4) + ";\n"

with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Archivo actualizado: {OUTPUT}")
print(f"Total coordenadas (incluye cierre): {len(coords_lonlat)}")
print("Primer vértice (V1):", coords_lonlat[0])
print("Último vértice (V40):", coords_lonlat[-2])
