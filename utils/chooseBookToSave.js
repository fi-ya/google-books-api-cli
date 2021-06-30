const chalk = require('chalk');
const prompt = require('prompt-sync')();
const { saveToReadingList } = require('./saveToReadingList');

function chooseBookToSave(bookArray) {

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
    console.log(
      chalk.red.bold(`\nBook number not available. Try again!
          `)
    );
    chooseBookToSave(bookArray)

  }
}

module.exports = { chooseBookToSave };
