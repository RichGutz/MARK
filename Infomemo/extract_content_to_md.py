import docx
import os
import sys
import re

def extract_content(docx_path, output_md_path):
    if not os.path.exists(docx_path):
        print(f"Error: File not found {docx_path}")
        return

    doc = docx.Document(docx_path)
    md_lines = []
    
    # Title extraction (heuristic: first non-empty mostly)
    # We will iterate and try to map styles to MD
    
    for para in doc.paragraphs:
        text = para.text.strip()
        if not text:
            continue
            
        style = para.style.name
        
        # Simple mapping
        if 'Title' in style:
            md_lines.append(f"# {text}\n")
        elif 'Heading 1' in style:
            md_lines.append(f"\n# {text}\n")
        elif 'Heading 2' in style:
            md_lines.append(f"\n## {text}\n")
        elif 'Heading 3' in style:
            md_lines.append(f"\n### {text}\n")
        elif 'List' in style:
            md_lines.append(f"- {text}")
        else:
            md_lines.append(f"{text}\n")
            
    with open(output_md_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(md_lines))
    
    print(f"Extracted content to {output_md_path}")

if __name__ == "__main__":
    if len(sys.argv) > 2:
        extract_content(sys.argv[1], sys.argv[2])
    else:
        print("Usage: python extract_content.py <docx_path> <output_md_path>")
