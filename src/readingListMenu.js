const chalk = require('chalk');
const prompt = require('prompt-sync')();
const { exitProgram } = require('../utils/exitProgram');
const { errorMessageIncorrectMenuOption } = require('../utils/errorMessages');
const { displayReadingListMenu } = require('../utils/terminalMessages');


function readingListMenu() {
  const { mainMenu } = require('./mainMenu');

  displayReadingListMenu();
  const readingListMenu = prompt();

  if (`${readingListMenu}` == 1) {

    mainMenu();
  } else if (`${readingListMenu}` == 2) {
    exitProgram();
  } else {
    errorMessageIncorrectMenuOption();
    mainMenu();
  }
}

 module.exports = { readingListMenu };
