# El Triángulo de Despliegue: Hostinger - Railway - Google Cloud

Este documento detalla la configuración exitosa y los puntos de fallo encontrados al desplegar la aplicación Streamlit en un dominio personalizado, integrando Hostinger (DNS), Railway (Hosting) y Google Cloud (OAuth).

## 1. Hostinger (DNS) - Lo que funcionó ✅

El agente de Hostinger indicó la configuración correcta desde el principio. No fue necesario realizar cambios adicionales en esta parte una vez configurada.

**Configuración en Hostinger (Zona DNS de `geeksoft.tech`):**

| Tipo | Host / Nombre | Apunta a / Valor | Nota |
| :--- | :--- | :--- | :--- |
| `CNAME` | `inandes` | `[dominio-railway].up.railway.app` | Redirige el subdominio a Railway. |
| `TXT` | `_railway-verify.inandes` | `railway-verify=...` | Verificación de propiedad del dominio. |

> **Lección:** Una vez que Railway verifica el dominio y el navegador muestra la app (o el error de la app), Hostinger ya cumplió su función. No buscar errores aquí si la página carga.

---

## 2. Railway (Hosting) - Puntos Críticos ⚠️

Aquí es donde ocurrieron la mayoría de los problemas de configuración "dura".

### A. Puerto de la Aplicación (`PORT`)
*   **Problema:** La app no cargaba o daba error de "Application Error".
*   **Causa:** Streamlit por defecto usa el puerto `8501`. Railway asigna un puerto dinámico mediante la variable de entorno `$PORT`.
*   **Solución:**
    *   **Archivo `Procfile`:** Debe usar la variable `$PORT`.
        ```bash
        web: streamlit run 00_Home.py --server.port=$PORT --server.address=0.0.0.0
        ```

### B. Variables de Entorno y `secrets.toml`
*   **Problema:** El login de Google fallaba con `redirect_uri_mismatch` a pesar de configurar la variable en Railway.
*   **Causa Raíz:** El archivo local `.streamlit/secrets.toml` tenía la URL antigua ("hardcodeada") y **tenía prioridad** sobre las variables de entorno de Railway en el código de `streamlit-oauth`.
*   **Solución:**
    *   Asegurar que `secrets.toml` NO tenga valores fijos heredados de desarrollo si se planea usar variables de entorno, O BIEN, actualizar `secrets.toml` con los valores de producción y forzar su subida (`git add -f`).
    *   **Variable Clave:** `OAUTH_REDIRECT_URI` debe ser **exactamente** `https://inandes.geeksoft.tech`.

### C. CORS y XSRF
*   Streamlit a veces bloquea solicitudes de orígenes cruzados (CORS) en dominios personalizados.
*   **Solución:** Crear `.streamlit/config.toml`:
    ```toml
    [server]
    enableCORS = false
    enableXsrfProtection = false
    headless = true
    ```

---

## 3. Google Cloud Console (OAuth) - La Validación Estricta  STRICT 🚫

Google es extremadamente estricto con las URIs de redirección.

*   **Error Común:** `Error 400: redirect_uri_mismatch`.
*   **Causa:** La URL que envía la app (desde Railway) no coincide **letra por letra** con la autorizada en Google.
*   **Solución:**
    1.  Ir a **APIs & Services > Credentials**.
    2.  Editar el Cliente OAuth 2.0.
    3.  En **Authorized redirect URIs**, agregar:
        `https://inandes.geeksoft.tech`
    4.  **IMPORTANTE:** No debe tener `/` al final (a menos que tu código la envíe con `/`). Debe ser **exacta**.

---

## Resumen del Flujo de Éxito

1.  **Browser:** Usuario entra a `https://inandes.geeksoft.tech`.
2.  **Hostinger:** DNS resuelve a la IP de Railway.
3.  **Railway:**
    *   Recibe la petición.
    *   Lanza Streamlit en el `$PORT` correcto.
    *   Lee `OAUTH_REDIRECT_URI` = `https://inandes.geeksoft.tech`.
4.  **App (Streamlit):**
    *   Inicia flujo OAuth enviando `redirect_uri=https://inandes.geeksoft.tech`.
5.  **Google:**
    *   Verifica que `https://inandes.geeksoft.tech` esté en su lista blanca.
    *   Si coincide ✅ -> Muestra pantalla de login.
    *   Si no coincide ❌ -> Error 400.
