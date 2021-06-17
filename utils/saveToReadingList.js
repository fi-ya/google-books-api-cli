const fs = require('fs');
const { config } = require('../config');
const {
  readFromReadingListJSONFile,
} = require('./readFromReadingListJSONFile');
const { getReadingList } = require('./getReadingList');

function saveToReadingList(chosenBook) {
  let readingListJSON = readFromReadingListJSONFile(config.readingListFile);

  readingListJSON.readingList.push(chosenBook);

  let data = JSON.stringify(readingListJSON, null, 2);
  fs.writeFile(config.readingListFile, data, finished);

  function finished(err) {
    if (err) {
      return console.log(err);
    }
    console.log('\nSaved to reading list!');
    getReadingList();
  }
}

module.exports = { saveToReadingList };
