const fs = require("fs");
const path = require("path");

// Get all seeder files from the starflake directory
const seedersDir = path.join(__dirname, "../db/seeders/starflake");
const seederFiles = fs
  .readdirSync(seedersDir)
  .filter((file) => file.endsWith("Seeder.js") && file !== "index.js");

// Import all seeders
const seeders = seederFiles.map((file) => {
  const seeder = require(path.join(seedersDir, file));
  return seeder;
});

// Function to run all seeders
async function runSeeders() {
  console.log("Starting to seed locations...");

  for (const seeder of seeders) {
    try {
      await seeder();
    } catch (error) {
      console.error("Error running seeder:", error);
    }
  }

  console.log("All seeders completed!");
}

// Run the seeders
runSeeders().catch((error) => {
  console.error("Error running seeders:", error);
  process.exit(1);
});
