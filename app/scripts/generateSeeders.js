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

if (schema === "snowflake") {
  // Snowflake schema: generate separate seeders for each dimension
  const provinces = new Map();
  const cities = new Map();
  const districts = new Map();

  processedLocations.forEach((location) => {
    const province_code = location.adm1;
    if (!provinces.has(province_code)) {
      provinces.set(province_code, {
        province_code: province_code,
        province_name: location.provinsi,
      });
    }

    const city_code = location.adm2.split(".").pop();
    if (!cities.has(location.adm2)) {
      cities.set(location.adm2, {
        city_code: city_code,
        city_name: location.kotkab,
        province_code: location.adm1,
      });
    }

    const district_code = location.adm3.split(".").pop();
    if (!districts.has(location.adm3)) {
      districts.set(location.adm3, {
        district_code: district_code,
        district_name: location.kecamatan,
        city_code: location.adm2,
      });
    }
  });

  const provinceValues = Array.from(provinces.values());
  const cityValues = Array.from(cities.values());
  const districtValues = Array.from(districts.values());

  const provinceSeederContent = `const db = require('${dbConfigPath}');
const provinces = ${JSON.stringify(provinceValues, null, 2)};
async function seedProvinces() {
  try {
    console.log(\`Starting to seed \${provinces.length} provinces for snowflake schema...\`);
    for (const province of provinces) {
      await db.query(\`INSERT INTO forecasting.dim_province (province_code, province_name) VALUES ($1, $2) ON CONFLICT (province_code) DO NOTHING\`, [province.province_code, province.province_name]);
    }
    console.log('Provinces seeded successfully!');
  } catch (error) {
    console.error('Error seeding provinces:', error);
    throw error;
  }
}
module.exports = seedProvinces;`;

  const citySeederContent = `const db = require('${dbConfigPath}');
const cities = ${JSON.stringify(cityValues, null, 2)};
async function seedCities() {
  try {
    console.log(\`Starting to seed \${cities.length} cities for snowflake schema...\`);
    for (const city of cities) {
      const provinceRes = await db.query('SELECT province_id FROM forecasting.dim_province WHERE province_code = $1', [city.province_code]);
      if (provinceRes.rows.length > 0) {
        const province_id = provinceRes.rows[0].province_id;
        await db.query(\`INSERT INTO forecasting.dim_city (city_code, city_name, province_id) VALUES ($1, $2, $3) ON CONFLICT (city_code) DO NOTHING\`, [city.city_code, city.city_name, province_id]);
      } else {
        console.error(\`Province with code \${city.province_code} not found for city \${city.city_name}\`);
      }
    }
    console.log('Cities seeded successfully!');
  } catch (error) {
    console.error('Error seeding cities:', error);
    throw error;
  }
}
module.exports = seedCities;`;

  const districtSeederContent = `const db = require('${dbConfigPath}');
const districts = ${JSON.stringify(districtValues, null, 2)};
async function seedDistricts() {
  try {
    console.log(\`Starting to seed \${districts.length} districts for snowflake schema...\`);
    for (const district of districts) {
        const cityRes = await db.query('SELECT city_id FROM forecasting.dim_city WHERE city_code = $1', [district.city_code.split('.').pop()]);
        if (cityRes.rows.length > 0) {
            const city_id = cityRes.rows[0].city_id;
            await db.query(\`INSERT INTO forecasting.dim_district (district_code, district_name, city_id) VALUES ($1, $2, $3) ON CONFLICT (district_code) DO NOTHING\`, [district.district_code, district.district_name, city_id]);
        } else {
            console.error(\`City with code \${district.city_code} not found for district \${district.district_name}\`);
        }
    }
    console.log('Districts seeded successfully!');
  } catch (error) {
    console.error('Error seeding districts:', error);
    throw error;
  }
}
module.exports = seedDistricts;`;

  const subdistrictValues = processedLocations.map((location) => ({
    subdistrict_code: location.adm4.split(".").pop(),
    subdistrict_name: location.desa,
    district_code: location.adm3.split(".").pop(),
    latitude: location.lat,
    longitude: location.lon,
    timezone: location.timezone,
  }));

  const subdistrictSeederContent = `const db = require('${dbConfigPath}');
const subdistricts = ${JSON.stringify(subdistrictValues, null, 2)};
async function seedSubdistricts() {
  try {
    console.log(\`Starting to seed \${subdistricts.length} subdistricts for snowflake schema...\`);
    for (const subdistrict of subdistricts) {
      const districtRes = await db.query('SELECT district_id FROM forecasting.dim_district WHERE district_code = $1', [subdistrict.district_code]);
      if (districtRes.rows.length > 0) {
        const district_id = districtRes.rows[0].district_id;
        await db.query(\`INSERT INTO forecasting.dim_subdistrict (subdistrict_code, subdistrict_name, district_id, latitude, longitude, timezone) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (subdistrict_code) DO NOTHING\`, [subdistrict.subdistrict_code, subdistrict.subdistrict_name, district_id, subdistrict.latitude, subdistrict.longitude, subdistrict.timezone]);
      } else {
        console.error(\`District with code \${subdistrict.district_code} not found for subdistrict \${subdistrict.subdistrict_name}\`);
      }
    }
    console.log('Subdistricts seeded successfully!');
  } catch (error) {
    console.error('Error seeding subdistricts:', error);
    throw error;
  }
}
module.exports = seedSubdistricts;`;

  const weatherSeederContent = `const db = require('${dbConfigPath}');
const weatherData = ${JSON.stringify(weatherData, null, 2)};
async function seedWeather() {
  try {
    console.log(\`Starting to seed \${weatherData.length} weather conditions for ${schema} schema...\`);
    for (const weather of weatherData) {
      await db.query(\`INSERT INTO forecasting.dim_weather (weather_condition_id, weather_desc, weather_desc_en, image_url) VALUES ($1, $2, $3, $4) ON CONFLICT (weather_condition_id) DO NOTHING\`, [weather.weather_id, weather.weather_desc, weather.weather_desc_en, weather.image_url]);
    }
    console.log('Weather conditions seeded successfully!');
  } catch (error) {
    console.error('Error seeding weather conditions:', error);
    throw error;
  }
}
module.exports = seedWeather;`;

  console.log(`Creating seeder files in ${seedersDir}`);
  fs.writeFileSync(
    path.join(seedersDir, "provinceSeeder.js"),
    provinceSeederContent
  );
  fs.writeFileSync(path.join(seedersDir, "citySeeder.js"), citySeederContent);
  fs.writeFileSync(
    path.join(seedersDir, "districtSeeder.js"),
    districtSeederContent
  );
  fs.writeFileSync(
    path.join(seedersDir, "subdistrictSeeder.js"),
    subdistrictSeederContent
  );
  fs.writeFileSync(
    path.join(seedersDir, "weatherSeeder.js"),
    weatherSeederContent
  );

  const indexContent = `const seedProvinces = require('./provinceSeeder');
const seedCities = require('./citySeeder');
const seedDistricts = require('./districtSeeder');
const seedSubdistricts = require('./subdistrictSeeder');
const seedWeather = require('./weatherSeeder');
module.exports = [seedProvinces, seedCities, seedDistricts, seedSubdistricts, seedWeather];`;
  fs.writeFileSync(path.join(seedersDir, "index.js"), indexContent);
} else {
  // Starflake schema: original logic
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
}

console.log(`Seeder files generated successfully for ${schema} schema!`);
