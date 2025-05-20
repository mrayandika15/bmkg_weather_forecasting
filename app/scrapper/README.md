# Wilayah Code Scraper

This scraper extracts wilayah (administrative area) codes from kodewilayah.id for Kota Bandung.

## Setup

1. Install Python dependencies:

```bash
pip install -r requirements.txt
```

2. Make sure you have Chrome browser installed on your system.

## Usage

Run the scraper:

```bash
python wilayah_scraper.py
```

The script will:

1. Visit https://kodewilayah.id/32.73
2. Extract all kecamatan (district) links
3. Visit each kecamatan page
4. Extract kelurahan (sub-district) codes and names
5. Save the data to `data/wilayah_codes.json`

## Output Format

The output JSON file will contain an array of objects with the following structure:

```json
[
  {
    "kecamatan": "Kecamatan Name",
    "kelurahan": "Kelurahan Name",
    "kode_wilayah": "32.73.XX.XXXX"
  }
]
```

## Notes

- The scraper runs in headless mode (no browser window)
- It includes error handling and logging
- Data is saved with UTF-8 encoding to properly handle Indonesian characters
