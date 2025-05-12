-- 1. Create schema
CREATE SCHEMA IF NOT EXISTS forecasting;

-- 2. Create dimension tables

-- Table: dim_province
CREATE TABLE IF NOT EXISTS forecasting.dim_province (
    province_id SERIAL PRIMARY KEY,
    province_name VARCHAR(100) UNIQUE NOT NULL
);

-- Table: dim_city
CREATE TABLE IF NOT EXISTS forecasting.dim_city (
    city_id SERIAL PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    province_id INT NOT NULL,
    FOREIGN KEY (province_id) REFERENCES forecasting.dim_province(province_id)
);

-- Table: dim_district
CREATE TABLE IF NOT EXISTS forecasting.dim_district (
    district_id SERIAL PRIMARY KEY,
    district_name VARCHAR(100) NOT NULL,
    city_id INT NOT NULL,
    FOREIGN KEY (city_id) REFERENCES forecasting.dim_city(city_id)
);

-- Table: dim_location
CREATE TABLE IF NOT EXISTS forecasting.dim_location (
    location_id SERIAL PRIMARY KEY,
    district_id INT NOT NULL,
    FOREIGN KEY (district_id) REFERENCES forecasting.dim_district(district_id)
);

-- Table: dim_weather_condition
CREATE TABLE IF NOT EXISTS forecasting.dim_weather_condition (
    weather_condition_id SERIAL PRIMARY KEY,
    condition_code VARCHAR(10) UNIQUE NOT NULL,
    description VARCHAR(100) NOT NULL
);

-- Table: dim_time
CREATE TABLE IF NOT EXISTS forecasting.dim_time (
    time_id SERIAL PRIMARY KEY,
    forecast_datetime TIMESTAMP UNIQUE NOT NULL,
    year INT NOT NULL,
    month INT NOT NULL,
    day INT NOT NULL,
    hour INT NOT NULL
);

-- 3. Create fact table

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

