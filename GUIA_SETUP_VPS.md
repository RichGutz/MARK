# Guía de Configuración VPS (Hostinger KVM)

¡Felicidades por el servidor KVM! Al tener un VPS completo (Ubuntu), tenemos control total. Esto es mucho mejor que un hosting básico.

## Información del Servidor
*   **Host**: `srv1333009.hstgr.cloud` (o tu IP directa)
*   **Usuario**: `root`
*   **Contraseña**: (La que definiste en el setup de Hostinger)

---

## Fase 1: Conexión (Desde tu PC)

Necesitamos entrar a la "consola" del servidor.
1.  Abre **PowerShell** en tu computadora.
2.  Escribe:
    ```powershell
    ssh root@srv1333009.hstgr.cloud
    ```
3.  Si es la primera vez, escribe `yes` para aceptar la huella digital.
4.  Escribe tu contraseña de root (no se verá mientras escribes).

*Si no te deja conectar por el nombre, usa la IP numérica que te da Hostinger (ej. `192.168.x.x`).*

---

## Fase 2: Instalación del Entorno

Una vez dentro (verás algo como `root@srv1333009:~#`), copia y pega estos comandos bloque por bloque:

### 1. Actualizar Sistema
```bash
apt update && apt upgrade -y
```

### 2. Instalar Herramientas Básicas (Git, Nginx, Python)
```bash
apt install -y git nginx python3 python3-pip python3-venv htop
```

### 3. Verificar que Nginx funciona
Abre tu navegador y entra a `http://srv1333009.hstgr.cloud` (o tu IP).
*   Deberías ver "Welcome to nginx!".

---

## Fase 3: Desplegar el Proyecto

### 1. Clonar el Repositorio
Vamos a bajar tu código a la carpeta `/var/www/petral`.

```bash
mkdir -p /var/www/petral
cd /var/www/petral
# Importante: Aquí usarás tu URL de Git.
# Usamos la rama congelada de hoy:
git clone -b deploy-vps-2026.02.04.18.10 https://github.com/RichGutz/MARK.git .
```

### 2. Configurar la Web (Dashboard)
Vamos a decirle a Nginx que muestre la carpeta `Dashboard_Puertos`.

Crea el archivo de configuración:
```bash
nano /etc/nginx/sites-available/petral
```

Pega este contenido (Click derecho pega en la terminal):
```nginx
server {
    listen 80;
    server_name srv1333009.hstgr.cloud;  # O tu dominio si compraste uno

    root /var/www/petral/Petral.MARK/Dashboard_Puertos;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Habilitar CORS si es necesario para APIs futuras
    location /api {
        # Proxy pass si montamos el backend python luego
    }
}
```
*   Presiona `Ctrl+O` (Enter) para guardar.
*   Presiona `Ctrl+X` para salir.

### 3. Activar el Sitio
```bash
ln -s /etc/nginx/sites-available/petral /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default  # Borrar el default de Nginx
nginx -t                             # Verificar sintaxis
systemctl restart nginx              # Reiniciar servidor
```

---

## Fase 4: Verificar
Entra a `http://srv1333009.hstgr.cloud`.
¡Deberías ver tu **Dashboard de Puertos** funcionando en vivo!

---

## Notas Importantes
*   **Git Push/Pull**: Para actualizar, harás cambios en tu PC, `git push`, y luego entrarás al servidor y harás `git pull`. (Podemos automatizar esto después).
*   **Python Scripts**: Los scrapers (`scraper_apu.py`) los correremos en background usando `cron` o `systemd` para que funcionen 24/7 sin que tengas tu PC prendida.
