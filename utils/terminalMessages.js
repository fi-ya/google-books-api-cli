const chalk = require('chalk');

function displayMainMenu() {
  return console.log(
    chalk.greenBright.inverse.bold('\nMain Menu\n') +
    chalk.white(
      'Select an option: \n 1: Search for Books \n 2: View Reading List \n 3: Exit\n'
    )
  );
}

function displayReadingListMenu() {
return console.log(
    chalk.greenBright.inverse.bold('\nReading List Menu\n') +
    chalk.white('Select an option: \n 1: Back to main menu \n 2: Exit \n')
  );
}

function displaySearchMenu() {
return console.log(
    chalk.greenBright.inverse.bold('Search Menu\n') +
    chalk.white(
      'Select an option: \n 1: Save book to reading list \n 2: Back to main menu\n '
    )
  );
}

function enterBookName() {
    return console.log(chalk.white('\nWhat book would you like to search for? '));
}

function searchingBookName(search) {
    return console.log(chalk.cyan.inverse(`\nSearching for books about '${search}': `));
}

function enterBookNumber() {
    return console.log(
    chalk.white(
      '\nInsert the book number you would like to save to your reading list? '
    )
  );
}

function savingBookNumber(chosenBookId) {
    return console.log(
      chalk.white(`\nSaving book number `) + chalk.red(`${chosenBookId}`)
    );
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

module.exports = { displayMainMenu, displayReadingListMenu, displaySearchMenu, enterBookName, searchingBookName ,enterBookNumber, savingBookNumber, viewBookData }
