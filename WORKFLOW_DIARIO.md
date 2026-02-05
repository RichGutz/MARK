# 🚀 Flujo de Trabajo Diario (GeekSoft / Petral)

Este es tu "Cheat Sheet" para trabajar día a día.

---

## 🏗️ Fase 1: En tu PC (Local)
**Objetivo:** Hacer cambios, probarlos y subirlos a la nube.

1.  **Abrir Proyecto:**
    *   Abre tu VS Code o editor en `C:\Users\rguti\Petral.MARK`.
    *   Abre una terminal (PowerShell).

2.  **Hacer Cambios:**
    *   Modifica tus archivos HTML, Python, etc.
    *   *Tip:* Para ver cambios visuales (como la web), dale doble clic al archivo HTML o usa:
        ```powershell
        Invoke-Item "GeekSoft_Portal\index.html"
        ```

3.  **Guardar y Subir (Git):**
    Cuando estés feliz con los cambios, corre estos 3 comandos en orden:
    
    ```powershell
    # 1. Preparar todo lo nuevo
    git add .
    
    # 2. Guardar con un mensaje (cambia el texto entre comillas)
    git commit -m "Mejora: Cambie el color del boton"
    
    # 3. Enviar a la Nube (Hosting)
    git push origin deploy-vps-2026.02.04.18.10
    ```

---

## ☁️ Fase 2: En el Servidor (VPS)
**Objetivo:** Que el servidor descargue tus cambios y actualice la web real.

1.  **Entrar al VPS:**
    *   Ve a Hostinger -> "Browser terminal" (Pantalla negra).
    *   O si configuraste SSH en PowerShell: `ssh root@91.108.125.253`

2.  **Actualizar:**
    Solo tienes que escribir esto y dar Enter:

    ```bash
    sh update.sh
    ```

3.  **¡Listo!**
    *   Tu web ya está actualizada en: [http://91.108.125.253](http://91.108.125.253) (o geeksoft.tech).
    *   *Nota:* Si cambiaste imágenes y no se ven, recuerda borrar la caché de tu navegador (Ctrl + F5).
