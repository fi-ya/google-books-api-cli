const chalk = require('chalk');
const prompt = require('prompt-sync')();
const { getBookDetails } = require('./getBookDetails');
const { enterBookName , searchingBookName } = require('./terminalMessages');
const { errorMessageIncorrectBookName } = require('./errorMessages');

function searchForBookMainMenuOption() {

  enterBookName()
  const search = prompt().trim();

  if (search === '') {
    errorMessageIncorrectBookName();
    searchForBookMainMenuOption();
    return;
  }

  searchingBookName(search);
  getBookDetails(search);
}

module.exports = { searchForBookMainMenuOption };
