const chalk = require('chalk');
const prompt = require('prompt-sync')();
const {
  searchForBookMainMenuOption,
} = require('../utils/searchForBookMainMenuOption');
const { exitProgram } = require('../utils/exitProgram');
const { getReadingList } = require('../utils/getReadingList');
const { errorMessageIncorrectMenuOption } = require('../utils/errorMessages');
const { displayMainMenu } = require('../utils/terminalMessages');

function mainMenu() {
  displayMainMenu();

  const menu = prompt();

  if (`${menu}` == 1) {
    searchForBookMainMenuOption();
  } else if (`${menu}` == 2) {
    getReadingList();
  } else if (`${menu}` == 3) {
    exitProgram();
  } else {

    errorMessageIncorrectMenuOption();
    mainMenu();
  }
}

module.exports = { mainMenu } ;
