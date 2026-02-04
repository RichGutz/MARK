import markdown
import os
import sys
import re

def generate_toc(md_content):
    toc_html = []
    lines = md_content.split('\n')
    # Regex to capture # Header
    header_re = re.compile(r'^(#+)\s+(.*)')
    
    # We need to inject IDs into the markdown or just assume we can link standard way
    # But markdown headers don't have IDs by default unless enabled.
    # We will use the 'toc' extension of python-markdown which handles this!
    # But we want to extract it to place it manually.
    
    # Alternative: Manually parse and replace.
    # Let's use the 'toc' extension feature to generate the TOC HTML separately if possible?
    # Or just construct a simple one.
    
    clean_lines = []
    toc_items = []
    
    slug_counts = {}

    for line in lines:
        match = header_re.match(line)
        if match:
            level = len(match.group(1))
            text = match.group(2).strip()
            
            # Simple slugify
            slug = text.lower().replace(' ', '-')
            slug = re.sub(r'[^a-z0-9-]', '', slug)
            
            if slug in slug_counts:
                slug_counts[slug] += 1
                slug = f"{slug}-{slug_counts[slug]}"
            else:
                slug_counts[slug] = 0
            
            # Add anchor to line (Python Markdown 'attr_list' style or standard HTML injection)
            # We'll just insert HTML anchor
            # line = f'<a id="{slug}"></a>\n{line}' # Formatting might be weird with H tags
            # Actually better: use the { #slug } syntax if attr_list is on, OR just standard markdown extension.
            
            # Let's rely on `markdown.extensions.toc`.
            # We will use it in the conversion step.
            pass
            
    return "" # Placeholder, we will use the extension

def build(md_path, template_path, output_path):
    if not os.path.exists(md_path) or not os.path.exists(template_path):
        print("Files missing")
        return

    with open(md_path, 'r', encoding='utf-8') as f:
        md_text = f.read()

    # Create an instance of Markdown with TOC extension
    # permalink=True adds links to headers, but we want a separate TOC.
    # 'toc' extension looks for [TOC] marker. We can use that!
    
    md = markdown.Markdown(extensions=['toc', 'tables', 'fenced_code', 'attr_list'])
    html_body = md.convert(md_text)
    
    # Extract Title (First H1)
    title_match = re.search(r'<h1>(.*?)</h1>', html_body)
    title = title_match.group(1) if title_match else "Infomemo"
    
    # Generate TOC HTML from the extension (it stores it)
    # The 'toc' extension attribute is available after convert()
    toc_html = md.toc 
    
    # Read Template
    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()

    # Fill Template
    # Need custom parsing for title/subtitle if not in MD
    final_html = template.replace('{{CONTENT}}', html_body)
    final_html = final_html.replace('{{TOC}}', toc_html)
    final_html = final_html.replace('{{TITLE}}', "INFOMEMO") # Hardcoded or extracted
    final_html = final_html.replace('{{SUBTITLE}}', title)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_html)
    
    print(f"Built {output_path}")

if __name__ == "__main__":
    base = r"C:\Users\rguti\Petral.MARK\Infomemo"
    build(
        os.path.join(base, "content_extracted.md"),
        os.path.join(base, "Infomemo_Template.html"),
        os.path.join(base, "Infomemo_Recreated.html")
    )
