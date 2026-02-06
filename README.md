# ⚠️ LEER ESTO PRIMERO - OBLIGATORIO PARA AGENTES

## 🚨 ATENCIÓN AGENTE DE IA

**ANTES de hacer CUALQUIER cambio a este proyecto, debes:**

1. ✅ **LEER COMPLETAMENTE** → [`MASTER_DEPLOY_GUIDE_HOSTINGER.md`](MASTER_DEPLOY_GUIDE_HOSTINGER.md)
2. ✅ **ENTENDER** las secciones 8, 9 y 10 (Scraper, Workflow, Emergencias)
3. ✅ **VERIFICAR** qué archivos NO debes tocar

---

## 🏗️ Arquitectura del Proyecto

Este proyecto tiene **DOS partes críticas** que NO deben romperse:

### 1. Frontend (Puedes modificar libremente)
- **Ubicación:** `Dashboard_Puertos/*.html`, `*.css`, `*.js`
- **Deploy:** Git push → `update.sh` en VPS
- **Seguro:** ✅ Modificar sin miedo

### 2. Scraper Automático (⚠️ NO TOCAR sin leer guía)
- **Ubicación VPS:** `/files_repo/Dashboard_Puertos/scraper_apu.py`
- **Cron Job:** Ejecuta cada hora automáticamente
- **Crítico:** ❌ Si lo rompes, se pierde data histórica

---

## 📋 Checklist ANTES de Modificar

- [ ] Leí [`MASTER_DEPLOY_GUIDE_HOSTINGER.md`](MASTER_DEPLOY_GUIDE_HOSTINGER.md) completo
- [ ] Entiendo qué archivos se sobrescriben con `update.sh` (Sección 9)
- [ ] Sé cómo restaurar si rompo algo (Sección 10)
- [ ] Verifiqué que mis cambios NO afectan el scraper
- [ ] Tengo el comando de backup a mano

---

## 🆘 Si Rompiste Algo

**NO ENTRES EN PÁNICO.** Ve a la **Sección 10** de la guía:

```bash
# Restauración de emergencia (copia y pega)
ssh root@91.108.125.253 << 'ENDSSH'
pip3 install requests beautifulsoup4 python-dotenv supabase
(crontab -l 2>/dev/null | grep -v scraper; echo "0 * * * * /bin/bash /files_repo/run_scraper.sh") | crontab -
chmod +x /files_repo/run_scraper.sh
/bin/bash /files_repo/run_scraper.sh
echo "✅ Restauración completada"
ENDSSH
```

---

## 📚 Documentación Clave

| Documento | Propósito |
|-----------|-----------|
| [`MASTER_DEPLOY_GUIDE_HOSTINGER.md`](MASTER_DEPLOY_GUIDE_HOSTINGER.md) | **GUÍA PRINCIPAL** - Leer SIEMPRE |
| `CLAVES_PRIVADAS.txt` | Credenciales del VPS (NO subir a Git) |
| `.gitignore` | Archivos protegidos |

---

## 🎯 Workflow Correcto

### Para Modificar el Frontend:
```powershell
# 1. Modificar archivos localmente
# 2. Git push
git add Dashboard_Puertos/*.html Dashboard_Puertos/*.css Dashboard_Puertos/*.js
git commit -m "Update: descripción"
git push origin deploy-vps-2026.02.04.18.10

# 3. Actualizar VPS
ssh root@91.108.125.253
cd /files_repo && sh update.sh
```

### Para Modificar el Scraper:
**⚠️ LEE SECCIÓN 9 DE LA GUÍA PRIMERO**

---

## 🔒 Archivos PROTEGIDOS (NO tocar)

Estos archivos están en el VPS y NO deben modificarse sin leer la guía:

- `/files_repo/Dashboard_Puertos/scraper_apu.py`
- `/files_repo/Dashboard_Puertos/sync_supabase.py`
- `/files_repo/Dashboard_Puertos/.env`
- `/files_repo/run_scraper.sh`
- Cron job (configuración del sistema)

---

## ✅ Verificación Post-Cambios

Después de CUALQUIER modificación, ejecuta:

```bash
ssh root@91.108.125.253 << 'ENDSSH'
echo "=== VERIFICACIÓN COMPLETA ==="
crontab -l | grep scraper
ls -lh /files_repo/Dashboard_Puertos/scraper_apu.py
tail -10 /var/log/scraper.log
ENDSSH
```

---

## 🎓 Reglas de Oro

1. **SIEMPRE** lee la guía antes de modificar
2. **NUNCA** borres el cron job
3. **NUNCA** modifiques archivos en `/files_repo/Dashboard_Puertos/` sin entender el impacto
4. **SIEMPRE** verifica después de actualizar
5. **SIEMPRE** ten el comando de backup a mano

---

## 📞 En Caso de Duda

**Si no estás 100% seguro de algo:**
1. Lee la sección correspondiente de la guía
2. Pregunta al usuario antes de proceder
3. Crea un backup antes de hacer cambios críticos

---

**Última actualización:** 2026-02-04  
**Mantenedor:** Usuario (rguti)  
**VPS:** Hostinger - 91.108.125.253

---

## ☁️ Supabase (Base de Datos)

**Acceso:**
- **Login:** [supabase.com](https://supabase.com)
- **Cuenta:** GitHub (**RichGutz**)
- **Proyecto:** `mancsrsbtzgctgorpogs` (Dashboard Puertos)

**Credenciales:**
- Ver `CLAVES_PRIVADAS.txt` (local) o `.env` (VPS).

