const chalk = require('chalk');
const prompt = require('prompt-sync')();
const { getBookDetails } = require('./getBookDetails');

function searchForBookMainMenuOption() {
  console.log(chalk.white('\nWhat book would you like to search for? '));
  let search = prompt();

  if (`${search}` === '') {
    console.log(
      chalk.red(
        '\nNothing selected. Please enter the book or phrase you would like to search.  '
      )
    );
    console.log(chalk.white('\nWhat book would you like to search for? '));
    search = prompt();
  }

  console.log(chalk.cyan.inverse(`\nBooks about '${search}': `));

  getBookDetails(search);
}

module.exports = { searchForBookMainMenuOption };
