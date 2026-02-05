import os
import shutil

def create_deploy_package():
    base_dir = r"C:\Users\rguti\Petral.MARK"
    deploy_dir = os.path.join(base_dir, "Deploy_Package")
    
    # Clean recreate
    if os.path.exists(deploy_dir):
        shutil.rmtree(deploy_dir)
    os.makedirs(deploy_dir)
    
    # 1. Root Files (GeekSoft)
    src_portal = os.path.join(base_dir, "GeekSoft_Portal")
    shutil.copy(os.path.join(src_portal, "index.html"), deploy_dir)
    shutil.copy(os.path.join(src_portal, "logo_geek.png"), deploy_dir)
    
    # 2. Sub-app (Petral)
    src_dashboard = os.path.join(base_dir, "Dashboard_Puertos")
    dst_dashboard = os.path.join(deploy_dir, "petral")
    shutil.copytree(src_dashboard, dst_dashboard)
    
    # 3. Zip it
    zip_name = os.path.join(base_dir, "Petral_Web_Ready")
    shutil.make_archive(zip_name, 'zip', deploy_dir)
    print(f"Created: {zip_name}.zip")

if __name__ == "__main__":
    create_deploy_package()
