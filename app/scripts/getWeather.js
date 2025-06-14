const fs = require("fs");
const path = require("path");
const axios = require("axios");

// Read the API map JSON file
const apiMapPath = path.join(__dirname, "../../api-map.json");
const apiMap = JSON.parse(fs.readFileSync(apiMapPath, "utf8"));

// Helper function to create delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWeatherData(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    const { data } = response.data;

    // Extract unique weather data
    const uniqueWeatherData = new Set();
    const processedWeather = [];

    data.forEach((locationData) => {
      locationData.cuaca.forEach((dayData) => {
        dayData.forEach((weatherData) => {
          // Create a unique key for each weather type
          const weatherKey = `${weatherData.weather}-${weatherData.weather_desc}-${weatherData.weather_desc_en}`;

          if (!uniqueWeatherData.has(weatherKey)) {
            uniqueWeatherData.add(weatherKey);
            processedWeather.push({
              weather_id: weatherData.weather,
              weather_desc: weatherData.weather_desc,
              weather_desc_en: weatherData.weather_desc_en,
              image_url: weatherData.image,
            });
          }
        });
      });
    });

    return processedWeather;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error(`Rate limit hit for ${apiUrl}`);
      return { error: "RATE_LIMIT", apiUrl };
    }
    console.error(`Error fetching data from ${apiUrl}:`, error.message);
    return null;
  }
}

async function processWeather() {
  const locations = apiMap.locations;
  const processedWeather = [];
  const failedLocations = [];
  const BATCH_SIZE = 30;
  const DELAY_MS = 30000; // 30 seconds

  for (let i = 0; i < locations.length; i++) {
    const location = locations[i];
    console.log(
      `Processing weather data for ${location.kelurahan}, ${location.kecamatan}...`
    );

    const weatherData = await fetchWeatherData(location.api_url);

    if (weatherData) {
      if (weatherData.error === "RATE_LIMIT") {
        failedLocations.push({
          kecamatan: location.kecamatan,
          kelurahan: location.kelurahan,
          api_url: location.api_url,
          error: "RATE_LIMIT",
        });
      } else {
        // Merge new weather data with existing data, avoiding duplicates
        weatherData.forEach((newWeather) => {
          const isDuplicate = processedWeather.some(
            (existing) => existing.weather_id === newWeather.weather_id
          );
          if (!isDuplicate) {
            processedWeather.push(newWeather);
          }
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

  // Save the processed weather data to a JSON file
  const outputPath = path.join(__dirname, "../data/weather-data.json");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(processedWeather, null, 2));

  // Save the failed locations to a separate JSON file
  if (failedLocations.length > 0) {
    const errorOutputPath = path.join(
      __dirname,
      "../../api-map-weather-error.json"
    );
    fs.writeFileSync(errorOutputPath, JSON.stringify(failedLocations, null, 2));
    console.log(
      `\nSaved ${failedLocations.length} failed locations to: ${errorOutputPath}`
    );
  }

  console.log(
    `\nProcessed ${processedWeather.length} unique weather conditions successfully`
  );
  console.log(`Results saved to: ${outputPath}`);
}

// Run the script
processWeather().catch(console.error);
