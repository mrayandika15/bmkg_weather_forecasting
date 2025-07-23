const db = require('/Users/muhammadrayandika/projects/bmkg_weather_forecasting/config/database');
const provinces = [
  {
    "province_code": "32",
    "province_name": "Jawa Barat"
  }
];
async function seedProvinces() {
  try {
    console.log(`Starting to seed ${provinces.length} provinces for snowflake schema...`);
    for (const province of provinces) {
      await db.query(`INSERT INTO forecasting.dim_province (province_code, province_name) VALUES ($1, $2) ON CONFLICT (province_code) DO NOTHING`, [province.province_code, province.province_name]);
    }
    console.log('Provinces seeded successfully!');
  } catch (error) {
    console.error('Error seeding provinces:', error);
    throw error;
  }
}
module.exports = seedProvinces;