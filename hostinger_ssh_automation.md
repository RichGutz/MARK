# Guía Definitiva: Automatización SSH en Hostinger con GitHub Actions

**Objetivo**: Eliminar la necesidad de conectarse manualmente por SSH (`ssh root@...`) para actualizar el sitio web. En su lugar, el despliegue se realiza automáticamente cada vez que hacemos un `git push`.

---

## 🏗️ 1. Arquitectura de la Solución

Utilizamos **GitHub Actions**, un servicio integrado en tu repositorio que funciona como un "robot" en la nube.
1.  Tú haces `git push` desde tu PC.
2.  GitHub detecta el cambio y despierta al "robot" (Runner).
3.  El robot lee tus credenciales secretas (que configuramos previamente).
4.  El robot se conecta por SSH a tu VPS de Hostinger.
5.  El robot ejecuta el comando `cd /files_repo && sh update.sh`.
6.  Tu sitio web se actualiza al instante.

---

## 🛠️ 2. Implementación Paso a Paso

### Paso A: Crear el Archivo de Flujo de Trabajo (Workflow)

Creamos un archivo en tu repositorio llamado:
`.github/workflows/deploy.yml`

**Contenido Exacto:**
```yaml
name: Deploy to Hostinger VPS

on:
  push:
    branches:
      - deploy-vps-2026.02.04.18.10  # Rama principal de despliegue
      - main                         # (Opcional) También desplegar al subir a main
  workflow_dispatch:                 # Permite ejecutarlo manualmente desde la web de GitHub

jobs:
  deploy:
    name: Auto-Deploy via SSH
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Execute Update Script on VPS
        uses: appleboy/ssh-action@master  # Acción certificada para SSH
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          password: ${{ secrets.VPS_PASSWORD }}
          port: 22
          script: |
            echo "🚀 [GitHub Actions] Iniciando despliegue automático..."
            
            # 1. Ir a la carpeta del repositorio en el servidor
            cd /files_repo
            
            # 2. Ejecutar el script maestro de actualización
            # (Este script ya hace el git fetch, reset y copy a /var/www/html)
            sh update.sh
            
            echo "✅ [GitHub Actions] Despliegue completado."
```

### Paso B: Configurar las Llaves de Seguridad (Secrets)

Para que GitHub pueda entrar a tu servidor sin que tú pongas la contraseña en el código público, usamos **Repository Secrets**.

1.  Ve a tu repositorio en GitHub: `https://github.com/RichGutz/MARK`
2.  Entra en **Settings** > **Secrets and variables** > **Actions**.
3.  Haz clic en **New repository secret**.
4.  Agrega estas 3 variables (copiando los datos de tu `CLAVES_PRIVADAS.txt`):

| Nombre del Secreto | Valor a Pegar | Descripción |
| :--- | :--- | :--- |
| `VPS_HOST` | `91.108.125.253` | La IP pública de tu VPS. |
| `VPS_USER` | `root` | El usuario administrador. |
| `VPS_PASSWORD` | `TuContraseñaMaldita` | La contraseña SSH (sin espacios extra). |

---

## 🚀 3. ¿Cómo se usa ahora?

¡Ya no hay "paso de despliegue"! Tu flujo de trabajo diario se simplifica al extremo:

1.  **Trabaja en tu PC**: Edita tus archivos HTML, CSS o JS.
2.  **Sube los cambios**:
    ```powershell
    git add .
    git commit -m "Nueva mejora brutal en el dashboard"
    git push origin deploy-vps-2026.02.04.18.10
    ```
3.  **Listo**:
    *   Ve a la pestaña **Actions** en GitHub para ver al robot trabajando en tiempo real (tarda ~30 segundos).
    *   Si sale ✅ en verde, tu web ya está actualizada.

---

## 🛡️ 4. Medidas de Seguridad Implementadas

Para que este proceso sea robusto, también aplicamos:

1.  **Limpieza de Repositorio**:
    *   Se eliminaron archivos pesados (`.mp4`, `.zip`, `.pdf` gigantes) que colgaban el despliegue.
    *   Configuramos un `.gitignore` estricto para evitar que vuelvan a entrar.

2.  **Protocolo Anti-Errores**:
    *   El script `update.sh` en el servidor está diseñado para forzar la actualización (`git reset --hard`), evitando conflictos de fusión en el servidor.
    *   Si algo falla, el robot de GitHub te envía un correo avisando del error.

---

**Resumen**: Has transformado un proceso manual propenso a errores en un pipeline CI/CD (Integración Continua / Despliegue Continuo) profesional. ¡Felicidades!
