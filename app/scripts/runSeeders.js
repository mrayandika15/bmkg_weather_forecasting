const path = require("path");

// Get the seeder file path
const seedersDir = path.join(__dirname, "../../db/seeders/starflake");
const seederFile = path.join(seedersDir, "locationSeeder.js");

// Run the seeder
async function runSeeders() {
  try {
    console.log("Starting to run location seeder...");

    // Import and run the seeder
    const seedLocations = require(seederFile);
    await seedLocations();

    console.log("\nSeeder completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error running seeder:", error);
    process.exit(1);
  }
}

runSeeders().catch((error) => {
  console.error("Error running seeders:", error);
  process.exit(1);
});
