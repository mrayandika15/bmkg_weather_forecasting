const seeders = require("./index");

async function runAllSeeders() {
  try {
    console.log("Starting to seed all locations...");

    // Run all seeders sequentially
    for (const seeder of seeders) {
      await seeder();
    }

    console.log("All locations seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error running seeders:", error);
    process.exit(1);
  }
}

// Run the seeders
runAllSeeders();
