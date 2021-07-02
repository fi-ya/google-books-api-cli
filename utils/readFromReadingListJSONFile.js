const fs = require('fs');
// const{readingListTest} = require('../fixtures/')

function readFromReadingListJSONFile(readingList) {
  const file = fs.readFileSync(readingList);
  return JSON.parse(file);
}

module.exports = { readFromReadingListJSONFile };
