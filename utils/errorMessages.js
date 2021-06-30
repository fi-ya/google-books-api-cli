const chalk = require('chalk');
const prompt = require('prompt-sync')();

function errorMessageIncorrectBookName() {
    return console.log(
     chalk.red(
       '\nInput invalid. Please enter the book or phrase you would like to search.  '
      )
    );
}

module.exports = {errorMessageIncorrectBookName }
