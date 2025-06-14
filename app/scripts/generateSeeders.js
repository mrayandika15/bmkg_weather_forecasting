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

// Read the weather data
const weatherDataPath = path.join(__dirname, "../data/weather-data.json");
const weatherData = JSON.parse(fs.readFileSync(weatherDataPath, "utf8"));

// Determine which schema to use based on NODE_ENV
const schema = process.env.NODE_ENV || "starflake";
const seedersDir = path.join(__dirname, `../../db/seeders/${schema}`);
fs.mkdirSync(seedersDir, { recursive: true });

// Get absolute path to database config
const dbConfigPath = path.resolve(__dirname, "../../config/database");

// Create location seeder file
const locationSeederContent = `const db = require('${dbConfigPath}');

const locations = ${JSON.stringify(processedLocations, null, 2)};

async function seedLocations() {
  try {
    console.log(\`Starting to seed \${locations.length} locations for ${schema} schema...\`);
    let successCount = 0;
    let errorCount = 0;

    for (const location of locations) {
      try {
        console.log(\`Seeding location \${location.desa}...\`);

        await db.query(
          \`INSERT INTO forecasting.dim_location 
          (location_id, subdistrict_name, district_name, city_name, province_name, latitude, longitude, timezone) 
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          ON CONFLICT (location_id) DO NOTHING\`,
          [
            location.adm4,
            location.desa,
            location.kecamatan,
            location.kotkab,
            location.provinsi,
            location.lat,
            location.lon,
            location.timezone,
          ]
        );

        console.log(\`Location \${location.desa} seeded successfully!\`);
        successCount++;
      } catch (error) {
        console.error(\`Error seeding location \${location.desa}:\`, error);
        errorCount++;
      }
    }

    console.log("\\nLocation Seeder execution summary:");
    console.log(\`Total locations: \${locations.length}\`);
    console.log(\`Successfully seeded: \${successCount}\`);
    console.log(\`Failed: \${errorCount}\`);

    if (errorCount > 0) {
      throw new Error(\`Failed to seed \${errorCount} locations\`);
    }
  } catch (error) {
    console.error("Error in seedLocations:", error);
    throw error;
  }
}

module.exports = seedLocations;
`;

// Create weather seeder file
const weatherSeederContent = `const db = require('${dbConfigPath}');

const weatherData = ${JSON.stringify(weatherData, null, 2)};

async function seedWeather() {
  try {
    console.log(\`Starting to seed \${weatherData.length} weather conditions for ${schema} schema...\`);
    let successCount = 0;
    let errorCount = 0;

    for (const weather of weatherData) {
      try {
        console.log(\`Seeding weather condition \${weather.weather_desc}...\`);

        await db.query(
          \`INSERT INTO forecasting.dim_weather 
          (weather_condition_id, weather_desc, weather_desc_en, image_url) 
          VALUES ($1, $2, $3, $4)
          ON CONFLICT (weather_condition_id) DO NOTHING\`,
          [
            weather.weather_id,
            weather.weather_desc,
            weather.weather_desc_en,
            weather.image_url,
          ]
        );

        console.log(\`Weather condition \${weather.weather_desc} seeded successfully!\`);
        successCount++;
      } catch (error) {
        console.error(\`Error seeding weather condition \${weather.weather_desc}:\`, error);
        errorCount++;
      }
    }

    console.log("\\nWeather Seeder execution summary:");
    console.log(\`Total weather conditions: \${weatherData.length}\`);
    console.log(\`Successfully seeded: \${successCount}\`);
    console.log(\`Failed: \${errorCount}\`);

    if (errorCount > 0) {
      throw new Error(\`Failed to seed \${errorCount} weather conditions\`);
    }
  } catch (error) {
    console.error("Error in seedWeather:", error);
    throw error;
  }
}

module.exports = seedWeather;
`;

// Create the seeder files
const locationSeederPath = path.join(seedersDir, "locationSeeder.js");
const weatherSeederPath = path.join(seedersDir, "weatherSeeder.js");

console.log(`Creating seeder files in ${seedersDir}`);
fs.writeFileSync(locationSeederPath, locationSeederContent);
fs.writeFileSync(weatherSeederPath, weatherSeederContent);

// Create index.js to export both seeders
const indexContent = `const seedLocations = require('./locationSeeder');
const seedWeather = require('./weatherSeeder');
module.exports = [seedLocations, seedWeather];`;

const indexPath = path.join(seedersDir, "index.js");
fs.writeFileSync(indexPath, indexContent);

console.log(`Seeder files generated successfully for ${schema} schema!`);
