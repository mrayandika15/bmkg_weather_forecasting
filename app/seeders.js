const fs = require("fs");
const path = require("path");

// Determine which schema to use based on NODE_ENV
const schema = process.env.NODE_ENV || "starflake";
const seedersDir = path.join(__dirname, `../db/seeders/${schema}`);

// Import all seeders from the index file
const seeders = require(path.join(seedersDir, "index.js"));

// Function to run all seeders
async function runSeeders() {
  console.log(`Starting to seed for ${schema} schema...`);

  for (const seeder of seeders) {
    try {
      await seeder();
    } catch (error) {
      console.error("Error running seeder:", error);
      process.exit(1); // Exit with error code if a seeder fails
    }
  }

  console.log("All seeders completed!");
}

// Run the seeders
runSeeders().catch((error) => {
  console.error("Error running seeders:", error);
  process.exit(1);
});
