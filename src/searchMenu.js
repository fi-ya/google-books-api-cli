const chalk = require('chalk');
const prompt = require('prompt-sync')();
const { chooseBookToSave } = require('../utils/chooseBookToSave');
const { mainMenu } = require('./mainMenu');

function searchMenu(bookArray) {
  console.log(chalk.greenBright.inverse.bold('Search Menu\n'));

  console.log(
    chalk.white(
      'Select an option: \n 1: Save book to reading list \n 2: Back to main menu\n '
    )
  );
  const searchMenu = prompt();

  if (`${searchMenu}` == 1) {
    chooseBookToSave(bookArray);
  } else if (`${searchMenu}` == 2) {
    mainMenu();
  } else {
    console.log(
      chalk.red.bold(`Option not available. Please try again!\n
          `)
    );

    mainMenu();
  }
}

module.exports = { searchMenu };
