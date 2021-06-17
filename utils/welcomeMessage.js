const chalk = require('chalk');
const boxen = require('boxen');
const { config } = require('../config');

function welcomeMessage() {
  const greeting = chalk.white.bold(
    "Welcome to 8th Light's Google Books CLI API"
  );

  const msgBox = boxen(greeting, config.boxenOptions);

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
}

module.exports = { welcomeMessage };
