"""
plot_amortiguamiento_comparativo.py
====================================
Plotea en un mismo gráfico UTM Zona 18S:
  1. Zona de Amortiguamiento RNSFN según layer_amortiguamiento.js
     (coordenadas WGS84 geográficas lon/lat → convertidas a UTM 18S)
  2. Los 40 vértices oficiales del Cuadro de Coordenadas WGS84
     proporcionados directamente en UTM 18S.

Salida: Plot_Amortiguamiento_Comparativo.pdf
"""

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import os

# ─── Verificar pyproj ────────────────────────────────────────────────────────
try:
    from pyproj import Transformer
except ImportError:
    print("ERROR: pyproj no está instalado.")
    print("Ejecuta: pip install pyproj")
    exit(1)

OUTPUT_DIR = r'C:\Users\rguti\Petral.MARK\Servidumbre'
OUTPUT_FILE = 'Plot_Amortiguamiento_Comparativo.pdf'

# ─── 1. CAPA DEL DASHBOARD (layer_amortiguamiento.js) ─────────────────────────
# Coordenadas en WGS84 geográficas [lon, lat]
layer_lonlat = [
    (-75.55967558496177, -14.809796471859974),
    (-75.52248152828395, -14.800842768281804),
    (-75.51826424586898, -14.789795064412713),
    (-75.50843345945798, -14.79400296203439),
    (-75.49463162436605, -14.813426111587232),
    (-75.47604542724774, -14.813682259132067),
    (-75.4760768346036,  -14.828057538043765),
    (-75.45996581596869, -14.856714418705112),
    (-75.41314905502378, -14.883022647158542),
    (-75.38474336478183, -14.880178887584275),
    (-75.36354279628118, -14.810514918612926),
    (-75.35011430469348, -14.810797912383318),
    (-75.33551332992289, -14.767792287776649),
    (-75.31842487702643, -14.709409601886767),
    (-75.31348123733147, -14.708132469307762),
    (-75.30360711217614, -14.708254105985874),
    (-75.25283606299897, -14.72717533716204),
    (-75.24914111056978, -14.729322145908737),
    (-75.2096663020833,  -14.80533579276563),
    (-75.20923399429817, -14.810001510606234),
    (-75.2076202377896,  -14.813474839287347),
    (-75.15961379277611, -14.87022028213281),
    (-75.16062980580165, -14.873926505841688),
    (-75.07968599885088, -14.94571153908744),
    (-75.0384109371893,  -14.971987063922722),
    (-75.03839402253406, -14.981453250601241),
    (-75.02854523770041, -14.987819729166418),
    (-75.02863301995761, -15.018415224151674),
    (-75.13237414888732, -15.108790084901505),
    (-75.15577035804243, -15.146991908075803),
    (-75.17313811146194, -15.15715950267113),
    (-75.19194388603911, -15.22190520987313),
    (-75.23018137518464, -15.192477009059091),
    (-75.23651187071891, -15.192208258492839),
    (-75.24619146053466, -15.181773600774813),
    (-75.25377726778139, -15.180562729170996),
    (-75.37810999171674, -15.29311896506116),
    (-75.41033664843584, -15.268751477670593),
    (-75.46703279300905, -15.242340919547752),
    (-75.5511218747265,  -15.081541533486547),
    (-75.61063749682363, -15.043119568212315),
    (-75.62474196635843, -15.001882550910198),
    # punto de cierre (igual al primero)
    (-75.55967558496177, -14.809796471859974),
]

# Convertir WGS84 geográfico → UTM 18S (EPSG:32718)
transformer = Transformer.from_crs("EPSG:4326", "EPSG:32718", always_xy=True)
layer_utm = [transformer.transform(lon, lat) for lon, lat in layer_lonlat]
layer_x = [p[0] for p in layer_utm]
layer_y = [p[1] for p in layer_utm]

# ─── 2. LOS 40 VÉRTICES OFICIALES (UTM WGS84 Zona 18S) ───────────────────────
vertice_data = [
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

v_nums = [d[0] for d in vertice_data]
v_x    = [d[1] for d in vertice_data]
v_y    = [d[2] for d in vertice_data]

# Cerrar el polígono
v_x_closed = v_x + [v_x[0]]
v_y_closed = v_y + [v_y[0]]

# ─── 3. PLOTEAR ───────────────────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(14, 16))

# --- Capa del dashboard ---
ax.plot(layer_x, layer_y,
        color='darkorange', linewidth=1.5, linestyle='--',
        label='Amortiguamiento - Dashboard (layer_amortiguamiento.js)')
ax.fill(layer_x, layer_y, color='darkorange', alpha=0.15)

# --- 40 vértices oficiales ---
ax.plot(v_x_closed, v_y_closed,
        color='royalblue', linewidth=2.0, linestyle='-',
        label='Amortiguamiento RNSFN - Oficial (40 Vértices WGS84 UTM)')
ax.fill(v_x_closed, v_y_closed, color='royalblue', alpha=0.15)

# Etiquetas de los 40 vértices
for i, (n, x, y) in enumerate(zip(v_nums, v_x, v_y)):
    ax.annotate(f'V{n}', xy=(x, y),
                xytext=(3, 4), textcoords='offset points',
                fontsize=6.5, color='navy', fontweight='bold')
ax.scatter(v_x, v_y, color='royalblue', s=18, zorder=5)

# ─── 4. FORMATO ───────────────────────────────────────────────────────────────
ax.set_title('Zona de Amortiguamiento - Reserva Nacional San Fernando (RNSFN)\nComparativo: Layer Dashboard vs. Cuadro Oficial 40 Vértices',
             fontsize=13, fontweight='bold', pad=14)
ax.set_xlabel('Este (m) — UTM Zona 18S / WGS84', fontsize=10)
ax.set_ylabel('Norte (m) — UTM Zona 18S / WGS84', fontsize=10)
ax.grid(True, linestyle='--', alpha=0.4)
ax.axis('equal')

# Formatear los ticks con coma de miles
import matplotlib.ticker as mticker
ax.xaxis.set_major_formatter(mticker.FuncFormatter(lambda x, _: f'{x:,.0f}'))
ax.yaxis.set_major_formatter(mticker.FuncFormatter(lambda y, _: f'{y:,.0f}'))
plt.xticks(rotation=30, ha='right', fontsize=8)
plt.yticks(fontsize=8)

# Leyenda
patch_dash  = mpatches.Patch(color='darkorange', alpha=0.5,
                              label='Layer Dashboard (lon/lat convertido)')
patch_ofic  = mpatches.Patch(color='royalblue',  alpha=0.5,
                              label='40 Vértices Oficiales RNSFN (UTM)')
ax.legend(handles=[patch_dash, patch_ofic], loc='upper left', fontsize=9)

plt.tight_layout()

# ─── 5. GUARDAR PDF ───────────────────────────────────────────────────────────
out_path = os.path.join(OUTPUT_DIR, OUTPUT_FILE)
plt.savefig(out_path, format='pdf', dpi=150)
plt.close()
print(f"PDF generado: {out_path}")
