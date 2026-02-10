#!/bin/bash
# Script de Actualización Automática
echo "🔄 Iniciando Despliegue..."
echo "📅 Fecha: $(date)"

# 1. Actualizar Código
cd /files_repo
echo "⬇️ Fetching updates in /files_repo..."
git fetch --all
echo "🔀 Resetting to branch: main"
git reset --hard origin/main

# 2. SECCIÓN DE APLICACIONES (Agrega tus apps aquí) ------------------------------

# --- APP 1: PORTAL GEEKSOFT (Raíz) ---
echo "📂 [APP 1] Desplegando Portal..."
# Limpieza de archivos default de Hostinger si existen
rm -f /var/www/html/index.php /var/www/html/default.php /var/www/html/index.nginx-debian.html

if [ -d "GeekSoft_Portal" ]; then
    cp -r GeekSoft_Portal/* /var/www/html/
    echo "   -> OK: Portal actualizado."
else
    echo "⚠️ ERROR: No se encuentra GeekSoft_Portal"
fi

# --- APP 2: DASHBOARD PETRAL (/petral) ---
echo "📂 [APP 2] Desplegando Dashboard Petral..."
mkdir -p /var/www/html/petral
if [ -d "Dashboard_Puertos" ]; then
    cp -r Dashboard_Puertos/* /var/www/html/petral/
    if [ -f "Dashboard_Puertos/index.html" ]; then echo "   -> OK: index.html detectado."; else echo "⚠️ ALERTA: Sin index.html"; fi
    echo "   -> OK: Dashboard actualizado en /petral"
else
    echo "⚠️ ERROR: No se encuentra Dashboard_Puertos"
fi

# --- EJEMPLO PARA NUEVA APP (Descomentar y editar) ---
# echo "📂 [APP NUEVA] Desplegando MiApp..."
# mkdir -p /var/www/html/miapp
# if [ -d "CarpetaDeTuApp" ]; then
#     cp -r CarpetaDeTuApp/* /var/www/html/miapp/
#     echo "   -> OK: MiApp actualizada."
# fi

# --------------------------------------------------------------------------------

# 3. Corregir Permisos (Global)
echo "🔒 Ajustando Permisos..."
chown -R www-data:www-data /var/www/html
find /var/www/html -type d -exec chmod 755 {} \;
find /var/www/html -type f -exec chmod 644 {} \;

# Verificación final
if [ -f "/var/www/html/petral/index.html" ]; then
    echo "✅ ÉXITO: /var/www/html/petral/index.html existe."
else
    echo "❌ FALLO: /var/www/html/petral/index.html NO existe. Error 403 probable."
fi

echo "✅ --- DESPLIEQUE COMPLETADO ---"
