-- 1. Drop the schema and all its objects (tables, views, etc.)
DROP SCHEMA IF EXISTS logging CASCADE;

-- 2. Create the schema again
CREATE SCHEMA IF NOT EXISTS logging;

-- 3. Create error log table
CREATE TABLE IF NOT EXISTS logging.error_log (
    error_id VARCHAR(36) PRIMARY KEY,
    error_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    error_message TEXT NOT NULL,
    error_details VARCHAR(256),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create indexes for better query performance
CREATE INDEX idx_error_log_timestamp ON logging.error_log(error_timestamp);
CREATE INDEX idx_error_log_message ON logging.error_log(error_message);
CREATE INDEX idx_error_log_created_at ON logging.error_log(created_at);

-- End of script 
