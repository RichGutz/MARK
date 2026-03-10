"""
Plot Sección por Sección — Servidumbre NAVIERA PETRAL S.A.
Genera una página PDF por cada sección del polígono.
"""
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.backends.backend_pdf import PdfPages
import numpy as np

output_path = r"C:\Users\rguti\Petral.MARK\Servidumbre\Servidumbre_Por_Seccion.pdf"

# ── Datos por sección (label, Este, Norte) ────────────────────────────────────

seccion1 = [
    ("1",  477413.4785, 8314572.1239),
    ("2",  477439.3158, 8314572.1239),
    ("3",  477184.3928, 8313932.7466),
    ("4",  477159.2455, 8313934.4771),
]

seccion2 = [
    ("1",  477159.2455, 8313934.4771),
    ("2",  477184.3984, 8313932.7466),
    ("3",  477141.2025, 8313824.4200),
    ("4",  477119.0725, 8313782.9087),
    ("5",  477081.4800, 8313727.9804),
    ("6",  477070.8817, 8313710.5131),
    ("7",  476842.0309, 8313282.0489),
    ("8",  476823.2019, 8313228.4010),
    ("9",  476809.4538, 8313154.7398),
    ("10", 476879.5269, 8312703.9815),
    ("11", 476954.5844, 8312540.1392),
    ("12", 476933.5979, 8312528.4960),
    ("13", 476869.5269, 8312643.9815),
    ("14", 476785.8612, 8313159.1431),
    ("15", 476799.6093, 8313232.8043),
    ("16", 476820.8614, 8313293.3559),
    ("17", 477049.7121, 8313721.8202),
    ("18", 477061.6743, 8313741.5353),
    ("19", 477099.2668, 8313796.4636),
    ("20", 477118.9091, 8313833.3085),
]

seccion3 = [
    ("A",  476952.6759, 8317376.0421),
    ("B",  476973.4746, 8317388.0249),
    ("C",  477116.1047, 8317130.1662),
    ("D",  477251.7872, 8316828.8405),
    ("E",  477470.7887, 8316211.5704),
    ("F",  477586.6816, 8315538.3175),
    ("G",  477586.6816, 8315136.3303),
    ("H",  477514.6125, 8314760.9770),
    ("I",  477439.3158, 8314572.1239),
    ("J",  477413.4785, 8314572.1239),
    ("K",  477492.3191, 8314769.8655),
    ("L",  477562.6816, 8315136.3303),
    ("M",  477562.6816, 8315538.3175),
    ("N",  477448.1701, 8316203.5456),
    ("O",  477229.1686, 8316820.8156),
    ("P",  477095.1034, 8317118.5497),
]

secciones = [
    ("Sección 1 — Por el NORTE (1 tramo)", seccion1,  "#1a73e8"),
    ("Sección 2 — Por el ESTE  (vért. 1–20)", seccion2, "#e8711a"),
    ("Sección 3 — Por el OESTE (vért. A–P)",  seccion3, "#34a853"),
]

def plot_section(ax, pts, color, title):
    xs = [p[1] for p in pts]
    ys = [p[2] for p in pts]

    # Cerrar el polígono repitiendo el primer vértice
    xs_closed = xs + [xs[0]]
    ys_closed = ys + [ys[0]]

    # Línea conectando vértices en orden cerrado
    ax.plot(xs_closed, ys_closed, 'o-', color=color, markersize=9,
            linewidth=2, zorder=3, alpha=0.85)

    # Numerar en orden con flechas de dirección
    for i in range(len(pts) - 1):
        dx = xs[i+1] - xs[i]
        dy = ys[i+1] - ys[i]
        mx = (xs[i] + xs[i+1]) / 2
        my = (ys[i] + ys[i+1]) / 2
        ax.annotate("", xy=(mx + dx*0.01, my + dy*0.01),
                    xytext=(mx - dx*0.01, my - dy*0.01),
                    arrowprops=dict(arrowstyle="->", color=color, lw=1.5))

    # Etiquetas de vértice
    for j, (label, x, y) in enumerate(pts):
        ax.annotate(f"{label}\n({x:.0f}, {y:.0f})",
                    (x, y), fontsize=8, color='#222',
                    xytext=(8, 8), textcoords='offset points',
                    bbox=dict(boxstyle='round,pad=0.2', fc='white', alpha=0.7),
                    zorder=5)

    ax.set_title(title, fontsize=12, fontweight='bold', pad=10)
    ax.set_xlabel("Este (m) — UTM WGS84", fontsize=9)
    ax.set_ylabel("Norte (m) — UTM WGS84", fontsize=9)
    ax.grid(True, linestyle='--', alpha=0.4)
    ax.ticklabel_format(style='plain', axis='both')
    plt.xticks(rotation=20, fontsize=8)
    plt.yticks(fontsize=8)

    # Márgenes
    xpad = (max(xs) - min(xs)) * 0.15 + 20
    ypad = (max(ys) - min(ys)) * 0.15 + 20
    ax.set_xlim(min(xs) - xpad, max(xs) + xpad)
    ax.set_ylim(min(ys) - ypad, max(ys) + ypad)

with PdfPages(output_path) as pdf:
    for title, pts, color in secciones:
        if len(pts) < 1:
            continue
        fig, ax = plt.subplots(figsize=(12, 9))
        fig.patch.set_facecolor("#f8f9fa")
        ax.set_facecolor("#f0f4ff")
        plot_section(ax, pts, color, title)
        plt.tight_layout()
        pdf.savefig(fig, dpi=150)
        plt.close(fig)
        print(f"  Generada: {title}")

print(f"\nPDF listo: {output_path}")
