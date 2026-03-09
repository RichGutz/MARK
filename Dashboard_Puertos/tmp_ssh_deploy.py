import paramiko
import sys
import os

# Credenciales (from CLAVES_PRIVADAS.txt)
host = "91.108.125.253"
user = "root"
password = "N4pee0BVZsL@r6dJz4R+"
command = "cd /files_repo && git checkout main && git fetch --all && git reset --hard origin/main && sh update.sh"

def run_ssh():
    print(f"🚀 Conectando a {host}...")
    try:
        client = paramiko.SSHClient()
        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        client.connect(host, username=user, password=password, timeout=10)
        
        print(f"🛰️ Ejecutando: {command}")
        stdin, stdout, stderr = client.exec_command(command)
        
        while True:
            line = stdout.readline()
            if not line: break
            print(f"   [VPS] {line.strip()}")
            
        err = stderr.read().decode()
        if err: print(f"⚠️ ERRORES:\n{err}")
        
        client.close()
        print("✅ Despliegue completado y conexión cerrada.")
    except Exception as e:
        print(f"❌ Error en la ejecución SSH: {e}")
        sys.exit(1)

if __name__ == "__main__":
    run_ssh()
