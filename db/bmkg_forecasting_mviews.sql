-- Materialized Views for BMKG Weather Forecasting
-- These views can be used with either snowflake or starflake schema

-- Daily Weather Summary by Location
CREATE MATERIALIZED VIEW mview_daily_weather_summary AS
SELECT 
    l.province_name,
    l.city_name,
    l.district_name,
    l.subdistrict_name,
    d.date,
    d.hour,
    AVG(f.temperature) as avg_temperature,
    MAX(f.temperature) as max_temperature,
    MIN(f.temperature) as min_temperature,
    AVG(f.humidity) as avg_humidity,
    AVG(f.precipitation_probability) as avg_precipitation_probability,
    AVG(f.cloud_cover_percentage) as avg_cloud_cover,
    AVG(f.visibility) as avg_visibility,
    wc.condition_name,
    wc.description,
    w.direction,
    w.speed
FROM fact_weather_forecast f
JOIN dim_location l ON f.location_id = l.location_id
JOIN dim_datetime d ON f.datetime_id = d.datetime_id
JOIN dim_weather_condition wc ON f.weather_condition_id = wc.weather_condition_id
JOIN dim_wind w ON f.wind_id = w.wind_id
GROUP BY 
    l.province_name,
    l.city_name,
    l.district_name,
    l.subdistrict_name,
    d.date,
    d.hour,
    wc.condition_name,
    wc.description,
    w.direction,
    w.speed;

-- Weather Trends by Province
CREATE MATERIALIZED VIEW mview_province_weather_trends AS
SELECT 
    l.province_name,
    d.date,
    d.hour,
    AVG(f.temperature) as avg_temperature,
    AVG(f.humidity) as avg_humidity,
    AVG(f.precipitation_probability) as avg_precipitation_probability,
    COUNT(DISTINCT wc.condition_name) as unique_conditions,
    STRING_AGG(DISTINCT wc.condition_name, ', ') as weather_conditions
FROM fact_weather_forecast f
JOIN dim_location l ON f.location_id = l.location_id
JOIN dim_datetime d ON f.datetime_id = d.datetime_id
JOIN dim_weather_condition wc ON f.weather_condition_id = wc.weather_condition_id
GROUP BY 
    l.province_name,
    d.date,
    d.hour;

-- Extreme Weather Conditions
CREATE MATERIALIZED VIEW mview_extreme_weather AS
SELECT 
    l.province_name,
    l.city_name,
    l.district_name,
    l.subdistrict_name,
    d.date,
    d.hour,
    f.temperature,
    f.humidity,
    f.precipitation_probability,
    f.cloud_cover_percentage,
    f.visibility,
    wc.condition_name,
    wc.description,
    w.direction,
    w.speed
FROM fact_weather_forecast f
JOIN dim_location l ON f.location_id = l.location_id
JOIN dim_datetime d ON f.datetime_id = d.datetime_id
JOIN dim_weather_condition wc ON f.weather_condition_id = wc.weather_condition_id
JOIN dim_wind w ON f.wind_id = w.wind_id
WHERE 
    f.temperature > 35 OR -- High temperature
    f.temperature < 20 OR -- Low temperature
    f.humidity > 90 OR -- High humidity
    f.precipitation_probability > 80 OR -- High precipitation probability
    f.visibility < 5 OR -- Low visibility
    w.speed > 30; -- High wind speed

-- Create indexes for better refresh performance
CREATE INDEX idx_mview_daily_weather_summary ON mview_daily_weather_summary (province_name, city_name, date);
CREATE INDEX idx_mview_province_weather_trends ON mview_province_weather_trends (province_name, date);
CREATE INDEX idx_mview_extreme_weather ON mview_extreme_weather (province_name, city_name, date);

-- Function to refresh all materialized views
CREATE OR REPLACE FUNCTION refresh_all_mviews()
RETURNS void AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY mview_daily_weather_summary;
    REFRESH MATERIALIZED VIEW CONCURRENTLY mview_province_weather_trends;
    REFRESH MATERIALIZED VIEW CONCURRENTLY mview_extreme_weather;
END;
$$ LANGUAGE plpgsql;

-- Create a comment explaining the materialized views
COMMENT ON MATERIALIZED VIEW mview_daily_weather_summary IS 'Daily weather summary aggregated by location and time';
COMMENT ON MATERIALIZED VIEW mview_province_weather_trends IS 'Weather trends aggregated by province and time';
COMMENT ON MATERIALIZED VIEW mview_extreme_weather IS 'Records of extreme weather conditions across all locations'; 