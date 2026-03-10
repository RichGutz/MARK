"""
Genera un PDF con el polígono de la Servidumbre de paso NAVIERA PETRAL S.A.
Coordenadas UTM WGS84 extraídas del documento SUNARP Partida N° 11024636
"""

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyArrowPatch
import numpy as np
from matplotlib.backends.backend_pdf import PdfPages

# ── SECCIÓN 1: Norte ──────────────────────────────────────────────────────────
sec1 = [
    ("1",  477413.4785, 8314572.1239),
    ("2",  477439.3158, 8314572.1239),
    ("4",  477159.2455, 8313934.4771),
]

# ── SECCIÓN 2: Este (vértices 11–20) ─────────────────────────────────────────
sec2 = [
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

# ── SECCIÓN 3: Oeste (vértices A–P) ──────────────────────────────────────────
sec3 = [
    ("A",  476952.6759, 8317376.0421),
    ("B",  476973.4746, 8317388.0249),
    ("C",  477116.1047, 8317130.1662),
    ("D",  477251.7872, 8316828.8405),
    ("E",  477470.7887, 8316211.5704),
    ("F",  477586.6816, 8315538.3175),
    ("G",  477586.6816, 8315136.3303),
    ("H",  477514.6125, 8314760.9770),
    ("J",  477413.4785, 8314572.1239),
    ("K",  477492.3191, 8314769.8655),
    ("L",  477562.6816, 8315136.3303),
    ("M",  477562.6816, 8315538.3175),
    ("N",  477448.1701, 8316203.5456),
    ("O",  477229.1686, 8316820.8156),
    ("P",  477095.1034, 8317118.5497),
]

# ── SECCIÓN 4: Sur ────────────────────────────────────────────────────────────
sec4 = [
    ("1s", 477439.3158, 8314572.1239),
]

# ── SECCIÓN 5: Vértices adicionales (1–10) ────────────────────────────────────
sec5 = [
    ("v1",  477159.2455, 8313934.4771),   # Norte sin confirmar → se usa como referencia
    ("v2",  477184.3984, 8313932.7466),
    ("v3",  477141.2025, 8313824.4200),
    ("v4",  477119.0725, 8313782.9087),
    ("v5",  477081.4800, 8313727.9804),
    ("v6",  477070.8817, 8313710.5131),
    ("v7",  476842.0309, 8313282.0489),
    ("v8",  476823.2019, 8313228.4010),
    ("v9",  476809.4538, 8313154.7398),
    ("v10", 476890.5134, 8313655.6247),
]

all_sections = {
    "Sección 1 – Norte":  (sec1,  "#1a73e8"),
    "Sección 2 – Este":   (sec2,  "#e8711a"),
    "Sección 3 – Oeste":  (sec3,  "#34a853"),
    "Sección 4 – Sur":    (sec4,  "#ea4335"),
    "Sección 5 – Adicional": (sec5, "#9c27b0"),
}

output_path = r"C:\Users\rguti\Petral.MARK\Servidumbre\Servidumbre_SUNARP_Plot.pdf"

with PdfPages(output_path) as pdf:
    # ── Página 1: Vista completa de todos los vértices ──
    fig, ax = plt.subplots(figsize=(14, 11))
    fig.patch.set_facecolor("#f8f9fa")
    ax.set_facecolor("#f0f4ff")

    legend_patches = []
    for sname, (pts, color) in all_sections.items():
        if not pts:
            continue
        xs = [p[1] for p in pts]
        ys = [p[2] for p in pts]
        ax.plot(xs, ys, 'o-', color=color, markersize=6,
                linewidth=1.5, alpha=0.85, zorder=3)
        for label, x, y in pts:
            ax.annotate(label, (x, y), fontsize=7, color=color,
                        xytext=(5, 5), textcoords='offset points',
                        fontweight='bold', zorder=4)
        legend_patches.append(mpatches.Patch(color=color, label=sname))

    ax.set_title("Servidumbre de Paso — NAVIERA PETRAL S.A.\nPartida N° 11024636 · Oficina Registral Nasca",
                 fontsize=13, fontweight='bold', pad=12)
    ax.set_xlabel("Este (m) — UTM WGS84", fontsize=10)
    ax.set_ylabel("Norte (m) — UTM WGS84", fontsize=10)
    ax.legend(handles=legend_patches, loc='lower right', fontsize=9)
    ax.grid(True, linestyle='--', alpha=0.4, color='#aaaacc')
    ax.ticklabel_format(style='plain', axis='both')
    plt.xticks(rotation=30, fontsize=8)
    plt.yticks(fontsize=8)
    plt.tight_layout()
    pdf.savefig(fig, dpi=150)
    plt.close(fig)

    # ── Página 2: Solo el borde exterior (Secciones 2 y 3, que son el contorno) ──
    fig2, ax2 = plt.subplots(figsize=(11, 10))
    fig2.patch.set_facecolor("#f8f9fa")
    ax2.set_facecolor("#e8f5e9")

    # Contorno principal: sec3 + sec2 forman el borde exterior
    contorno = sec3 + list(reversed(sec2))
    cx = [p[1] for p in contorno]
    cy = [p[2] for p in contorno]
    # Cerrar polígono
    cx.append(cx[0])
    cy.append(cy[0])
    ax2.fill(cx, cy, alpha=0.25, color='#34a853')
    ax2.plot(cx, cy, 'o-', color='#1a6b30', markersize=7, linewidth=2, zorder=3)
    for label, x, y in contorno:
        ax2.annotate(label, (x, y), fontsize=8, color='#0a3d20',
                     xytext=(5, 5), textcoords='offset points',
                     fontweight='bold', zorder=4)

    ax2.set_title("Polígono Exterior de la Servidumbre\n(Secciones Este + Oeste)",
                  fontsize=13, fontweight='bold', pad=12)
    ax2.set_xlabel("Este (m) — UTM WGS84", fontsize=10)
    ax2.set_ylabel("Norte (m) — UTM WGS84", fontsize=10)
    ax2.grid(True, linestyle='--', alpha=0.4, color='#aaaacc')
    ax2.ticklabel_format(style='plain', axis='both')
    plt.xticks(rotation=30, fontsize=8)
    plt.yticks(fontsize=8)
    plt.tight_layout()
    pdf.savefig(fig2, dpi=150)
    plt.close(fig2)

print(f"PDF generado en: {output_path}")
