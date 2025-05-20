const fs = require('fs');
const path = require('path');

// Get all seeder files
const seederFiles = fs.readdirSync(__dirname)
  .filter(file => file.endsWith('Seeder.js') && file !== 'index.js');

// Import and export all seeders
const seeders = seederFiles.map(file => {
  const seeder = require(`./${file}`);
  return seeder;
});

module.exports = seeders;
