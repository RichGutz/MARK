import os
import json
from supabase import create_client, Client
from dotenv import load_dotenv

# Cargar variables de entorno desde el directorio raíz
load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))

# Credenciales (Usando variables de entorno si existen, o fallback a las del script de prueba)
url = os.environ.get("SUPABASE_URL") or "https://mancsrsbtzgctgorpogs.supabase.co"
key = os.environ.get("SUPABASE_KEY") or "sb_publishable_CT41HFF7NMtQunrSSGsksg_uwxmfteK"

import requests
import time
from datetime import datetime, time as pytime

# ... (otras importaciones y config)

def get_elevation_batch(locations):
    """Obtiene la elevación para una lista de puntos usando Open-Meteo"""
    if not locations: return []
    
    base_url = "https://api.open-meteo.com/v1/elevation"
    lats = [f"{p['latitude']:.6f}" for p in locations]
    lons = [f"{p['longitude']:.6f}" for p in locations]
    
    # Lote de 50 para evitar URLs largas y ser conservadores con el rate limit
    batch_size = 50
    all_elevations = []
    
    for i in range(0, len(locations), batch_size):
        batch_lats = lats[i:i+batch_size]
        batch_lons = lons[i:i+batch_size]
        url = f"{base_url}?latitude={','.join(batch_lats)}&longitude={','.join(batch_lons)}"
        
        try:
            print(f"   ...obteniendo lote {i//batch_size + 1}...")
            response = requests.get(url, timeout=15)
            response.raise_for_status()
            data = response.json()
            all_elevations.extend(data.get('elevation', []))
            time.sleep(2) # Pausa de 2s entre lotes
        except Exception as e:
            print(f"Error actualizando elevación (lote {i}): {e}")
            all_elevations.extend([0] * len(batch_lats))
            
    return all_elevations

def fetch_and_generate_js():
    print("🛰️ Conectando a Supabase (Hoy >= 09:00 AM)...")
    try:
        supabase: Client = create_client(url, key)
        today_9am = datetime.combine(datetime.now().date(), pytime(9, 0)).isoformat()
        
        response = supabase.table("field_tracking") \
            .select("latitude, longitude, created_at, accuracy") \
            .gte("created_at", today_9am) \
            .order("created_at", desc=False) \
            .limit(2000) \
            .execute()
        
        records = response.data
        if not records:
            print(f"❌ No hay puntos nuevos.")
            with open(os.path.join(os.path.dirname(__file__), "layer_tracking.js"), "w", encoding="utf-8") as f:
                f.write("const TRACKING_POINTS = [];")
            return

        print(f"✅ Descargados {len(records)} puntos. Obteniendo elevaciones...")
        
        # 2. Obtener elevaciones
        elevations = get_elevation_batch(records)
        
        # 3. Enriquecer records y limpiar
        for i, r in enumerate(records):
            r['elevation'] = elevations[i] if i < len(elevations) else 0
            r['ordinal'] = i + 1  # El ordinal basado en el tiempo
        
        # Generar JS
        js_content = f"// Archivo filtrado: Hoy >= 9:00 AM + Elevación MSNM\n"
        js_content += f"// Generado: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n\n"
        js_content += f"const TRACKING_POINTS = {json.dumps(records, indent=2)};\n"
        
        output_path = os.path.join(os.path.dirname(__file__), "layer_tracking.js")
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(js_content)
            
        print(f"✨ Archivo actualizado con {len(records)} puntos y elevaciones.")
                
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    fetch_and_generate_js()
