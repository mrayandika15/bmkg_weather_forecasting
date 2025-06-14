require("dotenv").config({
  path: ".env.starflake",
});
const db = require("../../config/database");

async function countRows() {
  try {
    // Get all tables in the forecasting schema
    const tablesQuery = `
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'forecasting' 
      ORDER BY table_name;
    `;

    const { rows: tables } = await db.query(tablesQuery);

    console.log("\nRow counts for Starflake database tables:");
    console.log("========================================");

    // Count rows in each table
    for (const table of tables) {
      const countQuery = `
        SELECT COUNT(*) as count 
        FROM forecasting.${table.table_name};
      `;

      const {
        rows: [{ count }],
      } = await db.query(countQuery);
      console.log(`${table.table_name}: ${count} rows`);
    }

    console.log("========================================\n");
  } catch (error) {
    console.error("Error counting rows:", error);
  } finally {
    // Close the database connection
    await db.end();
  }
}

countRows();
