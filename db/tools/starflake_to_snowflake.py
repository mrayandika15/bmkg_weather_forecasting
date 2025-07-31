import pandas as pd
import os
import psycopg2
from sqlalchemy import create_engine

# Path ke file CSV starflake (denormalized)
FACT_CSV = 'input/fact_weather_forecast_202507302201_bandung_data_new.csv'  # Data utama
LOCATION_CSV = 'input/dim_location.csv'  # Data referensi lokasi
OUTPUT_DIR = 'output_snowflake/'

# Database connection (sesuaikan dengan konfigurasi Anda)
DB_CONFIG = {
    'host': '103.172.204.175',
    'database': 'bmkg_forecasting_snowflake',
    'user': 'root',
    'password': 'mijilno123'
}

os.makedirs(OUTPUT_DIR, exist_ok=True)

def parse_location_id(row):
    # Format: {province}.{city}.{district}.{subdistrict}
    parts = row['location_id'].split('.')
    return pd.Series({
        'province_code': parts[0],
        'city_code': parts[1],
        'district_code': parts[2],
        'subdistrict_code': parts[3],
    })

def get_existing_subdistrict_mapping():
    """Get existing subdistrict mapping from database"""
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        query = "SELECT subdistrict_code, subdistrict_id FROM forecasting.dim_subdistrict"
        df = pd.read_sql_query(query, conn)
        conn.close()
        return df
    except Exception as e:
        print(f"Error connecting to database: {e}")
        return pd.DataFrame()

def main():
    # 1. Load data
    fact = pd.read_csv(FACT_CSV)
    loc = pd.read_csv(LOCATION_CSV)

    print(f"Total fact data: {len(fact)}")
    print(f"Total location reference: {len(loc)}")

    # 2. Parse location_id menjadi kode-kode
    loc_codes = loc.apply(parse_location_id, axis=1)
    loc = pd.concat([loc, loc_codes], axis=1)

    # 3. Build dim_province
    dim_province = loc[['province_code', 'province_name']].drop_duplicates().reset_index(drop=True)
    dim_province = dim_province[['province_code', 'province_name']]
    dim_province.to_csv(os.path.join(OUTPUT_DIR, 'dim_province.csv'), index=False)

    # 4. Build dim_city
    city = loc[['province_code', 'city_code', 'city_name']].drop_duplicates().reset_index(drop=True)
    dim_city = city[['city_code', 'city_name', 'province_code']]
    dim_city.to_csv(os.path.join(OUTPUT_DIR, 'dim_city.csv'), index=False)

    # 5. Build dim_district
    district = loc[['province_code', 'city_code', 'district_code', 'district_name']].drop_duplicates().reset_index(drop=True)
    dim_district = district[['district_code', 'district_name', 'city_code']]
    dim_district.to_csv(os.path.join(OUTPUT_DIR, 'dim_district.csv'), index=False)

    # 6. Build dim_subdistrict
    subdistrict = loc[['province_code', 'city_code', 'district_code', 'subdistrict_code', 'subdistrict_name', 'latitude', 'longitude', 'timezone']].drop_duplicates().reset_index(drop=True)
    dim_subdistrict = subdistrict[['subdistrict_code', 'subdistrict_name', 'district_code', 'latitude', 'longitude', 'timezone']]
    dim_subdistrict.to_csv(os.path.join(OUTPUT_DIR, 'dim_subdistrict.csv'), index=False)

    # 7. Build fact_weather_forecast dengan subdistrict_id yang sudah ada
    # Map subdistrict_code ke subdistrict_id dari database
    fact = fact.merge(loc[['location_id', 'subdistrict_code']], on='location_id', how='left')

    # Debug: cek data yang tidak match dengan referensi lokasi
    missing_in_ref = fact[fact['subdistrict_code'].isna()]
    if not missing_in_ref.empty:
        print(f"Warning: {len(missing_in_ref)} rows have location_id not found in reference file")
        print("Sample missing location_ids:", missing_in_ref['location_id'].unique()[:10])

    # Ambil mapping yang sudah ada di database
    existing_mapping = get_existing_subdistrict_mapping()

    if not existing_mapping.empty:
        print(f"Found {len(existing_mapping)} subdistricts in database")

        # Gabungkan fact dengan mapping yang sudah ada
        fact = fact.merge(existing_mapping, on='subdistrict_code', how='left')

        # Cek data yang tidak match
        missing_data = fact[fact['subdistrict_id'].isna()]
        if not missing_data.empty:
            print(f"Warning: {len(missing_data)} rows have subdistrict_code not found in database")
            print("Missing subdistrict_codes:", missing_data['subdistrict_code'].unique())

        # Filter data yang valid
        valid_data = fact[fact['subdistrict_id'].notna()]
        print(f"Valid data for export: {len(valid_data)} rows")

        fact_cols = [
            'subdistrict_id', 'utc_datetime', 'local_datetime', 'time_index', 'analysis_date',
            'weather_condition_id', 'wind_direction_degrees', 'wind_direction', 'wind_direction_to',
            'wind_speed', 'temperature', 'cloud_cover_percentage', 'precipitation_probability',
            'humidity', 'visibility_meters', 'visibility_text'
        ]
        fact_final = valid_data[fact_cols]
        fact_final.to_csv(os.path.join(OUTPUT_DIR, 'fact_weather_forecast.csv'), index=False)

        print(f"Exported {len(fact_final)} rows to fact_weather_forecast.csv")
    else:
        print("Error: Could not get subdistrict mapping from database")

if __name__ == '__main__':
    main()
