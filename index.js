#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const axios = require('axios');
const prompt = require('prompt-sync')();
const fs = require('fs');
const { config } = require('./config')
// const { mainMenu } = require('./src/mainMenu');
// const { searchMenu } = require('./src/searchMenu');

const boxenOptions = config.boxenOptions;

const greeting = chalk.white.bold(
  "Welcome to 8th Light's Google Books CLI API"
);

const msgBox = boxen(greeting, boxenOptions);
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

mainMenu();

function mainMenu() {
  console.log(chalk.greenBright.inverse.bold('\nMain Menu\n'));
  console.log(
    chalk.white(
      'Select an option: \n 1: Search for Books \n 2: View Reading List \n 3: Exit\n'
    )
  );
  const menu = prompt();

  if (`${menu}` == 1) {
     console.log(chalk.white('\nWhat book would you like to search for? '));
     let search = prompt();

      if (`${search}` === "") {
          console.log(
            chalk.red('\nNothing selected. Please enter the book or phrase you would like to search.  ')
          );
        console.log(chalk.white('\nWhat book would you like to search for? '));
         search = prompt();
      }

    console.log(chalk.cyan.inverse(`\nBooks about '${search}': `));
    getBookDetails(search);

  } else if (`${menu}` == 2) {
    
    getReadingList();

  } else if (`${menu}` == 3) {

    exitProgram ()

  } else {

    console.log(
      chalk.red.bold(`\nOption not available. Please try again!
          `)
    );
    mainMenu();
  }
}


function exitProgram() {

const exitGreeting = chalk.white.bold(`Have a great day. Goodbye! 😊 `);
const msgBox2 = boxen(exitGreeting, boxenOptions);
console.log(msgBox2);
process.exit(1);

}



function searchMenu(bookArray) {
  console.log(chalk.greenBright.inverse.bold('Search Menu\n'));
  console.log(
    chalk.white(
      'Select an option: \n 1: Save book to reading list \n 2: Back to main menu\n '
    )
  );
  const searchMenu = prompt();

  if (`${searchMenu}` == 1) {
    /// function goToMainMenu
    console.log(
      chalk.white(
        '\nInsert the book number you would like to save to your reading list? '
      )
    );
    let chosenBookId = prompt();

    if (`${chosenBookId}` > 0 && `${chosenBookId}` < 6) {
      let chosenBook = bookArray.find((x) => x.menuID == `${chosenBookId}`);
      console.log(
        chalk.white(`\nSaving book number `) + chalk.red(`${chosenBookId}`)
      );
      if (chosenBook) saveToReadingList(chosenBook);
    } else {
      /// function goToMainMenu
      console.log(
        chalk.red.bold(`\nBook number not available. Try again!
          `)
      );
      mainMenu();
    }
  } else if (`${searchMenu}` == 2) {
    mainMenu();
  } else {
      console.log(
          chalk.red.bold(`Option not available. Please try again!\n
          `)
      );
    mainMenu();

  }
}

function saveToReadingList(chosenBook) {
  let readingListJSON = readFromReadingListJSONFile(config.readingListFile);

  readingListJSON.readingList.push(chosenBook);

  let data = JSON.stringify(readingListJSON, null, 2);
  fs.writeFile(config.readingListFile, data, finished);

  function finished(err) {
    console.log('\nSaved to reading list!');
    getReadingList();
  }
}

function readFromReadingListJSONFile(readingList) {
  const file = fs.readFileSync(readingList);
  return JSON.parse(file);
}

function getReadingList() {

  let displayReadingList = readFromReadingListJSONFile(config.readingListFile);

  console.log(chalk.red.bold.inverse(`\nYour reading list: `));

  displayReadingList.readingList.forEach((item) => {

    console.log(
      chalk.red.bold(` \n Title:`) +
        chalk.white(` ${item.title} `) +
        chalk.red.bold(` Author(s):`) +
        chalk.white(` ${item.author} `) +
        chalk.red.bold(` Publisher: `) +
        chalk.white(` ${item.publisher}`)
    );
  });

  readingListMenu();
}

function readingListMenu() {
  console.log(chalk.greenBright.inverse.bold('\nReading List Menu\n'));
  console.log(
    chalk.white('Select an option: \n 1: Back to main menu \n 2: Exit \n')
  );
  const readingListMenu = prompt();

  if (`${readingListMenu}` == 1) {
    mainMenu();
  } else if (`${readingListMenu}` == 2) {
    exitProgram();
  } else {
    console.log(
      chalk.red.bold(`\nOption not available. Please try again!
          `)
    );
    mainMenu();
  }
}

function getBookDetails(search) {

  //seprate function axios
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=5&projection=lite`;

  // const url = `config.googleBooksURL`;
  const searchResult = axios
    .get(url)
    .then((response) => {
      let searchArray = response.data.items;

      var bookArray = [];

      // separate funtion dataMapper (bookDetailsMapper)
      for (let i = 0; i < searchArray.length; i++) {
        var bookObj = searchArray[i].volumeInfo;

        var book = {
          menuID: i + 1,
          title: bookObj.title,
          author: bookObj.authors,
          publisher: bookObj.publisher,
        };

        bookArray.push(book);

        // function view books/data
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
      searchMenu(bookArray);
    })
    .catch((error) => {
      console.error(`error: ${error}`);
    });
}

module.exports = {
  mainMenu,
  searchMenu,
  saveToReadingList,
  readFromReadingListJSONFile,
  getReadingList,
  readingListMenu,
  getBookDetails,
  exitProgram,
};
