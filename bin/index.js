#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const axios = require("axios");
const prompt = require("prompt-sync")();

// const options = yargs
//   .usage('Usage: -n <name>')
//   .option('n', {
//     alias: 'name',
//     describe: 'Your name',
//     type: 'string',
//     demandOption: false,
//   })
//   .option('s', {
//     alias: 'search',
//     describe: 'Search term',
//     type: 'string',
//   }).argv;

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green',
  backgroundColor: '#555555',
};

const greeting = chalk.white.bold("Welcome to 8th Light's Google Books CLI API");

// const userName = `Hello, ${options.name}!`

const msgBox = boxen(greeting, boxenOptions);
console.log(msgBox);

const name = prompt(chalk.white.bold('What is your name? '));
console.log(chalk.red.bold(`Hey there ${name} `));

const search = prompt(chalk.white.bold('What book would you like to search for? '));
console.log(chalk.red.bold(`Searching for books about: ${search} `));
// console.log(userName);

// if (options.search) {
//   console.log(`Searching for books about ${options.search}...`);
// } else {
//   console.log("Here's a random book for you:");
// }

// let keyword = 'sun';

// const url = options.search   ? `https://www.googleapis.com/books/v1/volumes?q=${options.search}&printType=books&startIndex=0&maxResults=4&projection=lite`
//   : `https://www.googleapis.com/books/v1/volumes?q=${keyword}&printType=books&startIndex=0&maxResults=4&projection=lite`;

const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=4&projection=lite`

axios.get(url)
    .then(response => {
        console.log(chalk.blue(`Book Title:`) + ` ${response.data.items[0].volumeInfo.title}`);
        console.log(chalk.blue(`Author(s):`) + ` ${response.data.items[0].volumeInfo.authors}`);
        console.log(chalk.blue(`Publisher:`) + ` ${response.data.items[0].volumeInfo.publisher}`);

        // console.log({
        //     books: result.data.items});
    })
    .catch(error => { console.error(`error: ${error}`) });

//      .then((response) => {
//             if (!response.ok) throw new Error(response.status);
//             return response.json();
//           })
//  .catch(error => { console.log(`error: ${error}`) });





// Second approach
// axios
//   .get(url)
//     .then((response) => {
//          if (options.search) {
//            // if searching for jokes, loop over the results
//              response.data.results.forEach((id) => {
//                 console.log(
//                   chalk.blue(`Book Title:`) +
//                     ` ${response.data.items[0].volumeInfo.title}`
//                 );
//                 console.log(
//                   chalk.blue(`Author(s):`) +
//                     ` ${response.data.items[0].volumeInfo.authors}`
//                 );
//                 console.log(
//                   chalk.blue(`Publisher:`) +
//                     ` ${response.data.items[0].volumeInfo.publisher}`
//                 );


//             //  console.log('\n' + j.joke);
//            });
//            if (response.data.results.length === 0) {
//              console.log("no books found :'(");
//            }
//          } else {
//            console.log(response.data);
//          }
//     // console.log({
//     //     books: result.data.items});
//   })
//   .catch((error) => {
//     console.error(`error: ${error}`);
//   });
