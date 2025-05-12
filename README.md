# BMKG Weather Forecasting Database

This project implements two different database schemas (Snowflake and Starflake) for storing BMKG (Badan Meteorologi, Klimatologi, dan Geofisika) weather forecasting data.

## Project Structure

```
bmkg_weather_forecasting/
├── db/
│   ├── bmkg_forecasting_snowflake.sql    # Snowflake schema definition
│   ├── bmkg_forecasting_starflake.sql    # Starflake schema definition
│   └── create_databases.sh               # Script to run both schemas
└── README.md
```

## Database Schemas

### Snowflake Schema

The snowflake schema uses a normalized approach with detailed relationships between dimensions:

- **Location Hierarchy**:

  - `dim_province` (adm1)
  - `dim_city` (adm2)
  - `dim_district` (adm3)
  - `dim_subdistrict` (adm4)

- **Weather Dimensions**:
  - `dim_weather_condition`
  - `dim_wind`
  - `dim_datetime`

### Starflake Schema

The starflake schema uses a denormalized approach for simpler queries:

- **Location Dimension**:

  - Single `dim_location` table with all hierarchy information

- **Weather Dimensions**:
  - `dim_weather_condition`
  - `dim_wind`
  - `dim_datetime`

## Data Source

The schemas are designed to work with BMKG's weather forecasting API:

```
https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=32.73.13.1005
```

## Setup Instructions

1. **Prerequisites**:

   - PostgreSQL installed
   - User 'admin' with appropriate permissions

2. **Make the script executable**:

   ```bash
   chmod +x db/create_databases.sh
   ```

3. **Run the script**:
   ```bash
   ./db/create_databases.sh
   ```

This will execute both schema files simultaneously.

## Schema Differences

### Snowflake Schema

- More normalized dimensions
- Better for detailed analysis
- More complex joins
- Better data normalization

### Starflake Schema

- More denormalized dimensions
- Better for simpler queries
- Fewer joins
- More data redundancy

## Database Tables

### Common Tables

- `dim_weather_condition`: Weather conditions and descriptions
- `dim_wind`: Wind direction and speed information
- `dim_datetime`: Time and date information
- `fact_weather_forecast`: Main fact table with weather measurements

### Snowflake-specific Tables

- `dim_province`
- `dim_city`
- `dim_district`
- `dim_subdistrict`

### Starflake-specific Tables

- `dim_location` (denormalized location information)

## Data Fields

### Weather Measurements

- Temperature
- Cloud cover percentage
- Precipitation probability
- Humidity
- Wind speed and direction
- Visibility

### Location Information

- Province
- City
- District
- Subdistrict
- Coordinates (latitude/longitude)
- Timezone

## Notes

- Both schemas use the same fact table structure
- The main difference is in how location data is organized
- Choose the schema based on your query patterns and analysis needs
