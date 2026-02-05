#!/bin/bash
# Script de Actualización Automática
echo "🔄 Iniciando Despliegue..."

# 1. Actualizar Código
cd /tmp/mark_repo
git fetch --all
git reset --hard origin/deploy-vps-2026.02.04.18.10

# 2. Desplegar Portal (Login)
echo "📂 Copiando Portal..."
cp -r GeekSoft_Portal/* /var/www/html/

# 3. Desplegar Dashboard (Petral)
echo "📂 Copiando Dashboard..."
mkdir -p /var/www/html/petral
cp -r Dashboard_Puertos/* /var/www/html/petral/

# 4. Corregir Permisos (Vital para error 403)
echo "🔒 Ajustando Permisos..."
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html

echo "✅ --- DESPLIEQUE COMPLETADO ---"
