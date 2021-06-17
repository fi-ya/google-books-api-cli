const chalk = require('chalk');
const { config } = require('../config');
const { readFromReadingListJSONFile } = require('./readFromReadingListJSONFile');
const { readingListMenu } = require('../src/readingListMenu');

function getReadingList() {
  let displayReadingList = readFromReadingListJSONFile(config.readingListFile);

  console.log(chalk.red.bold.inverse(`\nYour reading list: `));

  displayReadingList.readingList.forEach((item) => {
    console.log(
      chalk.red.bold(` \n Title:`) +
        chalk.white(` ${item.title} `) +
        chalk.red.bold(` Author(s):`) +
        chalk.white(` ${item.author} `) +
        chalk.red.bold(` Publisher: `) +
        chalk.white(` ${item.publisher}`)
    );
  });

  readingListMenu();
}

module.exports = { getReadingList };
