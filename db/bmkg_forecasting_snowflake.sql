-- 1. Drop the schema and all its objects (tables, views, etc.)
DROP SCHEMA IF EXISTS forecasting CASCADE;

-- 2. Create the schema again
CREATE SCHEMA IF NOT EXISTS forecasting;

-- 3. Create dimension tables

-- Table: dim_province
CREATE TABLE IF NOT EXISTS forecasting.dim_province (
    province_id VARCHAR(10) PRIMARY KEY,  -- Using adm1 code as ID
    province_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: dim_city
CREATE TABLE IF NOT EXISTS forecasting.dim_city (
    city_id VARCHAR(10) PRIMARY KEY,  -- Using adm2 code as ID
    city_name VARCHAR(100) NOT NULL,
    province_id VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (province_id) REFERENCES forecasting.dim_province(province_id)
);

-- Table: dim_district
CREATE TABLE IF NOT EXISTS forecasting.dim_district (
    district_id VARCHAR(10) PRIMARY KEY,  -- Using adm3 code as ID
    district_name VARCHAR(100) NOT NULL,
    city_id VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (city_id) REFERENCES forecasting.dim_city(city_id)
);

-- Table: dim_subdistrict
CREATE TABLE IF NOT EXISTS forecasting.dim_subdistrict (
    subdistrict_id VARCHAR(10) PRIMARY KEY,  -- Using adm4 code as ID
    subdistrict_name VARCHAR(100) NOT NULL,
    district_id VARCHAR(10) NOT NULL,
    latitude DECIMAL(10,8) NOT NULL,
    longitude DECIMAL(11,8) NOT NULL,
    timezone VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (district_id) REFERENCES forecasting.dim_district(district_id)
);

-- Table: dim_weather_condition
CREATE TABLE IF NOT EXISTS forecasting.dim_weather_condition (
    weather_condition_id SERIAL PRIMARY KEY,
    description_id VARCHAR(100) NOT NULL,
    description_en VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create fact table

-- Table: fact_weather_forecast
CREATE TABLE IF NOT EXISTS forecasting.fact_weather_forecast (
    forecast_id SERIAL PRIMARY KEY,
    subdistrict_id VARCHAR(10) NOT NULL,
    utc_datetime TIMESTAMP NOT NULL,
    local_datetime TIMESTAMP NOT NULL,
    time_index VARCHAR(10) NOT NULL,
    analysis_date TIMESTAMP NOT NULL,
    weather_condition_id INT NOT NULL,
    wind_direction_degrees INT NOT NULL,
    wind_direction VARCHAR(10) NOT NULL,
    wind_direction_to VARCHAR(10) NOT NULL,
    wind_speed DECIMAL(5,2) NOT NULL,
    temperature DECIMAL(5,2) NOT NULL,
    cloud_cover_percentage INT NOT NULL,
    precipitation_probability DECIMAL(5,2) NOT NULL,
    humidity INT NOT NULL,
    visibility_meters INT NOT NULL,
    visibility_text VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subdistrict_id) REFERENCES forecasting.dim_subdistrict(subdistrict_id),
    FOREIGN KEY (weather_condition_id) REFERENCES forecasting.dim_weather_condition(weather_condition_id)
);

-- Create indexes for better query performance
CREATE INDEX idx_fact_weather_forecast_subdistrict ON forecasting.fact_weather_forecast(subdistrict_id);
CREATE INDEX idx_fact_weather_forecast_weather ON forecasting.fact_weather_forecast(weather_condition_id);
CREATE INDEX idx_fact_weather_forecast_utc_datetime ON forecasting.fact_weather_forecast(utc_datetime);
CREATE INDEX idx_fact_weather_forecast_wind_direction ON forecasting.fact_weather_forecast(wind_direction_degrees, wind_direction);
CREATE INDEX idx_dim_subdistrict_coordinates ON forecasting.dim_subdistrict(latitude, longitude);

-- End of script

