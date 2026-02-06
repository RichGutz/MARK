import os
from dotenv import load_dotenv
from supabase import create_client, Client
from datetime import datetime

# Load env from the Dashboard_Puertos folder where we fixed the creds
load_dotenv("c:\\Users\\rguti\\Petral.MARK\\Dashboard_Puertos\\.env")

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")

if not url or not key:
    print("Error: Credentials not found.")
    exit(1)

supabase: Client = create_client(url, key)

def check_status():
    print(f"\n--- Verificando Supabase: {url} ---")
    
    # 1. Total records for today
    today = datetime.now().strftime("%Y-%m-%d")
    try:
        response = supabase.table("port_arrivals").select("count", count="exact").eq("snapshot_date", today).execute()
        count = response.count
        print(f"Registros de HOY ({today}): {count}")
    except Exception as e:
        print(f"Error count: {e}")

    # 2. Latest entry (any date)
    try:
        response = supabase.table("port_arrivals").select("*").order("snapshot_date", desc=True).limit(1).execute()
        if response.data:
            latest = response.data[0]
            print(f"Último registro en DB: {latest['ship_name']} - {latest['snapshot_date']} - {latest['port_name']}")
        else:
            print("No hay registros en la tabla.")
    except Exception as e:
        print(f"Error fetching latest: {e}")

if __name__ == "__main__":
    check_status()
