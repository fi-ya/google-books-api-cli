#!/usr/bin/env node
const { welcomeMessage } = require('./utils/terminalMessages');
const { mainMenu } = require('./src/mainMenu');

welcomeMessage();
mainMenu();
