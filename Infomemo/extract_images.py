import docx
import os
import sys

def extract_images(docx_path, output_dir):
    if not os.path.exists(docx_path):
        print(f"Error: File not found {docx_path}")
        return
        
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    doc = docx.Document(docx_path)
    
    count = 0
    for rel in doc.part.rels.values():
        if "image" in rel.target_ref:
            img_ext = rel.target_ref.split('.')[-1]
            img_data = rel.target_part.blob
            
            # Simple naming: image_1.png, image_2.jpg etc.
            # Ideally we'd map to position, but bulk extraction is a good start
            count += 1
            img_name = f"image_{count}.{img_ext}"
            img_path = os.path.join(output_dir, img_name)
            
            with open(img_path, "wb") as f:
                f.write(img_data)
                
            print(f"Extracted {img_path}")

    print(f"Total images extracted: {count}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        docx_path_arg = sys.argv[1]
        out = "assets" 
        if len(sys.argv) > 2:
            out = sys.argv[2]
        extract_images(docx_path_arg, out)
    else:
        print("Usage: python extract_images.py <docx> [output_dir]")
