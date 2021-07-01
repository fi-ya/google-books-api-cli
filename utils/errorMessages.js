const chalk = require('chalk');

function errorMessageIncorrectBookName() {
     console.log(
     chalk.red(
       '\nInvalid input. Please enter the book or phrase you would like to search.  '
      )
    );
}

function errorMessageIncorrectMenuOption() {
     console.log(
      chalk.red.bold(`\nInvalid input. Please choose a number from the menu.
        `)
    );
}

function errorMessageIncorrectBookNumber() {
     console.log(
      chalk.red.bold(`\nInvalid input. Please choose from book number 1 to 5.
          `)
    );
}

function catchErrorMessage(error) {
  return console.error(chalk.red.bold(`error: ${error}`));
}

module.exports = {errorMessageIncorrectBookName, errorMessageIncorrectMenuOption, errorMessageIncorrectBookNumber, catchErrorMessage }
