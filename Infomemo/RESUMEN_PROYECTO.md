# Resumen del Proyecto: PETRAL MARK (Puerto San Nicolás)

**Fecha de Análisis:** 04 Feb 2026
**Ubicación:** `C:\Users\rguti\Petral.MARK`

## 1. Misión del Proyecto
El objetivo central es validar la viabilidad comercial y operativa del **Nuevo Terminal Portuario San Nicolás**. Se busca demostrar a los inversionistas que existe una demanda insatisfecha ("Gap de Infraestructura") en el sur del Perú (Apurímac, Ica, Cusco, Arequipa) que justifica una inversión de **~$280 Millones** (CAPEX).

## 2. Componentes del Ecosistema

### A. La Aplicación ("Dashboard Puertos")
Es una herramienta de inteligencia de mercado basada en mapas interactivos (Leaflet/JS) y procesamiento de datos (Python).
*   **Visualización Geoespacial:** Muestra las minas (Ferrobamba, Strike, etc.), las rutas logísticas (Corredor Sur, Ruta 30A, Ferrocarril Andahuaylas-Marcona) y los puertos competidores.
*   **Tracking en Tiempo Real:** Scrapers (Python) monitorean el tráfico de naves (Tankers y Bulkers) en puertos como Callao, Pisco y Matarani para entender la cadena de suministro actual.
*   **Calculadora Logística:** Módulo que simula la saturación de carreteras y calcula el "Ahorro Logístico" (Flete Terrestre) que ofrece San Nicolás frente a la competencia.

### B. El Negocio (Líneas de Ingreso)
Según el *Mandato del Cliente*, el puerto es **Multipropósito**:
1.  **Minerales (Hierro/Cobre):**
    *   *Volumen Base:* 4.5 millones TM/año (Ferrobamba, Strike).
    *   *Ventaja:* Naves Capesize (200k DWT) vs las limitaciones de Pisco (60k DWT).
    *   *Tarifa:* ~$11.20/TM.
2.  **Combustibles (Líquidos):**
    *   *Demanda:* 400,000 TM/año (Abastecimiento a minas).
    *   *Infraestructura:* Tanques de almacenamiento ($20M CAPEX).
    *   *Ventaja:* Ahorro en flete terrestre al estar más cerca de las minas.

## 3. Estado Actual
*   **Infomemo:** Estamos en la fase de generación de entregables ("Infomemo") para presentar a fondos de inversión.
*   **Tecnología:** El usuario utiliza scripts de Python para convertir datos crudos en inteligencia, y ahora usa **Word Automation** (vía Gemini/Powershell) para generar reportes de alta fidelidad.

## 4. Estructura de Carpetas Clave
*   `Dashboard_Puertos/`: Código fuente del visor web (JS/HTML) y scrapers.
*   `Infomemo/`: Documentación financiera y presentaciones (Aquí trabajamos nosotros).
*   `audio_transcrip/`: Herramientas para convertir instrucciones de voz en tareas.
*   `GAME.PLAN.CLIENTE.MANDATO/`: Documentos estratégicos y definiciones de negocio.

---
*Este resumen sirve de contexto para cualquier agente que trabaje en la generación de contenido del Infomemo.*
