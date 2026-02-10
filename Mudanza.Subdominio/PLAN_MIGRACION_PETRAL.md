# Guía Definitiva de Migración: Petral a Subdominio en Hostinger

Esta guía documenta los pasos exactos realizados para desplegar `petral.geeksoft.tech`. Fue diseñada para ser replicable con otros clientes utilizando el flujo de GitHub Actions + SSH VPS.

## 1. Configuración de Infraestructura (VPS)

### A. Registro DNS (Hostinger)
Para crear el subdominio dentro del panel de Hostinger:
- **Tipo**: `A`
- **Nombre/Host**: `petral` (esto crea `petral.geeksoft.tech`)
- **Apunta a**: `91.108.125.253` (IP de tu VPS)
- **TTL**: `3600` (Predefinido)

### B. Configuración de Nginx
Crear el archivo en el servidor: `/etc/nginx/sites-available/petral.conf` e incluir:
```nginx
server {
    listen 80;
    server_name petral.geeksoft.tech;
    root /var/www/html/petral;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Recomendado: Gzip para archivos de datos 3D pesados
    gzip on;
    gzip_types text/plain text/css application/javascript application/json;
}
```
**Comandos SSH Activación:**
```bash
sudo ln -s /etc/nginx/sites-available/petral.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### C. Seguridad SSL (Certbot)
Una vez que el DNS ha propagado (puedes verificar en el navegador), ejecutar:
```bash
sudo certbot --nginx -d petral.geeksoft.tech
```

## 2. Automatización con GitHub Actions

El repositorio centraliza todo. Al hacer `push origin main`, GitHub despliega automáticamente:

### Estructura en el VPS
El código se sincroniza en `/var/www/html/petral`. No mezclar con el root de `geeksoft.tech`.

### Script de Despliegue (`update.sh`)
El script en el servidor debe ejecutar:
```bash
cd /var/www/html/petral
git fetch --all
git reset --hard origin/main
# Asegurar permisos
chown -R www-data:www-data /var/www/html/petral
```

## 3. Lógica de Aplicación (Ajustes de Código)

Para mantener la seguridad y la UX en el subdominio:

1. **Gateway de Autenticación**: 
   - El archivo principal es `index.html` (el portal de login de GeekSoft).
   - El dashboard real se renombra a `dashboard.html`.
   - El login exitoso redirige a `./dashboard.html`.

2. **Enlaces de Navegación**:
   - Todos los botones "Volver" en sub-páginas (visores 3D, perfiles, etc.) deben apuntar a `dashboard.html` para no sacar al usuario de la aplicación.

## 4. Solución de Problemas (Gotchas)

> [!IMPORTANT]
> **Archivos Ignorados por Git**: 
> Si usas `.gitignore` globales, archivos grandes como `terrain_mesh_cut.js` (3.5MB) o logos estéticos pueden no subirse.
> **Solución**: Forzar el rastreo: `git add -f path/to/file.js`.

> [!WARNING]
> **Caché de Nginx**: 
> Si cambias la configuración de Nginx, recuerda siempre hacer `sudo systemctl reload nginx`.

> [!TIP]
> **Permisos de Archivo**:
> Si el navegador da error 403, verifica que los archivos pertenezcan al usuario `www-data` en el VPS.
