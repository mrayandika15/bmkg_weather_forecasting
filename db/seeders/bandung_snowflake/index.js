const seedProvinces = require('./provinceSeeder');
const seedCities = require('./citySeeder');
const seedDistricts = require('./districtSeeder');
const seedSubdistricts = require('./subdistrictSeeder');
const seedWeather = require('./weatherSeeder');
module.exports = [seedProvinces, seedCities, seedDistricts, seedSubdistricts, seedWeather];