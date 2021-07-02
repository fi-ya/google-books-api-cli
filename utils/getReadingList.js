const chalk = require('chalk');
const { config } = require('../config');
const { readFromReadingListJSONFile } = require('./readFromReadingListJSONFile');
const { readingListMenu } = require('../src/readingListMenu');
const { readingListHeader, displayBookDetails } = require('./terminalMessages');

function getReadingList() {
  let displayReadingList = readFromReadingListJSONFile(config.readingListFile);
  console.log(readingListHeader());

  displayReadingList.readingList.forEach((item) => {
    displayBookDetails(item);
  });

  readingListMenu();
}

module.exports = { getReadingList };
