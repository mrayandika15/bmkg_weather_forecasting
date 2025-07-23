const fs = require("fs");
const path = require("path");

// Load processed_locations_bandung.json
const inputPath = path.join(
  __dirname,
  "../data/processed_locations_bandung.json"
);
const processedLocations = JSON.parse(fs.readFileSync(inputPath, "utf8"));

// Province, city, district, subdistrict extraction (same as generateSeeders.js)
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
const subdistrictValues = processedLocations.map((location) => ({
  subdistrict_code: location.adm4.split(".").pop(),
  subdistrict_name: location.desa,
  district_code: location.adm3.split(".").pop(),
  latitude: location.lat,
  longitude: location.lon,
  timezone: location.timezone,
}));

console.log(`Provinces: ${provinceValues.length}`);
console.log(`Cities: ${cityValues.length}`);
console.log(`Districts: ${districtValues.length}`);
console.log(`Subdistricts: ${subdistrictValues.length}`);
console.log(`Total locations: ${processedLocations.length}`);
console.log(`Output: ${inputPath}`);

// Also read weather-data.json and log the number of weather conditions
const weatherDataPath = path.join(__dirname, "../data/weather-data.json");
const weatherData = JSON.parse(fs.readFileSync(weatherDataPath, "utf8"));
console.log(`Weather conditions: ${weatherData.length}`);
