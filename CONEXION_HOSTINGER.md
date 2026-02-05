# GUÍA MAESTRA: CONEXIÓN Y DESPLIEGUE HOSTINGER (VPS)

**IP Servidor**: `91.108.125.253`
**Usuario**: `root`
**Web**: [http://91.108.125.253](http://91.108.125.253)

---

## 1. Preparar tu Windows (Solo una vez)
Si PowerShell te dice "ssh no reconocido", instala el cliente oficial:

1.  Abre **PowerShell como Administrador**.
2.  Ejecuta:
    ```powershell
    Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
    ```
3.  Reinicia PowerShell.

---

## 2. Conectarse al Servidor (SSH)
Para entrar a la "pantalla negra" de tu VPS:

1.  Abre PowerShell.
2.  Comando:
    ```powershell
    ssh root@91.108.125.253
    ```
3.  **Contraseña**:
    *   Cópiala (Ctrl+C).
    *   En PowerShell haz **UN CLIC DERECHO** (No verás nada, es invisible).
    *   Presiona ENTER.

ℹ️ *Si falla, usa la "Browser Terminal" en el panel de Hostinger.*

---

## 3. Automatización (El "Botón Mágico")

Ya no necesitas subir Archivos ZIP ni pelear con FTP.
Hemos creado un script en el servidor que baja los cambios de GitHub automáticamente.

### Tu Nuevo Flujo de Trabajo (Día a Día):

**Paso A: En tu PC (Guardar Cambios)**
```powershell
# En la carpeta de tu proyecto
git add .
git commit -m "Descripción de lo que cambiaste"
git push origin master
# (O la rama que estemos usando, ej: deploy-vps-...)
```

**Paso B: En el Servidor (Actualizar Web)**
1.  Conéctate: `ssh root@91.108.125.253`
2.  Ejecuta el comando mágico:
    ```bash
    sh update.sh
    ```

**¡LISTO!** En 5 segundos tu web se actualiza sola.

---

## 4. Arquitectura del Servidor (Técnico)
Para referencia futura, así está organizado tu VPS:

*   **Carpeta Raíz Web**: `/var/www/html/` (Aquí vive el Portal GeekSoft).
*   **Subcarpeta App**: `/var/www/html/petral/` (Aquí vive el Dashboard).
*   **Repositorio Git**: `/files_repo` (Aquí baja el código crudo desde GitHub).
*   **Llave de Acceso**: `/root/.ssh/id_ed25519` (Esta llave está autorizada en tu GitHub "Deploy Keys").

---

## 5. Solución de Problemas

*   **"Permission denied" al conectar**: La contraseña está mal. Usa el clic derecho para pegar o reseteala en el panel de Hostinger.
*   **"Host key verification failed"**: Ejecuta `ssh-keygen -R 91.108.125.253` en tu PC para limpiar la "huella" antigua.
*   **La web no carga**: Ejecuta `systemctl restart nginx` dentro del servidor.

---

## 6. Configurar tu Dominio (geeksoft.tech)
Para que el dominio apunte a tu servidor (y no a la página de "Parking"), debes cambiar el **DNS**.

1.  Ve al Panel Hostinger -> **Dominios** -> `geeksoft.tech` -> **DNS / Zone Editor**.
2.  Busca los registros tipo **A**.
3.  Edita (o crea) estos dos registros para que apunten a tu IP nueva:
    *   **Tipo**: `A` | **Nombre**: `@` | **Valor**: `91.108.125.253`
    *   **Tipo**: `A` | **Nombre**: `www` | **Valor**: `91.108.125.253`
4.  Borra cualquier otro registro "A" que apunte a una IP diferente.
5.  ¡Espera! (Puede tardar de 10 min a 4 horas en propagarse).
