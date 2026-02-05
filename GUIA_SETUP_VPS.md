# Guía de Instalación Rápida (IP: 91.108.125.253)

Esta guía asume que ya estás conectado al servidor vía SSH.

## Paso 0: Conexión

### Opción A: Desde tu Navegador (Recomendado si falla Windows)
En el panel de Hostinger, busca el botón **"Browser terminal"** (o Terminal de Navegador). Se abrirá una ventana negra directamente en tu Chrome/Edge. ¡Es lo más rápido!

### Opción B: Desde PowerShell
```powershell
ssh root@91.108.125.253
```
*Si te sale error "ssh no se reconoce"*:
1.  Abre PowerShell como Administrador.
2.  Ejecuta: `Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0`
3.  Cierra y vuelve a abrir PowerShell.

---

## Paso 1: Instalación (Copiar y Pegar en el Servidor)

Copia todo este bloque y pégalo en la consola negra del servidor:

```bash
# 1. Actualizar e Instalar Nginx + Git
apt update
apt install -y nginx git

# 2. Preparar carpetas
# Borramos la página de bienvenida de Nginx para poner tu Portal
rm -rf /var/www/html/*

# 3. Descargar tu Código (Usando la rama congelada de hoy)
# Lo bajamos a una carpeta temporal
git clone -b deploy-vps-2026.02.04.18.10 https://github.com/RichGutz/MARK.git /tmp/mark_repo

# 4. Instalar el Portal GeekSoft (Raíz)
cp -r /tmp/mark_repo/GeekSoft_Portal/* /var/www/html/

# 5. Instalar Petral Dashboard (Subcarpeta /petral)
mkdir -p /var/www/html/petral
cp -r /tmp/mark_repo/Dashboard_Puertos/* /var/www/html/petral/

# 6. Permisos correctos (para que Nginx pueda leer los archivos)
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html

# 7. Reiniciar servidor web
systemctl restart nginx

echo "¡DESPLIEGUE COMPLETADO! Entra a http://91.108.125.253"
```

## Credenciales de Acceso
*   **URL**: `http://91.108.125.253`
*   **Usuario**: `petral`
*   **Contraseña**: `mark2026`
