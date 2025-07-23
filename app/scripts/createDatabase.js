const fs = require("fs");
const path = require("path");
const { Client } = require("pg");
const dotenv = require("dotenv");

// Determine which .env file and schema file to load
let envFile = ".env.starflake";
let schemaFile = "db/bmkg_forecasting_starflake.sql";
if (process.env.NODE_ENV === "snowflake") {
  envFile = ".env.snowflake";
  schemaFile = "db/bmkg_forecasting_snowflake.sql";
} else if (process.env.NODE_ENV === "logging") {
  envFile = ".env.logging";
  schemaFile = "db/bmkg_error_logging.sql";
}

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

async function createDatabaseAndSchema() {
  // 1. Connect to the default 'postgres' database to create the target DB
  const adminClient = new Client({
    user: DB_USER,
    host: DB_HOST,
    database: "postgres",
    password: DB_PASSWORD,
    port: DB_PORT,
  });

  try {
    await adminClient.connect();
    // Create the database if it doesn't exist
    await adminClient.query(`CREATE DATABASE ${DB_NAME}`);
    console.log(`Database '${DB_NAME}' created.`);
  } catch (err) {
    if (err.code === "42P04") {
      // 42P04 = duplicate_database
      console.log(`Database '${DB_NAME}' already exists.`);
    } else {
      console.error("Error creating database:", err.message);
      await adminClient.end();
      process.exit(1);
    }
  } finally {
    await adminClient.end();
  }

  // 2. Connect to the new database and run the schema SQL
  const dbClient = new Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
  });

  try {
    await dbClient.connect();
    const schemaSQL = fs.readFileSync(
      path.resolve(process.cwd(), schemaFile),
      "utf8"
    );
    await dbClient.query(schemaSQL);
    console.log(`Schema from '${schemaFile}' applied to '${DB_NAME}'.`);
  } catch (err) {
    console.error("Error applying schema:", err.message);
    process.exit(1);
  } finally {
    await dbClient.end();
  }
}

createDatabaseAndSchema();
