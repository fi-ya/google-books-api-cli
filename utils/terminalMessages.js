const chalk = require('chalk');
const boxen = require('boxen');
const { config } = require('../config');

function welcomeMessage() {
  const greeting = chalk.white.bold(
    "Welcome to 8th Light's Google Books CLI API"
  );

  const msgBox = boxen(greeting, config.boxenOptions);

  console.log(msgBox);

  console.log(
    chalk.bold.inverse.cyanBright(`Hello!`) +
      chalk.cyan(
        `\nWelcome to my command line application that allows you to use the Google Books API to search for books and construct a reading list.`
      ) +
      chalk.cyan(
        `\nUse your keyboard to enter the number of the option you would like from the menu shown below.`
      ) +
      chalk.cyan.bold(`\nHave fun finding interesting new things to explore! `)
  );
}

function displayMainMenu() {
   console.log(
    chalk.greenBright.inverse.bold('\nMain Menu\n') +
    chalk.white(
      'Select an option: \n 1: Search for Books \n 2: View Reading List \n 3: Exit\n'
    )
  );
}

function displayReadingListMenu() {
 console.log(
    chalk.greenBright.inverse.bold('\nReading List Menu\n') +
    chalk.white('Select an option: \n 1: Back to main menu \n 2: Exit \n')
  );
}

function displaySearchMenu() {
 console.log(
    chalk.greenBright.inverse.bold('Search Menu\n') +
    chalk.white(
      'Select an option: \n 1: Save book to reading list \n 2: Back to main menu\n '
    )
  );
}

function enterBookName() {
     console.log(chalk.white('\nWhat book would you like to search for? '));
}

function searchingBookName(search) {
     console.log(chalk.cyan.inverse(`\nSearching for books about '${search}': `));
}

function enterBookNumber() {
     console.log(
    chalk.white(
      '\nInsert the book number you would like to save to your reading list? '
    )
  );
}

function savingBookNumber(chosenBookId) {
     console.log(
      chalk.white(`\nSaving book number `) + chalk.red(`${chosenBookId}`)
    );
}

function readingListHeader() {
   console.log(chalk.red.bold.inverse(`\nYour reading list: `));
}

function displayBookDetails(item) {
  console.log(
      chalk.red.bold(` \n Title:`) +
        chalk.white(` ${item.title} `) +
        chalk.red.bold(` Author(s):`) +
        chalk.white(` ${item.author} `) +
        chalk.red.bold(` Publisher: `) +
        chalk.white(` ${item.publisher}`)
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

function displaySavedToReadingList() {
  console.log('\nSaved to reading list!');
}

function exitGreeting() {
  return chalk.white.bold(`Have a great day. Goodbye! 😊 `);
}

module.exports = { welcomeMessage, displayMainMenu, displayReadingListMenu, displaySearchMenu, enterBookName, searchingBookName ,enterBookNumber, savingBookNumber, readingListHeader,displayBookDetails, viewBookData , displaySavedToReadingList, exitGreeting}
