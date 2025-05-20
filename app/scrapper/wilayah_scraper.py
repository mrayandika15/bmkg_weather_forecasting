from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
import time
import os
import platform

class WilayahScraper:
    def __init__(self):
        self.base_url = "https://kodewilayah.id/32"  # Jawa Barat
        self.data = {"locations": []}
        self.setup_driver()

    def setup_driver(self):
        options = Options()
        options.add_argument('--headless=new')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        
        # For Mac ARM64
        if platform.system() == "Darwin" and platform.machine() == "arm64":
            service = Service('/opt/homebrew/bin/chromedriver')
        else:
            service = Service()
            
        self.driver = webdriver.Chrome(service=service, options=options)

    def get_kabupaten_links(self):
        """Get all kabupaten/kota links from Jawa Barat page"""
        self.driver.get(self.base_url)
        wait = WebDriverWait(self.driver, 10)
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "a[href*='32.']")))
        
        # Find all kabupaten/kota links
        kabupaten_links = self.driver.find_elements(By.CSS_SELECTOR, "a[href*='32.']")
        return [(link.text, link.get_attribute('href')) for link in kabupaten_links]

    def get_kecamatan_links(self, kabupaten_url):
        """Get all kecamatan links from kabupaten/kota page"""
        self.driver.get(kabupaten_url)
        wait = WebDriverWait(self.driver, 10)
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "a[href*='32.']")))
        
        # Find all kecamatan links
        kecamatan_links = self.driver.find_elements(By.CSS_SELECTOR, "a[href*='32.']")
        return [(link.text, link.get_attribute('href')) for link in kecamatan_links]

    def scrape_kelurahan(self, kabupaten_name, kecamatan_name, kecamatan_url):
        self.driver.get(kecamatan_url)
        wait = WebDriverWait(self.driver, 10)
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "table tbody tr")))
        
        # Find all kelurahan rows
        kelurahan_rows = self.driver.find_elements(By.CSS_SELECTOR, "table tbody tr")
        
        for row in kelurahan_rows:
            try:
                cells = row.find_elements(By.TAG_NAME, "td")
                if len(cells) >= 2:
                    code = cells[0].text.strip()
                    name = cells[1].text.strip()
                    
                    # Remove prefixes if present
                    name = name.replace("Kelurahan ", "").replace("Desa ", "")
                    kecamatan_name = kecamatan_name.replace("Kecamatan ", "")
                    kabupaten_name = kabupaten_name.replace("Kabupaten ", "").replace("Kota ", "")
                    
                    self.data["locations"].append({
                        "kabupaten": kabupaten_name,
                        "kecamatan": kecamatan_name,
                        "kelurahan": name,
                        "api_url": f"https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4={code}"
                    })
            except Exception as e:
                print(f"Error processing row: {e}")

    def scrape_all(self):
        try:
            # Get all kabupaten/kota links
            kabupaten_links = self.get_kabupaten_links()
            print(f"Found {len(kabupaten_links)} kabupaten/kota links")
            
            for kabupaten_name, kabupaten_url in kabupaten_links:
                print(f"\nProcessing {kabupaten_name}...")
                
                # Get all kecamatan links for this kabupaten
                kecamatan_links = self.get_kecamatan_links(kabupaten_url)
                print(f"Found {len(kecamatan_links)} kecamatan links in {kabupaten_name}")
                
                for kecamatan_name, kecamatan_url in kecamatan_links:
                    print(f"Scraping {kecamatan_name}...")
                    self.scrape_kelurahan(kabupaten_name, kecamatan_name, kecamatan_url)
                
            self.save_data()
            
        except Exception as e:
            print(f"Error during scraping: {e}")
        finally:
            self.driver.quit()

    def save_data(self):
        output_dir = os.path.join(os.path.dirname(__file__), "data")
        os.makedirs(output_dir, exist_ok=True)
        
        output_file = os.path.join(output_dir, "wilayah_codes.json")
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(self.data, f, indent=2, ensure_ascii=False)
        
        print(f"\nData saved to {output_file}")
        print(f"Total locations scraped: {len(self.data['locations'])}")

if __name__ == "__main__":
    scraper = WilayahScraper()
    scraper.scrape_all() 