const chalk = require('chalk');
const prompt = require('prompt-sync')();
const {
  searchForBookMainMenuOption,
} = require('../utils/searchForBookMainMenuOption');
const { getReadingList } = require('../utils/getReadingList');
const { exitProgram } = require('../utils/exitProgram');

function mainMenu() {

  console.log(chalk.greenBright.inverse.bold('\nMain Menu\n'));

  console.log(
    chalk.white(
      'Select an option: \n 1: Search for Books \n 2: View Reading List \n 3: Exit\n'
    )
  );

  const menu = prompt();

  if (`${menu}` == 1) {
    searchForBookMainMenuOption();
  } else if (`${menu}` == 2) {
    getReadingList();
  } else if (`${menu}` == 3) {
    exitProgram();
  } else {
    console.log(
      chalk.red.bold(`\nOption not available. Please try again!
          `)
    );
    mainMenu();
  }
}

module.exports = { mainMenu };
