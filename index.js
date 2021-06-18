#!/usr/bin/env node
const { welcomeMessage } = require('./utils/welcomeMessage');
const { mainMenu } = require('./src/mainMenu');

welcomeMessage();
mainMenu();
