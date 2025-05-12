-- 1. Drop the schema and all its objects (tables, views, etc.)
DROP SCHEMA IF EXISTS forecasting CASCADE;

-- 2. Create the schema again
CREATE SCHEMA IF NOT EXISTS forecasting;

-- 3. Create dimension tables

-- Table: dim_location (Denormalized location dimension)
CREATE TABLE IF NOT EXISTS forecasting.dim_location (
    location_id VARCHAR(10) PRIMARY KEY,  -- Using adm4 code as ID
    subdistrict_name VARCHAR(100) NOT NULL,
    district_name VARCHAR(100) NOT NULL,
    city_name VARCHAR(100) NOT NULL,
    province_name VARCHAR(100) NOT NULL,
    latitude DECIMAL(10,8) NOT NULL,
    longitude DECIMAL(11,8) NOT NULL,
    timezone VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: dim_weather_condition (Denormalized weather dimension)
CREATE TABLE IF NOT EXISTS forecasting.dim_weather_condition (
    weather_condition_id SERIAL PRIMARY KEY,
    condition_code INT NOT NULL,
    description_id VARCHAR(100) NOT NULL,
    description_en VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(condition_code)
);

-- Table: dim_wind (Denormalized wind dimension)
CREATE TABLE IF NOT EXISTS forecasting.dim_wind (
    wind_id SERIAL PRIMARY KEY,
    direction_degrees INT NOT NULL,
    direction VARCHAR(10) NOT NULL,
    direction_to VARCHAR(10) NOT NULL,
    speed DECIMAL(5,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(direction_degrees, direction, direction_to, speed)
);

-- Table: dim_datetime (Denormalized time dimension)
CREATE TABLE IF NOT EXISTS forecasting.dim_datetime (
    datetime_id SERIAL PRIMARY KEY,
    utc_datetime TIMESTAMP NOT NULL,
    local_datetime TIMESTAMP NOT NULL,
    time_index VARCHAR(10) NOT NULL,
    analysis_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(utc_datetime)
);

-- 4. Create fact table

-- Table: fact_weather_forecast
CREATE TABLE IF NOT EXISTS forecasting.fact_weather_forecast (
    forecast_id SERIAL PRIMARY KEY,
    location_id VARCHAR(10) NOT NULL,
    datetime_id INT NOT NULL,
    weather_condition_id INT NOT NULL,
    wind_id INT NOT NULL,
    temperature DECIMAL(5,2) NOT NULL,
    cloud_cover_percentage INT NOT NULL,
    precipitation_probability DECIMAL(5,2) NOT NULL,
    humidity INT NOT NULL,
    visibility_meters INT NOT NULL,
    visibility_text VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (location_id) REFERENCES forecasting.dim_location(location_id),
    FOREIGN KEY (datetime_id) REFERENCES forecasting.dim_datetime(datetime_id),
    FOREIGN KEY (weather_condition_id) REFERENCES forecasting.dim_weather_condition(weather_condition_id),
    FOREIGN KEY (wind_id) REFERENCES forecasting.dim_wind(wind_id)
);

-- Create indexes for better query performance
CREATE INDEX idx_fact_weather_forecast_location ON forecasting.fact_weather_forecast(location_id);
CREATE INDEX idx_fact_weather_forecast_datetime ON forecasting.fact_weather_forecast(datetime_id);
CREATE INDEX idx_fact_weather_forecast_weather ON forecasting.fact_weather_forecast(weather_condition_id);
CREATE INDEX idx_fact_weather_forecast_wind ON forecasting.fact_weather_forecast(wind_id);
CREATE INDEX idx_dim_datetime_utc ON forecasting.dim_datetime(utc_datetime);
CREATE INDEX idx_dim_location_coordinates ON forecasting.dim_location(latitude, longitude);
CREATE INDEX idx_dim_wind_direction ON forecasting.dim_wind(direction_degrees, direction);

-- End of script

