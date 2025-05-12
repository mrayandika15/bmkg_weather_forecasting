-- 1. Create schema
CREATE SCHEMA IF NOT EXISTS forecasting;

-- 2. Create dimension tables (Flattened)

-- Table: dim_location (Flattened)
CREATE TABLE IF NOT EXISTS forecasting.dim_location (
    location_id SERIAL PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    province_name VARCHAR(100) NOT NULL,
    district_name VARCHAR(100) NOT NULL
);

-- Table: dim_weather_condition (Flattened)
CREATE TABLE IF NOT EXISTS forecasting.dim_weather_condition (
    weather_condition_id SERIAL PRIMARY KEY,
    condition_code VARCHAR(10) UNIQUE NOT NULL,
    description VARCHAR(100) NOT NULL
);

-- Table: dim_time (Flattened)
CREATE TABLE IF NOT EXISTS forecasting.dim_time (
    time_id SERIAL PRIMARY KEY,
    forecast_datetime TIMESTAMP UNIQUE NOT NULL,
    year INT NOT NULL,
    month INT NOT NULL,
    day INT NOT NULL,
    hour INT NOT NULL
);

-- 3. Create fact table (Stores measurable data)

-- Table: fact_weather_forecast
CREATE TABLE IF NOT EXISTS forecasting.fact_weather_forecast (
    forecast_id SERIAL PRIMARY KEY,
    location_id INT NOT NULL,
    time_id INT NOT NULL,
    weather_condition_id INT NOT NULL,
    temperature DECIMAL(5,2),
    min_temperature DECIMAL(5,2),
    max_temperature DECIMAL(5,2),
    humidity DECIMAL(5,2),
    min_humidity DECIMAL(5,2),
    max_humidity DECIMAL(5,2),
    wind_speed DECIMAL(5,2),
    wind_direction VARCHAR(10),
    FOREIGN KEY (location_id) REFERENCES forecasting.dim_location(location_id),
    FOREIGN KEY (time_id) REFERENCES forecasting.dim_time(time_id),
    FOREIGN KEY (weather_condition_id) REFERENCES forecasting.dim_weather_condition(weather_condition_id)
);

-- End of script

