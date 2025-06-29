import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const snowflakePool = new Pool({
  connectionString: process.env.DATABASE_URL_SNOWFLAKE,
});

const starflakePool = new Pool({
  connectionString: process.env.DATABASE_URL_STARFLAKE,
});

export const dbSnowflake = drizzle(snowflakePool);
export const dbStarflake = drizzle(starflakePool);
