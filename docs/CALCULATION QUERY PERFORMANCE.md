# **STAR SCHEMA**

## **1. Indexing**

### **Schema:**

```
+--------------------------+         +-------------------+
|   DIM_LOCATION           |         |   DIM_WEATHER     |
|--------------------------|         |-------------------|
| location_id (PK)         |         | weather_id (PK)   |
| city_name                |         | weather_type      |
| ...                      |         | ...               |
+-----------||-------------+         +---------||--------+
            ||                                 ||
            ||                                 ||
            ||                                 ||
            ||                                 ||
+-----------||---------------------------------||--------+
|           FACT_WEATHER_FORECAST                        |
|--------------------------------------------------------|
| id (PK)                                                |
| location_id (FK)  <-----------------------------+      |
| weather_id (FK)   <------------------------+  |        |
| forecast_date                                 |        |
| ...                                           |        |
| [IDX_location_id]  <--- Index dibuat di sini  |        |
| [IDX_weather_id]   <--- Index dibuat di sini  |        |
+-------------------------------------------------------+
```

### **Query Indexing:**

```sql
-- Index pada kolom location_id (Foreign Key ke dim_location)
CREATE INDEX idx_fact_weather_forecast_location_id
ON forecasting.fact_weather_forecast (location_id);

-- Index pada kolom weather_condition_id (Foreign Key ke dim_weather)
CREATE INDEX idx_fact_weather_forecast_weather_condition_id
ON forecasting.fact_weather_forecast (weather_condition_id);
```

### **Result Indexing:**

![[Pasted image 20250726143131.png]]

---

## **2. Table Partition**

### **Perhitungan Coefficient of Variation (CV)**

#### **Pemilihan Kolom Kandidat Partisi:**

**Kolom location_id dan utc_datetime dipilih sebagai kandidat partisi berdasarkan kriteria berikut:**

1. **Kolom location_id:**

   - **Frekuensi penggunaan dalam query**: Sering digunakan dalam operasi JOIN dengan tabel dim_location
   - **Pola akses data**: Query sering membatasi data berdasarkan lokasi tertentu
   - **Distribusi kategori**: Memiliki nilai kategori yang terbatas dan dapat diprediksi
   - **Kemudahan pembagian**: Mudah dibagi menjadi rentang nilai yang seimbang

2. **Kolom utc_datetime:**
   - **Frekuensi penggunaan dalam query**: Sering digunakan dalam filter waktu (WHERE utc_datetime BETWEEN...)
   - **Pola akses data**: Query sering mengakses data berdasarkan rentang waktu tertentu
   - **Karakteristik time-series**: Data cuaca bersifat time-series dengan pola temporal yang jelas
   - **Kemudahan pembagian**: Mudah dibagi menjadi partisi berdasarkan bulan, tahun, atau periode waktu

**Kedua kolom ini memenuhi kriteria kolom kandidat partisi yang ideal karena sering digunakan dalam operasi filtering dan memiliki pola distribusi yang dapat dianalisis menggunakan Coefficient of Variation.**

#### **Query CV untuk Kolom Kandidat:**

```sql
-- CV untuk kolom waktu (per hari) - hanya output CV
SELECT
    (STDDEV(daily_count) / AVG(daily_count)) * 100 AS cv_utc_datetime
FROM (
    SELECT DATE(utc_datetime) as date, COUNT(*) as daily_count
    FROM forecasting.fact_weather_forecast
    GROUP BY DATE(utc_datetime)
) daily_stats;

-- CV untuk kolom location_id - hanya output CV
SELECT
    (STDDEV(cnt) / AVG(cnt)) * 100 AS cv_location_id
FROM (
    SELECT location_id, COUNT(*) AS cnt
    FROM forecasting.fact_weather_forecast
    GROUP BY location_id
) sub;
```

#### **Hasil Perhitungan CV:**

**CV untuk kolom location_id:**

```
cv_location_id: 12.43997178386925316800%
```

**CV untuk kolom utc_datetime:**

```
cv_utc_datetime: 47.14103936084814814800%
```

**Interpretasi:**

- **CV location_id = 12.44%** menunjukkan distribusi data yang **merata** pada kolom location_id
- **CV utc_datetime = 47.14%** menunjukkan distribusi data yang **tidak merata** pada kolom utc_datetime
- Nilai CV < 15% termasuk dalam kategori variasi data rendah (homogen)
- Nilai CV > 30% termasuk dalam kategori variasi data tinggi (heterogen)

**Kesimpulan Pemilihan Kolom Partisi:**
Berdasarkan hasil perhitungan CV, **kolom location_id dipilih** sebagai basis table partition karena:

1. Memiliki CV terendah (12.44% vs 47.14%)
2. Distribusi data lebih merata dan seimbang
3. Sesuai dengan teori Coefficient of Variation yang menyatakan kolom dengan CV terendah memiliki sebaran data paling berimbang
4. Akan menghasilkan partisi yang lebih efisien dan seimbang

### **Implementasi Table Partition**

Berdasarkan hasil CV yang menunjukkan distribusi data merata pada location_id, implementasi table partition:

#### **Analisis Data Existing:**

Dari hasil query, ditemukan bahwa:

- Total location_id: 777 lokasi berbeda
- Format location_id: `32.XX.XX.XXXX` (kode wilayah BMKG)
- Distribusi data per location_id: 17-31 baris per lokasi
- Mayoritas location_id memiliki 20 baris data

#### **Strategi Partition Berdasarkan Location_id:**

```sql
-- Ubah tabel menjadi partitioned table
ALTER TABLE forecasting.fact_weather_forecast
PARTITION BY RANGE (location_id);

-- Partisi berdasarkan kode kabupaten (32.XX)
CREATE TABLE forecasting.fact_weather_forecast_kab_01
    PARTITION OF forecasting.fact_weather_forecast
    FOR VALUES FROM ('32.01.00.0000') TO ('32.02.00.0000');

CREATE TABLE forecasting.fact_weather_forecast_kab_02
    PARTITION OF forecasting.fact_weather_forecast
    FOR VALUES FROM ('32.02.00.0000') TO ('32.03.00.0000');

CREATE TABLE forecasting.fact_weather_forecast_kab_04
    PARTITION OF forecasting.fact_weather_forecast
    FOR VALUES FROM ('32.04.00.0000') TO ('32.05.00.0000');

CREATE TABLE forecasting.fact_weather_forecast_kab_10
    PARTITION OF forecasting.fact_weather_forecast
    FOR VALUES FROM ('32.10.00.0000') TO ('32.11.00.0000');
```

### **Manfaat Implementasi:**

- **Query Performance**: Query hanya membaca partisi yang relevan
- **Maintenance Efficiency**: Operasi VACUUM dan ANALYZE dapat dilakukan per partisi
- **Storage Management**: Data lama dapat di-archive dengan mudah
- **Parallel Processing**: Query dapat diproses secara paralel pada multiple partisi
