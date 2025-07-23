const db = require('/Users/muhammadrayandika/projects/bmkg_weather_forecasting/config/database');
const cities = [
  {
    "city_code": "04",
    "city_name": "Bandung",
    "province_code": "32"
  },
  {
    "city_code": "17",
    "city_name": "Bandung Barat",
    "province_code": "32"
  },
  {
    "city_code": "73",
    "city_name": "Kota Bandung",
    "province_code": "32"
  },
  {
    "city_code": "01",
    "city_name": "Bogor",
    "province_code": "32"
  }
];
async function seedCities() {
  try {
    console.log(`Starting to seed ${cities.length} cities for snowflake schema...`);
    for (const city of cities) {
      const provinceRes = await db.query('SELECT province_id FROM forecasting.dim_province WHERE province_code = $1', [city.province_code]);
      if (provinceRes.rows.length > 0) {
        const province_id = provinceRes.rows[0].province_id;
        await db.query(`INSERT INTO forecasting.dim_city (city_code, city_name, province_id) VALUES ($1, $2, $3) ON CONFLICT (city_code) DO NOTHING`, [city.city_code, city.city_name, province_id]);
      } else {
        console.error(`Province with code ${city.province_code} not found for city ${city.city_name}`);
      }
    }
    console.log('Cities seeded successfully!');
  } catch (error) {
    console.error('Error seeding cities:', error);
    throw error;
  }
}
module.exports = seedCities;