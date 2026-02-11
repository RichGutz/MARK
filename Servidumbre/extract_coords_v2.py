import pdfplumber
import json
import re
import os

def clean_value(val):
    if val is None:
        return ""
    # Remove commas, spaces, and any non-numeric characters except the dot
    return re.sub(r'[^\d.]', '', val.replace(',', ''))

def extract_coordinates(pdf_path):
    coords = []
    print(f"Abriendo PDF: {pdf_path}")
    
    with pdfplumber.open(pdf_path) as pdf:
        print(f"Total de páginas: {len(pdf.pages)}")
        for i, page in enumerate(pdf.pages):
            print(f"--- Página {i+1} ---")
            
            # Check for images
            images = page.images
            print(f"Imágenes encontradas: {len(images)}")
            
            text = page.extract_text()
            if text:
                print(f"Texto detectado ({len(text)} caracteres):")
                print(text[:1000])
                
                lines = text.split('\n')
                for line in lines:
                    # Look for coordinates in text
                    parts = re.findall(r'([A-Z0-9]+)\s+([\d,.]+)\s+([\d,.]+)', line)
                    if parts:
                        for p in parts:
                            v, e, n = p
                            e_val = clean_value(e)
                            n_val = clean_value(n)
                            if len(e_val) >= 6 and len(n_val) >= 7:
                                try:
                                    coords.append({
                                        "vertice": v,
                                        "este": float(e_val),
                                        "norte": float(n_val)
                                    })
                                    print(f"Encontrado: {v} - {e_val} - {n_val}")
                                except ValueError:
                                    continue

            # If no coords yet, try table extraction with high precision
            if len(coords) < 1:
                tables = page.extract_tables()
                for table in tables:
                    for row in table:
                        if len(row) >= 3:
                            # Try to find numbers in row
                            clean_row = [clean_value(str(c)) for c in row if c]
                            num_parts = [c for c in clean_row if len(c) >= 6]
                            if len(num_parts) >= 2:
                                print(f"Fila de tabla potencial: {row}")
    
    return coords

if __name__ == "__main__":
    pdf_file = r"C:\Users\rguti\Petral.MARK\Servidumbre\SERVIDUMBRE DE PASO SAN NICOLAS.pdf"
    output_file = r"C:\Users\rguti\Petral.MARK\Servidumbre\coordenadas_servidumbre.json"
    
    if not os.path.exists(pdf_file):
        print(f"Error: No se encuentra el archivo {pdf_file}")
    else:
        results = extract_coordinates(pdf_file)
        
        print(f"Se encontraron {len(results)} coordenadas.")
        
        # Ensure we have exactly 42 or report if different
        if len(results) != 42:
            print(f"ADVERTENCIA: Se esperaban 42 coordenadas, pero se encontraron {len(results)}.")
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(results, f, indent=4, ensure_ascii=False)
        
        print(f"Resultados guardados en: {output_file}")
        
        # Display first few results for verification
        for c in results[:5]:
            print(f"Vértice {c['vertice']}: X={c['este']}, Y={c['norte']}")
