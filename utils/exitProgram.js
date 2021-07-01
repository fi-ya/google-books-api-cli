const chalk = require('chalk');
const boxen = require('boxen');
const { config } = require('../config');
const { exitGreeting } = require('./terminalMessages');

function exitProgram() {
  const msgBox2 = boxen(exitGreeting(), config.boxenOptions);
  console.log(msgBox2);
  process.exit(1);
}

module.exports = { exitProgram };
