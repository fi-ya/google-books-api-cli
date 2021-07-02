const chalk = require('chalk');
const prompt = require('prompt-sync')();
const { getBookDetailsFromAPI } = require('./getBookDetails');
const { enterBookName , searchingBookName } = require('./terminalMessages');
const { errorMessageIncorrectBookName } = require('./errorMessages');

function searchForBookMainMenuOption() {

  console.log(enterBookName());
  
  const search = prompt().trim();

  if (search === '') {
    errorMessageIncorrectBookName();
    searchForBookMainMenuOption();
    return;
  }

  searchingBookName(search);
  getBookDetailsFromAPI(search);
}

module.exports = { searchForBookMainMenuOption };
