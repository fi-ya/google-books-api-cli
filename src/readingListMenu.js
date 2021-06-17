const chalk = require('chalk');
const prompt = require('prompt-sync')();
const { exitProgram } = require('../utils/exitProgram');
const { mainMenu } = require('./mainMenu');

function readingListMenu() {
  console.log(chalk.greenBright.inverse.bold('\nReading List Menu\n'));
  console.log(
    chalk.white('Select an option: \n 1: Back to main menu \n 2: Exit \n')
  );
  const readingListMenu = prompt();

  if (`${readingListMenu}` == 1) {
    mainMenu();
  } else if (`${readingListMenu}` == 2) {
    exitProgram();
  } else {
    console.log(
      chalk.red.bold(`\nOption not available. Please try again!
          `)
    );
    mainMenu();

  }
}
module.exports = { readingListMenu };
