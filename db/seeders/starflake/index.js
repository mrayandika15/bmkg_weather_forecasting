const fs = require('fs');
const path = require('path');

// Function to recursively get all seeder files
function getAllSeederFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(getAllSeederFiles(filePath));
    } else if (file.endsWith('Seeder.js') && file !== 'index.js') {
      results.push(filePath);
    }
  }
  
  return results;
}

// Get all seeder files
const seederFiles = getAllSeederFiles(__dirname);

// Import and export all seeders
const seeders = seederFiles.map(file => {
  const seeder = require(file);
  return seeder;
});

module.exports = seeders;
