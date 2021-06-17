const chalk = require('chalk');
const boxen = require('boxen');
const { config } = require('../config');3

function exitProgram() {

  const exitGreeting = chalk.white.bold(`Have a great day. Goodbye! 😊 `);
  const msgBox2 = boxen(exitGreeting, config.boxenOptions);
  console.log(msgBox2);
  process.exit(1);
}

module.exports = { exitProgram };
