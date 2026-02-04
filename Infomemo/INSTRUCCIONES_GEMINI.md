# Protocolo de Trabajo: Generación de Infomemo (Audio -> HTML -> DOCX)

> [!IMPORTANT]
> **LEER ESTO ANTES DE EMPEZAR**: Este es el flujo de trabajo ESTRICTO Y DEFINITIVO para la creación del Infomemo. No reinventar la rueda. No intentar parsers experimentales. Usamos la automatización nativa de Word para fidelidad 100%.

## Objetivo
El usuario (`rguti`) dará instrucciones verbales (archivos de audio) para modificar el documento Infomemo. Tu trabajo es transcribir esas instrucciones, editar el documento "Master" en HTML para reflejarlas, y generar el entregable final en DOCX.

## El Ciclo de Vida (Workflow)

### 1. Instrucción de Audio
*   **Entrada**: El usuario provee un archivo de audio (ej. `.ogg`, `.mp3`, `.wav`) en la carpeta `Infomemo`.
*   **Acción**: Transcribir el audio usando el script dedicado.
*   **Comando**:
    ```powershell
    python "C:\Users\rguti\Petral.MARK\audio_transcrip\transcribe_whisper.py" "RUTA_DEL_AUDIO"
    ```
*   **Resultado**: Un archivo de texto con la transcripción. Lee este archivo para entender qué cambios hacer.

### 2. Edición HTML (El "Master")
*   **Contexto**: No editamos el DOCX directamente porque es difícil de manipular programáticamente sin romper el formato. Editamos el **HTML de Alta Fidelidad** que fue exportado desde Word.
*   **Archivo Maestro**: `C:\Users\rguti\Petral.MARK\Infomemo\Infomemo_WordExport.html`
*   **Acción**: 
    1.  Leer la transcripción del paso 1.
    2.  Modificar `Infomemo_WordExport.html` insertando el texto nuevo o las referencias a imágenes (`<img src="...">`).
    3.  **Nota**: Mantener el CSS y estructura existente. Solo inyectar contenido en los lugares indicados.

### 3. Generación DOCX (El Entregable)
*   **Contexto**: El usuario necesita un DOCX final nativo. Usamos el motor de Word (COM Automation) para convertir el HTML editado de vuelta a un DOCX perfecto.
*   **Script**: `C:\Users\rguti\Petral.MARK\Infomemo\convert_html_to_docx.ps1`
*   **Comando**:
    ```powershell
    cd 'C:\Users\rguti\Petral.MARK\Infomemo'
    powershell -ExecutionPolicy Bypass -File convert_html_to_docx.ps1 "Infomemo_WordExport.html" "Infomemo_Entregable.docx"
    ```
*   **Resultado**: `Infomemo_Entregable.docx` (Archivo listo para enviar/revisar).

### 4. Generación PDF (Opcional/Verificación)
*   Si se pide PDF, usar el script de conversión a PDF (también usa Word COM).
*   **Script**: `convert_word_to_pdf.ps1`

## Resumen de Herramientas (Scripts)

| Paso | Script | Ubicación | Descripción |
| :--- | :--- | :--- | :--- |
| **1** | `transcribe_whisper.py` | `..\audio_transcrip\` | Transcribe audio a texto. |
| **2** | (Manual/Agente) | `Infomemo\` | Tú editas el HTML directamente. |
| **3** | `convert_html_to_docx.ps1` | `Infomemo\` | Convierte HTML -> DOCX (Fidelidad 100%). |
| **Extras** | `convert_word_com.ps1` | `Infomemo\` | Convierte DOCX -> HTML (Para reiniciar el ciclo si el DOCX fuente cambia). |

## Reglas de Oro
1.  **NO usar Pandoc o conversores python-docx para la generación final**. Rompen el formato complejo (márgenes, encabezados).
2.  **SIEMPRE usar los scripts `.ps1`** provistos. Usan la API nativa de Windows Word (`Word.Application`).
3.  **El HTML es la fuente de verdad** durante la sesión de edición.

## Protocolo de Imágenes
Para insertar nuevas imágenes sin romper el formato:

1.  **Ubicación**: Colocar las imágenes en `C:\Users\rguti\Petral.MARK\Infomemo\INPUT_IMAGENES`.
2.  **Nomenclatura**: Usar nombres cortos y numerados.
    *   Ejemplo: `img_01.jpg`, `img_02.png`, `mapa_puerto.jpg`.
3.  **Instrucción de Audio**: Indicar claramente DÓNDE va.
    *   *"Debajo del título de Logística, pon la imagen mapa_puerto"*.
    *   *"Al final de la intro, pon la img_01"*.
4.  **Ejecución (Agente)**:
    *   Copiar la imagen a la carpeta `assets` (si no está).

## Caso de Uso: Gráficos del Dashboard (San Nicolás)

Si necesitas incorporar mapas o gráficos del `Dashboard_Puertos`:

1.  **Captura**: Abre el dashboard en tu navegador y toma un screenshot (Win+Shift+S) de la vista deseada (ej. Logística, Puertos).
2.  **Guardado**: Guarda la imagen en `C:\Users\rguti\Petral.MARK\Infomemo\INPUT_IMAGENES`.
3.  **Naming Convention**:
    *   `mapa_logistica.png` (Para la sección Logística)
    *   `mapa_puertos.png` (Para la comparación de puertos)
4.  **Automatización**:
    *   El script `create_questionnaire_html.py` (o similar) ya está configurado para buscar estos nombres específicos.
    *   Si encuentras la imagen, la copiará automáticamente a `assets` y la inyectará en el HTML con el pie de foto adecuado.

## Actualizaciones Recientes (04/Feb/2026)

### 1. Script de Generación Robusta (`create_questionnaire_html.py`)
Se ha mejorado el script para que no solo acepte contenido, sino que **reemplace quirúrgicamente** el cuerpo del documento HTML original.
*   **Lógica**: Busca las etiquetas `<body>` y `</body>` y sustituye todo el contenido interno con el nuevo cuestionario.
*   **Beneficio**: Mantiene los estilos CSS complejos del Word original (fuentes, márgenes) pero con contenido 100% limpio.
*   **Manejo de Imágenes**: Detecta archivos específicos (ej. `Ubicacion.RUTAS.STRIKE.png`) en `INPUT_IMAGENES` y los incrusta automáticamente.

### 2. Modificaciones al Dashboard (`Dashboard_Puertos`)
Se ha alterado la interfaz para limpiar la vista inicial:
*   **Ribbon Superior**: Se agregó la sección "CALCULADORAS".
*   **Checkboxes**: "Log. Minera" y "Log. Combustible".
*   **Estado Inicial**: Paneles ocultos (`display: none`) por defecto. Solo aparecen al marcar el check.
*   **Nombres Limpios**: Se eliminó "(Shougang)" de la etiqueta de San Nicolás para evitar ruido visual.

## Checklist para el Próximo Agente

- [ ] Verificar si hay nuevos audios en `Infomemo/`.
- [ ] Verificar si hay nuevas imágenes en `INPUT_IMAGENES`.
- [ ] Si se pide un nuevo cuestionario, usar `create_questionnaire_html.py` como base (copiar y adaptar para otros minerales si es necesario).



