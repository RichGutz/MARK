@echo off
cd /d "C:\Users\rguti\Petral.MARK\Dashboard_Puertos"

echo [%DATE% %TIME%] Starting Daily Port Scraper... >> scraper_log.txt

echo Running Scraper...
python scraper_apu.py >> scraper_log.txt 2>&1

echo Syncing to Supabase...
python sync_supabase.py >> scraper_log.txt 2>&1

echo Done. >> scraper_log.txt
timeout /t 5
