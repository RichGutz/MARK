import os
from dotenv import load_dotenv
from supabase import create_client, Client
import json

# Cargar credenciales
load_dotenv(r"C:\Users\rguti\Petral.MARK\Dashboard_Puertos\.env")
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")

if not url or not key:
    print("Error: Credenciales no encontradas.")
    exit(1)

supabase: Client = create_client(url, key)

def fetch_samples():
    try:
        # Consultar los primeros 5 registros de port_arrivals
        response = supabase.table("port_arrivals").select("*").limit(5).execute()
        
        if response.data:
            headers = response.data[0].keys()
            print("\n--- HEADERS DE LA TABLA 'port_arrivals' ---")
            print(list(headers))
            
            print("\n--- EJEMPLOS DE REGISTROS ---")
            print(json.dumps(response.data, indent=2))
        else:
            print("La tabla está vacía.")
            
    except Exception as e:
        print(f"Error al consultar Supabase: {e}")

if __name__ == "__main__":
    fetch_samples()
