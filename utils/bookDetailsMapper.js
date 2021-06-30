const { viewBookData } = require('./viewBookData');
const { searchMenu } = require('../src/searchMenu');

function bookDetailsMapper(searchArray) {
  var bookArray = [];

  for (let i = 0; i < searchArray.length; i++) {
    var bookObj = searchArray[i].volumeInfo;

    var book = {
      menuID: i + 1,
      title: bookObj.title,
      author: bookObj.authors,
      publisher: bookObj.publisher === undefined ? 'Information Not Available': bookObj.publisher,
    };

    bookArray.push(book);
    viewBookData(book);
  }

  searchMenu(bookArray);
}

module.exports = { bookDetailsMapper };
