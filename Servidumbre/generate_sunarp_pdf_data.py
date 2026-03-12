import json
import matplotlib.pyplot as plt
import os

# Carpeta de salida
output_dir = r'C:\Users\rguti\Petral.MARK\Servidumbre'

def plot_polygon(coords, title, filename, color='blue'):
    x = [p['este'] for p in coords]
    y = [p['norte'] for p in coords]
    
    # Cerrar el poligono para el plot
    x.append(x[0])
    y.append(y[0])
    
    plt.figure(figsize=(8, 6))
    plt.plot(x, y, marker='o', color=color, linestyle='-', linewidth=2)
    plt.fill(x, y, color=color, alpha=0.3)
    plt.title(title)
    plt.xlabel('Este (X)')
    plt.ylabel('Norte (Y)')
    plt.grid(True)
    plt.axis('equal')
    
    # Añadir etiquetas a los vertices
    for p in coords:
        plt.text(p['este'], p['norte'], f" V{p['vertice']}", fontsize=9, verticalalignment='bottom')
        
    path = os.path.join(output_dir, filename)
    plt.savefig(path)
    plt.close()
    print(f"Grafico generado: {path}")

# --- DATA ---

# Tramo 1
with open(os.path.join(output_dir, "SUNARP 1.json"), 'r') as f:
    sunarp1 = json.load(f)

# Tramo 2 (Manipulado - el que está en el JSON actual)
with open(os.path.join(output_dir, "SUNARP 2.json"), 'r') as f:
    sunarp2_manipulated = json.load(f)

# Tramo 2 (Oficial según usuario)
# Nota: El usuario dice que el punto 10 original es 476890.5134 8313655.6247
sunarp2_official = [dict(p) for p in sunarp2_manipulated]
for p in sunarp2_official:
    if p['vertice'] == "10":
        p['este'] = 476890.5134
        p['norte'] = 8313655.6247

# Tramo 3
with open(os.path.join(output_dir, "SUNARP 3.json"), 'r') as f:
    sunarp3 = json.load(f)

# --- GENERAR PLOTS ---
plot_polygon(sunarp1, "Tramo 1 (Norte)", "plot_sunarp_1.png", color='red')
plot_polygon(sunarp2_official, "Tramo 2 (Oficial - Sin Cierre)", "plot_sunarp_2_official.png", color='green')
plot_polygon(sunarp2_manipulated, "Tramo 2 (Manipulado - Cierre Poligono)", "plot_sunarp_2_manipulated.png", color='blue')
plot_polygon(sunarp3, "Tramo 3 (Oeste)", "plot_sunarp_3.png", color='purple')

# --- GENERAR MARKDOWN ---
md_content = f"""# REPORTE DE COORDENADAS - SERVIDUMBRE SUNARP
**Fecha de Generación:** {os.popen('date /t').read().strip()} {os.popen('time /t').read().strip()}

---

## TRAMO 1: Norte
![Tramo 1](plot_sunarp_1.png)

| Vértice | Este (X) | Norte (Y) |
| :--- | :--- | :--- |
"""
for p in sunarp1:
    md_content += f"| {p['vertice']} | {p['este']:.4f} | {p['norte']:.4f} |\n"

md_content += """
---

## TRAMO 2: Este (Comparativa Vértice 10)
En este tramo se presenta una discrepancia entre el documento físico y la necesidad técnica de cierre del polígono.

### Ploteo Comparativo
| Oficial (Dato Sunarp) | Manipulado (Cierre de Polígono) |
| :--- | :--- |
| ![Oficial](plot_sunarp_2_official.png) | ![Manipulado](plot_sunarp_2_manipulated.png) |

### Tabla de Coordenadas Tramo 2
| Vértice | Este (X) | Norte (Y) | Nota |
| :--- | :--- | :--- | :--- |
"""
for i in range(len(sunarp2_official)):
    p_off = sunarp2_official[i]
    p_man = sunarp2_manipulated[i]
    if p_off['vertice'] == "10":
        md_content += f"| **10 (OFICIAL)** | **{p_off['este']:.4f}** | **{p_off['norte']:.4f}** | Dato Original Sunarp |\n"
        md_content += f"| **10 (CIERRE)** | **{p_man['este']:.4f}** | **{p_man['norte']:.4f}** | **Ajustado para cerrar polígono** |\n"
    else:
        md_content += f"| {p_off['vertice']} | {p_off['este']:.4f} | {p_off['norte']:.4f} | | \n"

md_content += """
---

## TRAMO 3: Oeste
![Tramo 3](plot_sunarp_3.png)

| Vértice | Este (X) | Norte (Y) |
| :--- | :--- | :--- |
"""
for p in sunarp3:
    md_content += f"| {p['vertice']} | {p['este']:.4f} | {p['norte']:.4f} |\n"

md_content += """
---
**NOTA AL PIE:**
La diferencia detectada corresponde al Punto 10 del Tramo 2. En la partida SUNARP (documento físico) figura como: **476890.5134 E, 8313655.6247 N**. Sin embargo, dicho valor no permite el cierre geométrico del polígono. Se ha procedido a ajustar la coordenada a **476879.5269 E, 8312703.9815 N** para garantizar la integridad topográfica del área de servidumbre ploteada.
"""

md_path = os.path.join(output_dir, "COORDENADAS.SERVIDUMBRE.SUNARP.md")
with open(md_path, "w", encoding="utf-8") as f:
    f.write(md_content)
print(f"Documento Markdown generado: {md_path}")
