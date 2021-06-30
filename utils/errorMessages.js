const chalk = require('chalk');
const prompt = require('prompt-sync')();

function consoleLogErrorIncorrectBookName() {
    return console.log(
     chalk.red(
       '\nNothing selected. Please enter the book or phrase you would like to search.  '
      )
    );
}

module.exports = {consoleLogErrorIncorrectBookName }
