const chalk = require('chalk');
const axios = require('axios');
const { bookDetailsMapper } = require('./bookDetailsMapper');
const { catchErrorMessage } = require('./errorMessages');

function getBookDetailsFromAPI(search) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=5&projection=lite`;

  const searchResult = axios
    .get(url)
    .then((response) => {
      let booksDataArray = response.data.items;
      bookDetailsMapper(booksDataArray);
    })
    .catch((error) => {
      catchErrorMessage(error);
    });
}

module.exports = {
  getBookDetailsFromAPI,
};
