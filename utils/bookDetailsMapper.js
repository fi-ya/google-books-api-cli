const { viewBookData } = require('./terminalMessages');
const { searchMenu } = require('../src/searchMenu');

function bookDetailsMapper(booksDataArray) {
  var bookArray = [];

  for (let i = 0; i < booksDataArray.length; i++) {
    var bookObj = booksDataArray[i].volumeInfo;
    var book = {
      menuID: i + 1,
      title:
        bookObj.title === undefined
          ? 'Information Not Available'
          : bookObj.title,
      author:
        bookObj.authors === undefined
          ? 'Information Not Available'
          : bookObj.authors,
      publisher:
        bookObj.publisher === undefined
          ? 'Information Not Available'
          : bookObj.publisher,
    };
    bookArray.push(book);
    viewBookData(book);
  }

  searchMenu(bookArray);
}

module.exports = { bookDetailsMapper };
