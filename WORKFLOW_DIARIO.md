# 📋 WORKFLOW DIARIO: Despliegue Petral.MARK

Este documento es la referencia rápida para que cualquier agente de IA (Gemini/Antigravity) realice el despliegue sin pedir instrucciones repetitivas.

## 1. Fase Local: Git Push
Desde PowerShell en la carpeta raíz `C:\Users\rguti\Petral.MARK`:

```powershell
# 1. Verificar estado
git status

# 2. Agregar cambios (ejemplo para Dashboard_Puertos)
git add Dashboard_Puertos/

# 3. Commit
git commit -m "Descripción concisa de los cambios"

# 4. Push a la rama principal (main)
git push origin main
```

## 2. Fase Servidor: VPS Update
Conectar y actualizar el servidor Hostinger.

### Conexión SSH
```powershell
ssh root@91.108.125.253
```
*   **Password**: `N4pee0BVZsL@r6dJz4R+`

### Comando de Actualización
Una vez dentro (terminal `root@srv...#`):
```bash
cd /files_repo && sh update.sh
```

## 3. Notas Importantes
- **Rama de Despliegue**: El servidor `update.sh` está configurado para resetearse a `origin/main`. Siempre empujar a `main` para ver cambios en vivo.
- **Archivos Sensibles**: No subir `.env`, logs o archivos pesados (`.mp4`, `.zip`). Revisar `.gitignore`.
- **Scraper**: El proceso de actualización `update.sh` no rompe el scraper automático que corre cada hora.
- **Verificación**: Tras el despliegue, revisar `https://geeksoft.tech/petral/`.

---
*Ultima actualización: 2026-03-16*
