const chalk = require('chalk');
const prompt = require('prompt-sync')();

function consoleLogEnterBookName() {
    return console.log(chalk.white('\nWhat book would you like to search for? '));
}

function consoleLogSearchingBookName(search) {
    return console.log(chalk.cyan.inverse(`\nSearching for books about '${search}': `));
}




module.exports = {consoleLogEnterBookName, consoleLogSearchingBookName }
