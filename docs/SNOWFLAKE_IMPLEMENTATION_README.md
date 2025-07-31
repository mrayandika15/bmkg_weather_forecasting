# **SNOWFLAKE SCHEMA IMPLEMENTATION README**

## **Overview**

Dokumen ini menjelaskan implementasi lengkap snowflake schema untuk sistem forecasting cuaca BMKG dengan optimasi performa menggunakan teknik table partition, indexing, subquery optimization, dan parallel query execution.

## **Struktur Database**

### **Schema: forecasting**

**Dimension Tables:**

- `dim_province` - Data provinsi
- `dim_city` - Data kota (foreign key ke province)
- `dim_district` - Data kecamatan (foreign key ke city)
- `dim_subdistrict` - Data kelurahan (foreign key ke district)
- `dim_weather` - Data kondisi cuaca

**Fact Table:**

- `fact_weather_forecast` - Data forecasting cuaca (partitioned table)

## **Langkah-langkah Implementasi**

### **1. Table Partition Implementation**

#### **A. Analisis Data Terlebih Dahulu**

Sebelum membuat partition, lakukan analisis data untuk menentukan range yang tepat:

```sql
-- Cek range nilai subdistrict_id yang ada di data
SELECT MIN(subdistrict_id) as min_subdistrict_id,
       MAX(subdistrict_id) as max_subdistrict_id,
       COUNT(DISTINCT subdistrict_id) as unique_subdistricts
FROM forecasting.fact_weather_forecast_backup;
```

#### **B. Backup Data Existing**

```sql
-- Backup data existing sebelum implementasi partition
CREATE TABLE forecasting.fact_weather_forecast_backup AS
SELECT * FROM forecasting.fact_weather_forecast;
```

#### **C. Buat Tabel Partitioned Baru**

```sql
CREATE TABLE forecasting.fact_weather_forecast_partitioned (
    forecast_id integer NOT NULL,
    subdistrict_id integer NOT NULL,
    utc_datetime timestamp without time zone NOT NULL,
    local_datetime timestamp without time zone NOT NULL,
    time_index character varying NOT NULL,
    analysis_date timestamp without time zone NOT NULL,
    weather_condition_id integer NOT NULL,
    wind_direction_degrees integer NOT NULL,
    wind_direction character varying NOT NULL,
    wind_direction_to character varying NOT NULL,
    wind_speed numeric NOT NULL,
    temperature numeric NOT NULL,
    cloud_cover_percentage integer NOT NULL,
    precipitation_probability numeric NOT NULL,
    humidity integer NOT NULL,
    visibility_meters integer NOT NULL,
    visibility_text character varying NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
) PARTITION BY RANGE (subdistrict_id);
```

#### **D. Buat Partisi Berdasarkan Range Data**

```sql
-- Partition untuk range subdistrict_id yang ada di data
-- Berdasarkan analisis data, subdistrict_id berkisar dari 1 hingga 20871
CREATE TABLE forecasting.fact_weather_forecast_sub_01
    PARTITION OF forecasting.fact_weather_forecast_partitioned
    FOR VALUES FROM (1) TO (5000);

CREATE TABLE forecasting.fact_weather_forecast_sub_02
    PARTITION OF forecasting.fact_weather_forecast_partitioned
    FOR VALUES FROM (5000) TO (10000);

CREATE TABLE forecasting.fact_weather_forecast_sub_03
    PARTITION OF forecasting.fact_weather_forecast_partitioned
    FOR VALUES FROM (10000) TO (15000);

CREATE TABLE forecasting.fact_weather_forecast_sub_04
    PARTITION OF forecasting.fact_weather_forecast_partitioned
    FOR VALUES FROM (15000) TO (20000);

CREATE TABLE forecasting.fact_weather_forecast_sub_05
    PARTITION OF forecasting.fact_weather_forecast_partitioned
    FOR VALUES FROM (20000) TO (25000);

-- Default partition untuk nilai yang tidak masuk ke range di atas
CREATE TABLE forecasting.fact_weather_forecast_sub_default
    PARTITION OF forecasting.fact_weather_forecast_partitioned
    DEFAULT;
```

#### **E. Migrasi Data**

```sql
-- Copy data dari tabel backup ke tabel partitioned
INSERT INTO forecasting.fact_weather_forecast_partitioned
SELECT * FROM forecasting.fact_weather_forecast_backup;
```

#### **F. Drop Tabel Lama dan Rename**

```sql
-- Drop tabel lama
DROP TABLE forecasting.fact_weather_forecast;

-- Rename tabel partitioned menjadi tabel utama
ALTER TABLE forecasting.fact_weather_forecast_partitioned
RENAME TO fact_weather_forecast;
```

#### **G. Tambahkan Constraints**

```sql
-- Tambahkan kembali primary key dan foreign key constraints
ALTER TABLE forecasting.fact_weather_forecast
ADD CONSTRAINT fact_weather_forecast_pkey PRIMARY KEY (forecast_id);

ALTER TABLE forecasting.fact_weather_forecast
ADD CONSTRAINT fact_weather_forecast_subdistrict_id_fkey
FOREIGN KEY (subdistrict_id) REFERENCES forecasting.dim_subdistrict(subdistrict_id);

ALTER TABLE forecasting.fact_weather_forecast
ADD CONSTRAINT fact_weather_forecast_weather_condition_id_fkey
FOREIGN KEY (weather_condition_id) REFERENCES forecasting.dim_weather(weather_condition_id);
```

### **2. Indexing Implementation**

#### **A. Index pada Fact Table**

```sql
-- Index pada kolom subdistrict_id (Foreign Key ke dim_subdistrict)
CREATE INDEX idx_fact_weather_forecast_subdistrict_id
ON forecasting.fact_weather_forecast (subdistrict_id);

-- Index pada kolom weather_condition_id (Foreign Key ke dim_weather)
CREATE INDEX idx_fact_weather_forecast_weather_condition_id
ON forecasting.fact_weather_forecast (weather_condition_id);

-- Index pada kolom utc_datetime untuk time-based queries
CREATE INDEX idx_fact_weather_forecast_utc_datetime
ON forecasting.fact_weather_forecast (utc_datetime);

-- Composite index untuk subdistrict dan datetime
CREATE INDEX idx_fact_weather_forecast_subdistrict_datetime
ON forecasting.fact_weather_forecast (subdistrict_id, utc_datetime);
```

#### **B. Index pada Dimension Tables**

```sql
-- Index pada dimension tables untuk snowflake joins
CREATE INDEX idx_dim_subdistrict_district_id
ON forecasting.dim_subdistrict (district_id);

CREATE INDEX idx_dim_district_city_id
ON forecasting.dim_district (city_id);

CREATE INDEX idx_dim_city_province_id
ON forecasting.dim_city (province_id);
```

### **3. Subquery and Indexing Optimization**

#### **A. Index untuk Subquery (Partition-Aware)**

```sql
-- Index pada kolom subdistrict_id untuk subquery filtering (memperhitungkan partition)
CREATE INDEX CONCURRENTLY idx_fact_weather_forecast_subdistrict_id_partitioned
ON forecasting.fact_weather_forecast (subdistrict_id, utc_datetime)
LOCAL;

-- Index pada kolom utc_datetime untuk time-based subquery (partition-aware)
CREATE INDEX CONCURRENTLY idx_fact_weather_forecast_datetime_partitioned
ON forecasting.fact_weather_forecast (utc_datetime, subdistrict_id)
LOCAL;

-- Index pada kolom temperature untuk aggregate subquery (partition-aware)
CREATE INDEX CONCURRENTLY idx_fact_weather_forecast_temperature_partitioned
ON forecasting.fact_weather_forecast (temperature, subdistrict_id)
LOCAL;
```

#### **B. Index pada Dimension Tables untuk Subquery**

```sql
-- Index pada dimension tables untuk snowflake subquery
CREATE INDEX CONCURRENTLY idx_dim_subdistrict_district_city_province
ON forecasting.dim_subdistrict (district_id, subdistrict_name);

CREATE INDEX CONCURRENTLY idx_dim_district_city_province
ON forecasting.dim_district (city_id, district_name);

CREATE INDEX CONCURRENTLY idx_dim_city_province
ON forecasting.dim_city (province_id, city_name);

CREATE INDEX CONCURRENTLY idx_dim_province_name
ON forecasting.dim_province (province_name);
```

### **4. Parallel Query Execution Configuration**

#### **A. Konfigurasi Parallel Workers**

```sql
-- Set jumlah parallel workers per gather operation
SET max_parallel_workers_per_gather = 4;

-- Set parallel tuple cost (biaya per tuple untuk parallel processing)
SET parallel_tuple_cost = 0.1;

-- Set parallel setup cost (biaya setup untuk parallel execution)
SET parallel_setup_cost = 1000.0;

-- Set work memory untuk setiap worker
SET work_mem = '256MB';

-- Set effective cache size untuk parallel operations
SET effective_cache_size = '1GB';

-- Set maintenance work memory untuk parallel operations
SET maintenance_work_mem = '256MB';
```

### **5. Query Optimization Examples**

#### **A. Query Dasar (Sebelum Optimasi)**

```sql
-- Query dasar untuk testing performa (parameter: LIMIT [volume_data])
EXPLAIN (ANALYZE, BUFFERS, VERBOSE)
SELECT
    p.province_name,
    c.city_name,
    d.district_name,
    w.temperature,
    w.humidity,
    w.wind_speed,
    w.utc_datetime,
    w.precipitation_probability,
    w.visibility_meters
FROM forecasting.fact_weather_forecast w
JOIN forecasting.dim_subdistrict s ON w.subdistrict_id = s.subdistrict_id
JOIN forecasting.dim_district d ON s.district_id = d.district_id
JOIN forecasting.dim_city c ON d.city_id = c.city_id
JOIN forecasting.dim_province p ON c.province_id = p.province_id
WHERE w.utc_datetime >= '2025-07-23'
  AND w.utc_datetime < '2025-07-27'
  AND w.temperature BETWEEN 15 AND 35
  AND w.humidity BETWEEN 30 AND 90
ORDER BY w.temperature DESC, w.humidity DESC, w.utc_datetime DESC
LIMIT [volume_data]; -- Parameter: 100, 1000, 10000, 100000, 150000
```

#### **B. Query Optimasi (Dengan Subquery, Indexing, dan Partition Pruning)**

```sql
-- Query menggunakan EXISTS dengan partition pruning (parameter: LIMIT [volume_data])
EXPLAIN (ANALYZE, BUFFERS, VERBOSE)
SELECT
    p.province_name,
    c.city_name,
    d.district_name,
    w.temperature,
    w.humidity,
    w.wind_speed,
    w.utc_datetime,
    w.precipitation_probability,
    w.visibility_meters
FROM forecasting.fact_weather_forecast w
JOIN forecasting.dim_subdistrict s ON w.subdistrict_id = s.subdistrict_id
JOIN forecasting.dim_district d ON s.district_id = d.district_id
JOIN forecasting.dim_city c ON d.city_id = c.city_id
JOIN forecasting.dim_province p ON c.province_id = p.province_id
WHERE w.subdistrict_id BETWEEN 1 AND 5000 -- Partition pruning untuk subdistrict tertentu
  AND EXISTS (
    SELECT 1
    FROM forecasting.dim_province dp
    WHERE dp.province_id = p.province_id
    AND dp.province_name = 'Jawa Barat'
  )
  AND w.utc_datetime >= '2025-07-23'
  AND w.utc_datetime < '2025-07-27'
  AND w.temperature BETWEEN 15 AND 35
  AND w.humidity BETWEEN 30 AND 90
ORDER BY w.temperature DESC, w.humidity DESC, w.utc_datetime DESC
LIMIT [volume_data]; -- Parameter: 100, 1000, 10000, 100000, 150000
```

## **Troubleshooting**

### **Error: "no partition of relation found for row"**

**Penyebab:** Data dengan subdistrict_id tertentu tidak masuk ke dalam range partisi yang didefinisikan.

**Solusi:**

1. Analisis data terlebih dahulu untuk mengetahui range nilai yang ada
2. Buat partisi dengan range yang mencakup semua nilai data
3. Gunakan DEFAULT partition untuk nilai yang tidak masuk ke range tertentu
4. Pastikan semua data dapat masuk ke dalam partisi yang tersedia

### **Verifikasi Implementasi**

```sql
-- Cek daftar tabel partisi yang telah dibuat
SELECT tablename
FROM pg_tables
WHERE schemaname = 'forecasting'
  AND tablename LIKE 'fact_weather_forecast_sub_%';

-- Cek index yang telah dibuat
SELECT indexname, indexdef
FROM pg_indexes
WHERE schemaname = 'forecasting'
  AND tablename = 'fact_weather_forecast';

-- Cek konfigurasi parallel yang aktif
SELECT name, setting, unit, context
FROM pg_settings
WHERE name LIKE '%parallel%'
ORDER BY name;
```

## **Performance Metrics**

### **Expected Performance Improvement**

- **Table Partition:** 20-40% improvement untuk large datasets
- **Indexing:** 30-50% improvement untuk query dengan WHERE clause
- **Subquery Optimization:** 20-35% improvement untuk complex filtering
- **Parallel Execution:** 40-60% improvement untuk large datasets
- **Combined Optimization:** 48-64% total improvement

### **Monitoring Query Performance**

```sql
-- Monitor query performance dengan EXPLAIN ANALYZE
EXPLAIN (ANALYZE, BUFFERS, VERBOSE) [your_query_here];

-- Cek penggunaan index
SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes
WHERE schemaname = 'forecasting'
ORDER BY idx_scan DESC;
```

## **Best Practices**

1. **Selalu analisis data terlebih dahulu** sebelum membuat partition
2. **Gunakan DEFAULT partition** untuk menangani nilai yang tidak terduga
3. **Monitor query performance** secara berkala
4. **Update statistics** setelah perubahan data besar
5. **Backup data** sebelum implementasi perubahan besar
6. **Test di environment development** sebelum production

## **References**

- [PostgreSQL Table Partitioning](https://www.postgresql.org/docs/current/ddl-partitioning.html)
- [PostgreSQL Parallel Query](https://www.postgresql.org/docs/current/parallel-query.html)
- [PostgreSQL Indexing](https://www.postgresql.org/docs/current/indexes.html)
- [Snowflake Schema Design](https://en.wikipedia.org/wiki/Snowflake_schema)
