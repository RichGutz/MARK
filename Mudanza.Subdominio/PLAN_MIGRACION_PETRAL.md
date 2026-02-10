# Plan de Migración: `petral.geeksoft.tech` (Vía GitHub Actions)

Este plan aprovecha la automatización ya existente en `.github/workflows/deploy.yml` para realizar el despliegue automático al hacer `git push`, eliminando la necesidad de comandos SSH manuales para subir el código.

## 1. Automatización Actual (Confirmada)
- [x] **GitHub Actions**: El archivo `deploy.yml` ya está configurado para conectarse al VPS y ejecutar `sh update.sh` automáticamente al subir cambios a la rama de despliegue.
- [x] **Script de Actualización**: `update.sh` en el servidor ya gestiona la descarga del código y los permisos.

## 2. Tareas de Infraestructura (Una sola vez)
Para que el subdominio funcione, necesitamos configurar Nginx en el servidor:

### A. Configuración de Nginx
Crear un nuevo archivo de sitio en el VPS (ej: `/etc/nginx/sites-available/petral.conf`):
```nginx
server {
    listen 80;
    server_name petral.geeksoft.tech;
    root /var/www/html/petral;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### B. DNS en Hostinger
- [ ] Crear registro **Tipo A**:
  - **Host**: `petral`
  - **Apunta a**: `91.108.125.253` (IP del VPS).

### C. SSL (Certbot)
- [ ] Ejecutar en el VPS (una vez): `certbot --nginx -d petral.geeksoft.tech`

## 3. Flujo de Trabajo Diario (Sin SSH Manual)
1. **Local**: Modificas el código en `Dashboard_Puertos/`.
2. **Git**: Haces `add`, `commit` y `push`.
3. **GitHub Actions**: Se dispara el workflow, actualiza el VPS y tus cambios aparecen en `https://petral.geeksoft.tech`.

## Próximos Pasos
1. [ ] Autorizar `git push` de los cambios del visor 3D realizados hoy.
2. [ ] Crear el registro DNS en Hostinger.
3. [ ] Preparar el archivo de configuración de Nginx para subirlo al VPS.
