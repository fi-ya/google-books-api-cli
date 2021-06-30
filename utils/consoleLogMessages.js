const chalk = require('chalk');
const prompt = require('prompt-sync')();

function consoleLogEnterBookName() {
    return console.log(chalk.white('\nWhat book would you like to search for? '));
}

function consoleLogSearchingBookName(search) {
    return console.log(chalk.cyan.inverse(`\nSearching for books about '${search}': `));
}

function viewBookData(book) {
  console.log(
    chalk.white.bold(`\n Book Number:`) +
      chalk.cyan.bold(` ${[book.menuID]}`) +
      chalk.red.bold(` Title:`) +
      chalk.white(` ${book.title} `) +
      chalk.red.bold(` Author(s):`) +
      chalk.white(` ${book.author} `) +
      chalk.red.bold(` Publisher: `) +
      chalk.white(` ${book.publisher} \n`)
  );
}



module.exports = {consoleLogEnterBookName, consoleLogSearchingBookName , viewBookData }
