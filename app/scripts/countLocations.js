const fs = require("fs");
const path = require("path");

// Read the processed locations
const processedLocationsPath = path.join(
  __dirname,
  "../data/processed_locations.json"
);

try {
  // Read and parse the JSON file
  const processedLocations = JSON.parse(
    fs.readFileSync(processedLocationsPath, "utf8")
  );

  // Count the number of locations
  const locationCount = processedLocations.length;

  // Display the results
  console.log("\nLocation Data Analysis:");
  console.log("======================");
  console.log(`Total number of locations: ${locationCount}`);

  // Count unique districts (kecamatan)
  const uniqueDistricts = new Set(
    processedLocations.map((loc) => loc.kecamatan)
  );
  console.log(`Number of unique districts: ${uniqueDistricts.size}`);

  // Count unique cities (kotkab)
  const uniqueCities = new Set(processedLocations.map((loc) => loc.kotkab));
  console.log(`Number of unique cities: ${uniqueCities.size}`);

  // Count unique provinces (provinsi)
  const uniqueProvinces = new Set(
    processedLocations.map((loc) => loc.provinsi)
  );
  console.log(`Number of unique provinces: ${uniqueProvinces.size}`);

  // Display sample of first location for verification
  if (locationCount > 0) {
    console.log("\nSample location data (first entry):");
    console.log(JSON.stringify(processedLocations[0], null, 2));
  }
} catch (error) {
  console.error("Error reading or processing the locations file:", error);
  process.exit(1);
}
