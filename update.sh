#!/bin/bash
# Script de Actualización Automática
echo "🔄 Iniciando Despliegue..."
echo "📅 Fecha: $(date)"

# 1. Actualizar Código
cd /files_repo
echo "⬇️ Fetching updates in /files_repo..."
git fetch --all
echo "🔀 Resetting to branch: deploy-vps-2026.02.04.18.10"
git reset --hard origin/deploy-vps-2026.02.04.18.10

# 2. Desplegar Portal (Login)
echo "🧹 Limpiando archivos basura (Parking Page)..."
rm -f /var/www/html/index.php /var/www/html/default.php /var/www/html/index.nginx-debian.html

echo "📂 Copiando Portal (GeekSoft_Portal)..."
if [ -d "GeekSoft_Portal" ]; then
    cp -r GeekSoft_Portal/* /var/www/html/
    echo "   -> Portal copiado."
else
    echo "⚠️ ERROR: No se encuentra la carpeta GeekSoft_Portal"
fi

# 3. Desplegar Dashboard (Petral)
echo "📂 Copiando Dashboard (Dashboard_Puertos)..."
mkdir -p /var/www/html/petral
if [ -d "Dashboard_Puertos" ]; then
    # Chequear si existe index.html
    if [ -f "Dashboard_Puertos/index.html" ]; then
        echo "   -> index.html encontrado."
    else
        echo "⚠️ ALERTA: Dashboard_Puertos/index.html NO encontrado en el repo."
    fi
    
    cp -r Dashboard_Puertos/* /var/www/html/petral/
    echo "   -> Dashboard copiado a /var/www/html/petral/"
else
    echo "⚠️ ERROR: No se encuentra la carpeta Dashboard_Puertos"
fi

# 4. Corregir Permisos
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
