const chalk = require('chalk');
const prompt = require('prompt-sync')();

function errorMessageIncorrectBookName() {
    return console.log(
     chalk.red(
       '\nInvalid input. Please enter the book or phrase you would like to search.  '
      )
    );
}

function errorMessageIncorrectMenuOption() {
    return console.log(
      chalk.red.bold(`\nInvalid input. Please choose a number from the menu.
        `)
    );

}



module.exports = {errorMessageIncorrectBookName, errorMessageIncorrectMenuOption }
