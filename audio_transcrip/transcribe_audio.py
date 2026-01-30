"""
Script para transcribir archivos de audio usando Google Gemini API
Uso: python transcribe_audio.py <ruta_al_archivo_audio>
"""

import google.generativeai as genai
import sys
import os
from pathlib import Path

def transcribe_audio(audio_path):
    """
    Transcribe un archivo de audio usando Gemini API
    
    Args:
        audio_path: Ruta al archivo de audio (mp3, mp4, wav, etc.)
    
    Returns:
        str: Transcripción del audio
    """
    # Verificar que el archivo existe
    if not os.path.exists(audio_path):
        raise FileNotFoundError(f"No se encontró el archivo: {audio_path}")
    
    print(f"📁 Archivo: {audio_path}")
    print(f"📊 Tamaño: {os.path.getsize(audio_path) / 1024 / 1024:.2f} MB")
    print("\n🔄 Subiendo archivo a Gemini...")
    
    # Subir el archivo a Gemini
    audio_file = genai.upload_file(path=audio_path)
    print(f"✅ Archivo subido: {audio_file.name}")
    
    # Configurar el modelo
    model = genai.GenerativeModel("gemini-2.5-flash")
    
    print("\n🎙️ Transcribiendo audio...")
    
    # Solicitar transcripción
    prompt = """
    Por favor transcribe este audio de manera literal y completa.
    Incluye todo lo que se dice, incluyendo pausas significativas si las hay.
    Formatea la transcripción de manera clara y legible.
    """
    
    response = model.generate_content([prompt, audio_file])
    
    print("✅ Transcripción completada\n")
    print("=" * 80)
    print(response.text)
    print("=" * 80)
    
    # Guardar transcripción en archivo
    output_path = f"{audio_path}_transcription.txt"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(response.text)
    
    print(f"\n💾 Transcripción guardada en: {output_path}")
    
    return response.text

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("❌ Error: Debes proporcionar la ruta del archivo de audio")
        print("\nUso: python transcribe_audio.py <ruta_al_archivo_audio>")
        print("\nEjemplo:")
        print('  python transcribe_audio.py "WhatsApp Audio 2026-01-17.mp4"')
        sys.exit(1)
    
    audio_path = sys.argv[1]
    
    try:
        transcribe_audio(audio_path)
    except Exception as e:
        print(f"\n❌ Error durante la transcripción: {e}")
        sys.exit(1)
