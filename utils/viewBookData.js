const chalk = require('chalk');

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

module.exports = { viewBookData };
