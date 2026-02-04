import re
import os
import shutil

def create_questionnaire(template_path, output_path, images_dir):
    # Read as UTF-8
    try:
        with open(template_path, 'r', encoding='utf-8', errors='ignore') as f:
            html = f.read()
    except Exception as e:
        print(f"Error reading template: {e}")
        return

    # Prepare Image Insertion
    assets_dir = os.path.join(os.path.dirname(output_path), "assets")
    if not os.path.exists(assets_dir):
        os.makedirs(assets_dir)

    # --- IMAGE 1: Strike Logistics ---
    img_name = "Ubicacion.RUTAS.STRIKE.png"
    source_img = os.path.join(images_dir, img_name)
    
    img_html = ""
    if os.path.exists(source_img):
        shutil.copy(source_img, os.path.join(assets_dir, img_name))
        print(f"Copied {img_name} to assets.")
        # We use a table or div to center content nicely
        img_html = f'''
        <p class=MsoNormal align=center style='text-align:center'>
            <span style='position:relative;z-index:251659264'>
                <img width=450 src="assets/{img_name}" style="width:450px;height:auto;">
            </span>
        </p>
        <p class=MsoCaption align=center style='text-align:center'>Figura 1: Comparativa de Rutas Logísticas - Hierro Apurímac</p>
        '''
    else:
        print(f"Warning: {source_img} not found.")

    # Define the new content
    # Using Mso classes found in the template for consistency
    new_content = f"""
<div class=WordSection1>
    <p class=MsoTitle align=center style='text-align:center'>CUESTIONARIO PARA CLIENTES POTENCIALES</p>
    <p class=MsoSubtitle align=center style='text-align:center'>PROYECTO: HIERRO APURÍMAC (STRIKE RESOURCES)</p>
    
    <p class=MsoNormal>&nbsp;</p>
    
    <p class=MsoHeading1>1. INTRODUCCIÓN Y ANÁLISIS LOGÍSTICO</p>
    <p class=MsoNormal>El presente análisis tiene como objetivo validar las ventajas logísticas de Puerto San Nicolás frente a las alternativas actuales.</p>
    
    <p class=MsoNormal>Actualmente, la evacuación de mineral de Hierro Apurímac se realiza mayoritariamente hacia el puerto de Pisco. Sin embargo, el análisis geoespacial de rutas confirma una desventaja competitiva en la configuración actual.</p>
    
    {img_html}

    <p class=MsoNormal><b>Datos Comparativos:</b></p>
    <ul style='margin-top:0cm' type=disc>
        <li class=MsoNormal><b>San Nicolás: 517.8 km (7.2 hrs)</b> - <span style="color:green;font-weight:bold;">Alternativa Más Eficiente</span></li>
        <li class=MsoNormal>Pisco (Actual): 563.6 km (9.3 hrs) - <i>Desventaja de +45 km</i></li>
        <li class=MsoNormal>Matarani: 774.4 km (11.2 hrs)</li>
    </ul>

    <p class=MsoNormal><b>Pregunta Clave:</b> Considerando que San Nicolás ofrece una reducción directa en distancia y tiempo de ciclo, ¿cuál es el costo de oportunidad actual (USD/ton) de operar vía Pisco?</p>

    <p class=MsoHeading1>2. MATERIAL</p>
    <p class=MsoNormal>2.1. ¿Cuál es la composición química detallada del concentrado de hierro a exportar?</p>
    <p class=MsoNormal>2.2. ¿Cuál es el porcentaje de humedad promedio y máximo?</p>
    <p class=MsoNormal>2.3. ¿Requiere condiciones especiales de almacenamiento (techado, control de polvo)?</p>

    <p class=MsoHeading1>3. VOLÚMENES</p>
    <p class=MsoNormal>3.1. ¿Cuál es la producción anual estimada para los próximos 5 años?</p>
    <p class=MsoNormal>3.2. ¿Cuál es el tamaño de lote de embarque típico (DWT de las naves)?</p>
    <p class=MsoNormal>3.3. ¿Existe estacionalidad en la producción?</p>

    <p class=MsoHeading1>4. LOGÍSTICA</p>
    <p class=MsoNormal>4.1. ¿Cuál es el origen de la carga (Mina/Planta) y la distancia al puerto?</p>
    <p class=MsoNormal>4.2. ¿Qué modalidad de transporte terrestre utiliza actualmente (Camión/Tren/Mineroducto)?</p>
    
    <p class=MsoHeading1>5. CONTRATOS</p>
    <p class=MsoNormal>5.1. ¿Cuál es el horizonte temporal preferido para un contrato de servicios portuarios?</p>
    <p class=MsoNormal>5.2. ¿Está dispuesto a esquemas de Take-or-Pay?</p>
    <p class=MsoNormal>5.3. ¿Qué penalidades considera críticas en el servicio de embarque?</p>
</div>
"""
    
    # --- LOGIC TO REPLACE BODY ROBUSTLY ---
    # Find start and end of body
    # Use re.DOTALL to match newlines
    
    # 1. Normalize Body tag
    # Some word exports have complex body tags like <body lang=EN-US link="#F49100" ...>
    body_start_match = re.search(r'<body[^>]*>', html, re.IGNORECASE)
    body_end_match = re.search(r'</body>', html, re.IGNORECASE)

    if body_start_match and body_end_match:
        start_idx = body_start_match.end()
        end_idx = body_end_match.start()
        
        # Construct new HTML: Head + Original Body Tag + NEW CONTENT + End Body Tag
        new_html = html[:start_idx] + "\n" + new_content + "\n" + html[end_idx:]
        print("Successfully replaced body content via Regex.")
    else:
        print("Could not find body tags via Regex. Appending blindly (Risky but better than nothing).")
        new_html = html + new_content

    # Fix coding
    if '<meta http-equiv=Content-Type content="text/html; charset=utf-8">' not in new_html:
         new_html = new_html.replace('<head>', '<head>\n<meta http-equiv=Content-Type content="text/html; charset=utf-8">')

    with open(output_path, 'w', encoding='utf-8-sig') as f:
        f.write(new_html)
    
    print(f"Created {output_path} with UTF-8 BOM")

if __name__ == "__main__":
    base = r"C:\Users\rguti\Petral.MARK\Infomemo"
    template = os.path.join(base, "Infomemo_WordExport.html")
    output = os.path.join(base, "Cuestionario_Hierro.html")
    images_in = os.path.join(base, "INPUT_IMAGENES")
    create_questionnaire(template, output, images_in)
