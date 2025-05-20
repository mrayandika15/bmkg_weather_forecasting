const seedWeatherConditions = require("./weatherConditionSeeder");
const seedLocation = require("./locationSeeder");

async function runSeeders() {
  try {
    console.log("Starting seeding process...");

    // Run seeders in sequence
    await seedWeatherConditions();
    await seedLocation();

    console.log("All seeders completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error running seeders:", error);
    process.exit(1);
  }
}

runSeeders();
