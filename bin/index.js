#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const axios = require("axios");

const greeting = chalk.white.bold("Welcome to 8th Light's Google Books CLI API")

const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
};

const msgBox = boxen(greeting, boxenOptions);
console.log(msgBox);

let keyword = 'sun';

const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=4&projection=lite`;

axios.get(url, { headers: { Accept: "application/json" } })
    .then(result => {
        console.log({
            books: result.data.items});
    })
    .catch(error => { console.error(`error: ${error}`) });

//      .then((response) => {
//             if (!response.ok) throw new Error(response.status);
//             return response.json();
//           })
//  .catch(error => { console.log(`error: ${error}`) });
