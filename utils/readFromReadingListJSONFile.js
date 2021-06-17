const fs = require('fs');

function readFromReadingListJSONFile(readingList) {
  const file = fs.readFileSync(readingList);
  return JSON.parse(file);
}

module.exports = { readFromReadingListJSONFile };
