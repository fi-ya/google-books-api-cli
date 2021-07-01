const chalk = require('chalk');
const axios = require('axios');
const { bookDetailsMapper } = require('./bookDetailsMapper');
//const { config } = require('./config'); //DELETE IF NOT USING
const { catchErrorMessage } = require('./errorMessages');

function getBookDetails(search) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=5&projection=lite`;

  // const url = `config.googleBooksURL`;
  const searchResult = axios
    .get(url)
    .then((response) => {
      let searchArray = response.data.items;
      bookDetailsMapper(searchArray);
    })
    .catch((error) => {
      catchErrorMessage(error);
    });
}

module.exports = { getBookDetails };
