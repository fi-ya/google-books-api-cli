const chalk = require('chalk');
const prompt = require('prompt-sync')();
const { getBookDetails } = require('./getBookDetails');
const { consoleLogEnterBookName , consoleLogSearchingBookName } = require('./consoleLogMessages');
const { consoleLogErrorIncorrectBookName } = require('./errorMessages');

function searchForBookMainMenuOption() {

  consoleLogEnterBookName()
  let search = prompt();

  if (search.match(/^\s*$/)){

    consoleLogErrorIncorrectBookName();
    searchForBookMainMenuOption();
    
  }

  consoleLogSearchingBookName(search);

  getBookDetails(search);
}

module.exports = { searchForBookMainMenuOption };
