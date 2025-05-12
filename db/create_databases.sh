#!/bin/bash

# Database configuration
DB_USER="admin"

# Schema files
SCHEMA_SNOWFLAKE="bmkg_forecasting_snowflake.sql"
SCHEMA_STARFLAKE="bmkg_forecasting_starflake.sql"

# Colors for output
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo "Running schema files..."

# Run both schema files
psql -U $DB_USER -d bmkg_forecasting_snowflake -f $SCHEMA_SNOWFLAKE &
psql -U $DB_USER -d bmkg_forecasting_starflake -f $SCHEMA_STARFLAKE &

# Wait for both processes to complete
wait

echo -e "${GREEN}Both schema files have been executed!${NC}" 