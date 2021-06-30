const chalk = require('chalk');
const prompt = require('prompt-sync')();
const { saveToReadingList } = require('./saveToReadingList');
const {errorMessageIncorrectBookNumber} = require('./errorMessages')
const { enterBookNumber, savingBookNumber } = require('./terminalMessages')

function chooseBookToSave(bookArray) {

  enterBookNumber();
  let chosenBookId = prompt();

  if (`${chosenBookId}` > 0 && `${chosenBookId}` < 6) {
    let chosenBook = bookArray.find((x) => x.menuID == `${chosenBookId}`);

    savingBookNumber(chosenBookId);

    if (chosenBook) saveToReadingList(chosenBook);
  } else {

    errorMessageIncorrectBookNumber();
    chooseBookToSave(bookArray)

  }
}

module.exports = { chooseBookToSave };
