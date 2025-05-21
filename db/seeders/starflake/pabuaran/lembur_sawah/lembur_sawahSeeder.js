const db = require("../../../../config/database");

const location = {
  location_id: "32.02.37.2007", // Original adm4 code with dots
  subdistrict_name: "Lembur Sawah",
  district_name: "Pabuaran",
  city_name: "Sukabumi",
  province_name: "Jawa Barat",
  latitude: -7.1980472631,
  longitude: 106.8028994012,
  timezone: "Asia/Jakarta",
};

async function seedLocation() {
  try {
    console.log("Seeding location Lembur Sawah...");

    await db.query(
      `INSERT INTO forecasting.dim_location 
      (location_id, subdistrict_name, district_name, city_name, province_name, latitude, longitude, timezone) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      ON CONFLICT (location_id) DO NOTHING`,
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

    console.log("Location Lembur Sawah seeded successfully!");
  } catch (error) {
    console.error("Error seeding location Lembur Sawah:", error);
    throw error;
  }
}

module.exports = seedLocation;
