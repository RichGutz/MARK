import docx
import os

def extract_text_from_docx(file_path):
    doc = docx.Document(file_path)
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    return '\n'.join(full_text)

base_path = r'C:\Users\rguti\Petral.MARK\Infomemo.Petral\Documentos Research\Sandwell'
file1 = os.path.join(base_path, 'scan2_merged-pages-1.docx')
file2 = os.path.join(base_path, 'scan2_merged-pages-2.docx')

text1 = extract_text_from_docx(file1)
text2 = extract_text_from_docx(file2)

output_file = os.path.join(base_path, 'extracted_text_raw.md')
with open(output_file, 'w', encoding='utf-8') as f:
    f.write("# Extracto RAW OCR - Sandwell\n\n")
    f.write("## PARTE 1\n\n")
    f.write(text1)
    f.write("\n\n## PARTE 2\n\n")
    f.write(text2)

print(f"Texto extraído y guardado en: {output_file}")
