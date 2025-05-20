const fs = require("fs");
const path = require("path");
const axios = require("axios");

// Read the API map JSON file
const apiMapPath = path.join(__dirname, "../../api-map.json");
const apiMap = JSON.parse(fs.readFileSync(apiMapPath, "utf8"));

async function fetchLocationData(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    // Only extract the location data we want
    const { lokasi } = response.data;
    return {
      adm1: lokasi.adm1,
      adm2: lokasi.adm2,
      adm3: lokasi.adm3,
      adm4: lokasi.adm4,
      provinsi: lokasi.provinsi,
      kotkab: lokasi.kotkab,
      kecamatan: lokasi.kecamatan,
      desa: lokasi.desa,
      lon: lokasi.lon,
      lat: lokasi.lat,
      timezone: lokasi.timezone,
    };
  } catch (error) {
    console.error(`Error fetching data from ${apiUrl}:`, error.message);
    return null;
  }
}

async function processLocations() {
  const locations = apiMap.locations;
  const processedLocations = [];

  for (const location of locations) {
    console.log(`Processing ${location.kelurahan}, ${location.kecamatan}...`);

    const locationData = await fetchLocationData(location.api_url);

    if (locationData) {
      processedLocations.push({
        kecamatan: location.kecamatan,
        kelurahan: location.kelurahan,
        ...locationData,
      });
    }
  }

  // Save the processed locations to a JSON file
  const outputPath = path.join(__dirname, "../data/processed_locations.json");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(processedLocations, null, 2));

  console.log(`\nProcessed ${processedLocations.length} locations`);
  console.log(`Results saved to: ${outputPath}`);
}

// Run the script
processLocations().catch(console.error);
