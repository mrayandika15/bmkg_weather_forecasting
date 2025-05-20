const fs = require("fs");
const path = require("path");
const axios = require("axios");

// Read the API map JSON file
const apiMapPath = path.join(__dirname, "../../api-map.json");
const apiMap = JSON.parse(fs.readFileSync(apiMapPath, "utf8"));

// Helper function to create delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
    if (error.response && error.response.status === 429) {
      console.error(`Rate limit hit for ${apiUrl}`);
      return { error: "RATE_LIMIT", apiUrl };
    }
    console.error(`Error fetching data from ${apiUrl}:`, error.message);
    return null;
  }
}

async function processLocations() {
  const locations = apiMap.locations;
  const processedLocations = [];
  const failedLocations = [];
  const BATCH_SIZE = 30;
  const DELAY_MS = 30000; // 30 seconds

  for (let i = 0; i < locations.length; i++) {
    const location = locations[i];
    console.log(`Processing ${location.kelurahan}, ${location.kecamatan}...`);

    const locationData = await fetchLocationData(location.api_url);

    if (locationData) {
      if (locationData.error === "RATE_LIMIT") {
        failedLocations.push({
          kecamatan: location.kecamatan,
          kelurahan: location.kelurahan,
          api_url: location.api_url,
          error: "RATE_LIMIT",
        });
      } else {
        processedLocations.push({
          kecamatan: location.kecamatan,
          kelurahan: location.kelurahan,
          ...locationData,
        });
      }
    }

    // Add delay after every BATCH_SIZE locations
    if ((i + 1) % BATCH_SIZE === 0 && i < locations.length - 1) {
      console.log(
        `\nProcessed ${BATCH_SIZE} locations. Waiting ${
          DELAY_MS / 1000
        } seconds before continuing...`
      );
      await delay(DELAY_MS);
    }
  }

  // Save the processed locations to a JSON file
  const outputPath = path.join(__dirname, "../data/processed_locations.json");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(processedLocations, null, 2));

  // Save the failed locations to a separate JSON file
  if (failedLocations.length > 0) {
    const errorOutputPath = path.join(__dirname, "../../api-map-error.json");
    fs.writeFileSync(errorOutputPath, JSON.stringify(failedLocations, null, 2));
    console.log(
      `\nSaved ${failedLocations.length} failed locations to: ${errorOutputPath}`
    );
  }

  console.log(
    `\nProcessed ${processedLocations.length} locations successfully`
  );
  console.log(`Results saved to: ${outputPath}`);
}

// Run the script
processLocations().catch(console.error);
