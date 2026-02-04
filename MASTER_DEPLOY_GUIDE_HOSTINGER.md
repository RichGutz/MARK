# MASTER GUIDE: Deploying Multiple Private Apps on Hostinger VPS

**Goal**: Host multiple private web applications (e.g., Dashboard, Finance, HR) on a single VPS, accessible via a central Portal, using a unified Git workflow.

---

## 1. Architecture (The "Monorepo" Concept)

Instead of managing separate repositories for each app, we use **one central repository** (`Petral.MARK`) that contains all your applications as subfolders.

**Local Hierarchy (Your PC):**
```text
C:\Users\rguti\Petral.MARK\         <-- The Git Repo Root
├── .git/                           <-- The ONLY git folder (Vital!)
├── update.sh                       <-- The Automation Script
├── GeekSoft_Portal/                <-- The Landing Page (geeksoft.tech)
├── Dashboard_Puertos/              <-- App 1 (geeksoft.tech/petral)
├── Future_App_Finzas/              <-- App 2 (geeksoft.tech/finanzas)
└── Future_App_XYZ/                 <-- App 3 (geeksoft.tech/xyz)
```

**Server Hierarchy (VPS):**
```text
/files_repo/                        <-- Raw Code (Git Clone)
/var/www/html/                      <-- Live Website
├── index.html                      <-- Portal
├── petral/                         <-- App 1
├── finanzas/                       <-- App 2
└── xyz/                            <-- App 3
```

---

## 2. Cheat Sheet: Daily Deployment

When you have made changes to any app:

### Step A: Push from PC
```powershell
cd C:\Users\rguti\Petral.MARK
git add .
git commit -m "Update: Description of changes"
git push origin deploy-vps-2026.02.04.18.10
```
*(Make sure you are pushing to the active branch used by the server)*

### Step B: Update Server (Copy-Paste)

1.  **Abrir Terminal**: Busca "PowerShell" en tu Windows y ábrelo.
2.  **Conectarse** (Copia y pega este bloque):
    ```powershell
    ssh root@91.108.125.253
    ```
    *   **Password**: Copia tu contraseña (`...`), haz **CLIC DERECHO** en la ventana negra (no verás nada) y pulsa ENTER.

3.  **Ejecutar Actualización** (Copia y pega):
    ```bash
    cd /files_repo && sh update.sh
    ```
    *   *Espera hasta ver: "✅ DESPLIEQUE COMPLETADO".*

---

## 3. Workflow: Adding a NEW App

Follow this strict process to add a new application (e.g., "Minera_KPIs"):

1.  **Create Folder**: Create `C:\Users\rguti\Petral.MARK\Minera_KPIs`.
2.  **Add Code**: Put your HTML/Python/JS files inside.
    *   *CRITICAL*: **DO NOT** run `git init` inside this folder. It must be a normal folder, not a git repo.
3.  **Register in Script**:
    *   Open `update.sh`.
    *   Copy the block for "Dashboard_Puertos".
    *   Paste it and rename to "Minera_KPIs", mapping it to `/var/www/html/minera`.
4.  **Push & Deploy**: Follow the "Daily Deployment" steps above.
5.  **Verify**: accurate `geeksoft.tech/minera`.

---

## 4. Troubleshooting (Common Errors)

**Error 403 Forbidden**
*   **Cause**: Missing `index.html` or bad permissions.
*   **Fix**: Run `update.sh` again (it auto-fixes permissions). Check if your app actually has an `index.html`.

**"Repository not found" / files not updating**
*   **Cause**: You might have a nested `.git` folder inside an app folder.
*   **Fix**:
    ```powershell
    # On your PC
    cd YourAppFolder
    rm -r -fo .git  # Delete the nested git
    cd ..
    git rm --cached YourAppFolder
    git add YourAppFolder/*
    ```

**"Permission denied" (SSH)**
*   **Fix**: You typed the password wrong. Copy text, Right-Click in terminal to paste.

---

## 5. Server Setup Reference (One-Time Only)

*If you ever destroy the VPS and start from scratch:*

**Credentials**:
*   **IP**: `91.108.125.253`
*   **User**: `root`
*   **Deploy Path**: `/files_repo`

**Initialization Commands:**
```bash
apt update && apt install -y nginx git
mkdir /files_repo
git clone -b deploy-vps-2026.02.04.18.10 https://github.com/RichGutz/MARK.git /files_repo
# Then run update.sh
```

---

## 6. Configurar el Portal (Login -> App Routing)

La "magia" de que cada usuario vaya a su App (ej: `admin` -> `/petral`, `rrhh` -> `/nominas`) está en el código del Portal.

Cuando subas una nueva App:

1.  Abre `GeekSoft_Portal/index.html`.
2.  Busca la sección de JavaScript (`// --- AUTH ---`).
3.  Agrega la lógica para el nuevo usuario.

**Ejemplo:**
```javascript
const user = document.getElementById('username').value;
// ...
if (user === 'petral') {
    window.location.href = '/petral/'; // Va a la App 1
} else if (user === 'rrhh') {
    window.location.href = '/rrhh/';   // Va a la App 2 (Nueva)
}
```
*Simplemente edita esto, haz Git Push, Update, y listo.*
