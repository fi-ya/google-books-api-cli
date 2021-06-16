#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const axios = require("axios");
const prompt = require("prompt-sync")();
const fs = require('fs');

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green',
  backgroundColor: '#555555',
};

const greeting = chalk.white.bold("Welcome to 8th Light's Google Books CLI API");

const msgBox = boxen(greeting, boxenOptions);
console.log(msgBox);
mainMenu();

function mainMenu() {

    console.log(
      chalk.white(
        'Select Option & Press ENTER \n 1: Search for books \n 2: View Reading List \n 3: Exit \n')
    );
    const menu = prompt();
    console.log(
      chalk.white(`You have selected option  `) + chalk.red(`${menu} \n`)
    );

    if(`${menu}`== 1 ){
        const search = prompt(
          chalk.white('What book would you like to search for? ')
        );
        console.log(
          chalk.white(`Searching for books about: `) + chalk.red(`${search} \n`)
        );
        getBookDetails(search);

    } else if (`${menu}` == 2) {
        getReadingList();

    } else if (`${menu}` == 3) {
        process.exit(1);
    } else {
        console.log(
          chalk.red.bold(`Option not available. Please try again! \n
          `)
        );
        mainMenu();
    }
}

function searchMenu(bookArray) {

    const searchMenu = prompt(
        chalk.white(
            'Select Option \n 1: Save book to reading list \n 2: Exit to main menu'
        )
    );
    console.log(
        chalk.white(`You have selected option  `) + chalk.red(`${searchMenu} \n`)
    );

    if (`${searchMenu}` == 1) {
        const chosenBookId = prompt(
            chalk.white('Insert the book number you would like to save to your reading list?')
        );
        console.log(
            chalk.white(`Saving book number `) + chalk.red(`${chosenBookId} \n`)
        );

        if (`${chosenBookId}` > 0 && `${chosenBookId}` < 6) {
          let chosenBook = bookArray.find((x) => x.menuID == `${chosenBookId}`);
          // console.log(JSON.stringify(chosenBook));
          saveToReadingList(chosenBook);
        } else {
          console.log(
            chalk.red
              .bold(`Book number not available. Please pick a number between 1-5! \n
          `)
          );
          searchMenu();
        }

    } else if (`${searchMenu}` == 2) {
        mainMenu();
    } else {
        console.log(
            chalk.red.bold(`Option not available. Please try again! \n
          `)
        );
        searchMenu();
    }
}

function saveToReadingList(chosenBook) {
let readingListJSON = readFromReadingListJSONFile();

readingListJSON.readingList.push(chosenBook);
let data = JSON.stringify(readingListJSON, null, 2);
fs.writeFile('readingList.json', data, finished);

  function finished(err) {
    console.log('Saved to reading list!');
  }

  getReadingList();

}

function readFromReadingListJSONFile() {
    const file = fs.readFileSync('readingList.json');
    return JSON.parse(file);
}

function getReadingList() {

    let display = readFromReadingListJSONFile();
    console.log(`Your reading list: `);
    display.readingList.forEach(item => {

        console.log(` Title: ${item.title} + Author(s): ${item.author} + Publisher: ${item.publisher} `)
    });

    readingListMenu();

}

function readingListMenu(){

    const readingListMenu = prompt(
      chalk.white(
        'Select Option & Press ENTER \n 1: Back to main menu \n 2: Exit \n')
    );
    console.log(
      chalk.white(`You have selected option  `) + chalk.red(`${readingListMenu} \n`)
    );

    if(`${readingListMenu}`== 1 ){
        mainMenu();

    } else if (`${readingListMenu}` == 2) {        // view readingList.JSON
        process.exit(1);
    } else {
        console.log(
          chalk.red.bold(`Option not available. Please try again! \n
          `)
        );
        readingListMenu();
    }
}

function getBookDetails(search) {

    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=5&projection=lite`

    const searchResult = axios.get(url)
        .then(response => {
            let searchArray = response.data.items

                var bookArray= [];

            for (let i = 0; i < searchArray.length; i++) {

            var bookObj = searchArray[i].volumeInfo;

                var book ={
                    menuID: i+1,
                    title: bookObj.title,
                    author: bookObj.authors,
                    publisher: bookObj.publisher
                };
            bookArray.push(book);


                let id = searchArray[i].id;
                let title = bookObj.title;
                let author = bookObj.authors;
                let publisher = bookObj.publisher;

                console.log(
                    chalk.blue.bold(`Book Number:`) + ` ${[i + 1,]} Book id: ${id} Title: ${title} Author(s): ${author} Publisher: ${publisher} `
                );
            }
            searchMenu(bookArray);
        })
        .catch(error => { console.error(`error: ${error}`) });
}
