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
            print(f"   ⚠️ Error en API (lote {i}): {e}")
            all_elevations.extend([None] * len(batch_lats))
            
    return all_elevations

def fetch_and_generate_js():
    print("🛰️ Conectando a Supabase (Hoy >= 09:00 AM)...")
    try:
        supabase: Client = create_client(url, key)
        today_9am = datetime.combine(datetime.now().date(), pytime(9, 0)).isoformat()
        
        # 1. Traer TODOS los puntos de hoy (para el mapa) desde la NUEVA TABLA
        response = supabase.table("field_tracking_elevation") \
            .select("id, latitude, longitude, created_at, accuracy, elevation") \
            .gte("created_at", today_9am) \
            .order("created_at", desc=False) \
            .execute()
        
        records = response.data
        if not records:
            print(f"❌ No hay puntos nuevos en field_tracking_elevation.")
            with open(os.path.join(os.path.dirname(__file__), "layer_tracking.js"), "w", encoding="utf-8") as f:
                f.write("const TRACKING_POINTS = [];")
            return

        # --- ORDENACIÓN CRONOLÓGICA ABSOLUTA ---
        records.sort(key=lambda x: x['created_at'])

        # 2. Identificar puntos SIN elevación (null)
        # Filtramos estrictamente los que no tienen valor para no re-consultar
        missing_elevation = [r for r in records if r.get('elevation') is None]
        
        if missing_elevation:
            print(f"✅ Total: {len(records)} puntos. 🚀 {len(missing_elevation)} pendientes de elevación.")
            elevations = get_elevation_batch(missing_elevation)
            
            # 3. Guardar elevación en Supabase individualmente para asegurar persistencia inmediata
            success_count = 0
            for i, r in enumerate(missing_elevation):
                elev = elevations[i]
                if elev is not None: # Permitimos 0 porque estamos en un puerto (nivel del mar)
                    r['elevation'] = elev
                    try:
                        # Actualización inmediata en Supabase
                        supabase.table("field_tracking_elevation").update({"elevation": elev}).eq("id", r['id']).execute()
                        success_count += 1
                        if success_count % 10 == 0:
                            print(f"   📥 Guardados {success_count}/{len(missing_elevation)} en Supabase...")
                    except Exception as e:
                        print(f"   ⚠️ Error guardando punto {r['id']}: {e}")
            print(f"✨ Proceso de sincronización completado. {success_count} puntos actualizados.")
        else:
            print(f"✨ Todos los {len(records)} puntos ya cuentan con elevación persistente.")
        
        # 4. Asignar ordinales
        for i, r in enumerate(records):
            r['ordinal'] = i + 1
        
        # Generar JS
        js_content = f"// Archivo filtrado: Hoy >= 9:00 AM + Elevación PERSISTENTE\n"
        js_content += f"// Generado: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n\n"
        js_content += f"const TRACKING_POINTS = {json.dumps(records, indent=2)};\n"
        
        output_path = os.path.join(os.path.dirname(__file__), "layer_tracking.js")
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(js_content)
            
        print(f"✨ Archivo actualizado con {len(records)} puntos y elevaciones optimizadas.")
                
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    fetch_and_generate_js()
