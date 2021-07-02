const chalk = require('chalk');
const prompt = require('prompt-sync')();
const { chooseBookToSave } = require('../utils/chooseBookToSave');
const { errorMessageIncorrectMenuOption } = require('../utils/errorMessages');
const { displaySearchMenu } = require('../utils/terminalMessages');

function searchMenu(bookArray) {
  const { mainMenu } = require('./mainMenu');
  console.log(displaySearchMenu());
  const searchMenu = prompt();

  if (`${searchMenu}` == 1) {
    chooseBookToSave(bookArray);
  } else if (`${searchMenu}` == 2) {
    mainMenu();
  } else {
    errorMessageIncorrectMenuOption();
    mainMenu();
  }
}

module.exports = { searchMenu };
