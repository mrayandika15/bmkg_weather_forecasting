const fs = require("fs");
const path = require("path");

// Read the processed locations
const processedLocationsPath = path.join(
  __dirname,
  "../data/processed_locations.json"
);
const processedLocations = JSON.parse(
  fs.readFileSync(processedLocationsPath, "utf8")
);

// Create seeders directory if it doesn't exist
const seedersDir = path.join(__dirname, "../../db/seeders/starflake");
fs.mkdirSync(seedersDir, { recursive: true });

// Generate seeder for each location
processedLocations.forEach((location) => {
  const seederContent = `const db = require("../../config/database");

const location = {
  location_id: "${location.adm4}", // Original adm4 code with dots
  subdistrict_name: "${location.desa}",
  district_name: "${location.kecamatan}",
  city_name: "${location.kotkab}",
  province_name: "${location.provinsi}",
  latitude: ${location.lat},
  longitude: ${location.lon},
  timezone: "${location.timezone}",
};

async function seedLocation() {
  try {
    console.log("Seeding location ${location.desa}...");

    await db.query(
      \`INSERT INTO forecasting.dim_location 
      (location_id, subdistrict_name, district_name, city_name, province_name, latitude, longitude, timezone) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT (location_id) DO NOTHING\`,
      [
        location.location_id,
        location.subdistrict_name,
        location.district_name,
        location.city_name,
        location.province_name,
        location.latitude,
        location.longitude,
        location.timezone,
      ]
    );

    console.log("Location ${location.desa} seeded successfully!");
  } catch (error) {
    console.error("Error seeding location ${location.desa}:", error);
    throw error;
  }
}

module.exports = seedLocation;
`;

  // Create seeder file
  const seederFileName = `${location.desa
    .toLowerCase()
    .replace(/\s+/g, "_")}Seeder.js`;
  const seederFilePath = path.join(seedersDir, seederFileName);
  fs.writeFileSync(seederFilePath, seederContent);
});

// Create index.js to export all seeders
const indexContent = `const fs = require('fs');
const path = require('path');

// Get all seeder files
const seederFiles = fs.readdirSync(__dirname)
  .filter(file => file.endsWith('Seeder.js') && file !== 'index.js');

// Import and export all seeders
const seeders = seederFiles.map(file => {
  const seeder = require(\`./\${file}\`);
  return seeder;
});

module.exports = seeders;
`;

const indexPath = path.join(seedersDir, "index.js");
fs.writeFileSync(indexPath, indexContent);

console.log("Seeder files generated successfully!");
