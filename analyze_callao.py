import os
from dotenv import load_dotenv
from supabase import create_client, Client
import json

load_dotenv(r"C:\Users\rguti\Petral.MARK\Dashboard_Puertos\.env")
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

def analyze_callao():
    try:
        # 1. Tipos de Buque únicos en Callao
        res_types = supabase.table("port_arrivals").select("ship_type").eq("port_name", "Callao").execute()
        ship_types = sorted(list(set([r['ship_type'] for r in res_types.data if r['ship_type']])))
        
        # 2. Terminales únicos en Callao
        res_terms = supabase.table("port_arrivals").select("terminal").eq("port_name", "Callao").execute()
        terminals = sorted(list(set([r['terminal'] for r in res_terms.data if r['terminal']])))
        
        print("\n--- CATEGORÍAS EN CALLAO ---")
        print("\nTIPOS DE BUQUE:")
        for t in ship_types: print(f" - {t}")
        
        print("\nTERMINALES / MUELLES:")
        for term in terminals: print(f" - {term}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    analyze_callao()
