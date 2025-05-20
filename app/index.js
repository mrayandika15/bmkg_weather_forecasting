const path = require("path");
const fs = require("fs");

// Check if processed locations exist
const processedLocationsPath = path.join(
  __dirname,
  "data/processed_locations.json"
);

if (!fs.existsSync(processedLocationsPath)) {
  console.log(
    "No processed locations found. Please run: npm run get-locations"
  );
  process.exit(1);
}

// Read and display the processed locations
const processedLocations = JSON.parse(
  fs.readFileSync(processedLocationsPath, "utf8")
);

console.log("\nProcessed Locations Summary:");
console.log("===========================");
processedLocations.forEach((location) => {
  console.log(`\nLocation: ${location.desa}, ${location.kecamatan}`);
  console.log("---------------------------");
  console.log(`Province: ${location.provinsi}`);
  console.log(`City/Regency: ${location.kotkab}`);
  console.log(`Coordinates: ${location.lat}, ${location.lon}`);
  console.log(`Timezone: ${location.timezone}`);
  console.log(`Administrative Codes:`);
  console.log(`  - ADM1: ${location.adm1}`);
  console.log(`  - ADM2: ${location.adm2}`);
  console.log(`  - ADM3: ${location.adm3}`);
  console.log(`  - ADM4: ${location.adm4}`);
});
