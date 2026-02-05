---
description: OBLIGATORIO - Leer ANTES de modificar CUALQUIER archivo
---

# ⚠️ WORKFLOW OBLIGATORIO - LEER PRIMERO

**Este workflow DEBE ejecutarse ANTES de hacer cualquier modificación al proyecto.**

## Paso 1: Leer Documentación Crítica

// turbo
1. Lee completamente `README.md`
2. Lee completamente `MASTER_DEPLOY_GUIDE_HOSTINGER.md`
3. Presta especial atención a las secciones 8, 9 y 10

## Paso 2: Confirmar Comprensión

Antes de proceder, confirma al usuario que entiendes:

- ✅ Qué archivos NO debes modificar (scraper, cron job)
- ✅ Cómo funciona el workflow de actualización (Git → update.sh)
- ✅ Cómo restaurar si algo se rompe (Sección 10)

## Paso 3: Verificar Estado Actual

// turbo
Ejecuta estos comandos para verificar que todo está funcionando:

```bash
ssh root@91.108.125.253 "crontab -l | grep scraper && ls -lh /files_repo/Dashboard_Puertos/scraper_apu.py && tail -5 /var/log/scraper.log"
```

## Paso 4: Planificar Cambios

Antes de modificar archivos:

1. Identifica QUÉ archivos vas a modificar
2. Verifica si están en la lista de "archivos protegidos"
3. Si vas a tocar el scraper, PREGUNTA AL USUARIO primero
4. Si solo modificas frontend, procede con confianza

## Paso 5: Crear Backup (Si es Crítico)

Si vas a modificar algo relacionado con el scraper:

```bash
ssh root@91.108.125.253 "tar -czf /root/backup_pre_cambio_$(date +%Y%m%d_%H%M).tar.gz /files_repo/Dashboard_Puertos/ /files_repo/run_scraper.sh"
```

## Paso 6: Hacer Cambios

Sigue el workflow de la Sección 9 de la guía:

- Frontend: Git push → update.sh
- Scraper: Editar directamente en VPS

## Paso 7: Verificar Post-Cambios

// turbo
Después de CUALQUIER cambio:

```bash
ssh root@91.108.125.253 "crontab -l | grep scraper && /bin/bash /files_repo/run_scraper.sh && tail -10 /var/log/scraper.log"
```

## 🚨 Si Algo Sale Mal

Ejecuta inmediatamente el comando de restauración de la Sección 10:

```bash
ssh root@91.108.125.253 << 'ENDSSH'
(crontab -l 2>/dev/null | grep -v scraper; echo "0 * * * * /bin/bash /files_repo/run_scraper.sh") | crontab -
chmod +x /files_repo/run_scraper.sh
pip3 install requests beautifulsoup4 python-dotenv supabase
/bin/bash /files_repo/run_scraper.sh
ENDSSH
```

---

**RECUERDA:** Si tienes dudas, PREGUNTA AL USUARIO antes de proceder.
