// const chalk = require('chalk');
// const prompt = require('prompt-sync')();
// const {
//   searchForBookMainMenuOption,
// } = require('../utils/searchForBookMainMenuOption');
// const { getReadingList } = require('../utils/getReadingList');
// const { exitProgram } = require('../utils/exitProgram');
// const { chooseBookToSave } = require('../utils/chooseBookToSave');

// function mainMenu() {
//   console.log(chalk.greenBright.inverse.bold('\nMain Menu\n'));

//   console.log(
//     chalk.white(
//       'Select an option: \n 1: Search for Books \n 2: View Reading List \n 3: Exit\n'
//     )
//   );

//   const menu = prompt();

//   if (`${menu}` == 1) {
//     searchForBookMainMenuOption();
//   } else if (`${menu}` == 2) {
//     getReadingList();
//   } else if (`${menu}` == 3) {
//     exitProgram();
//   } else {
//     console.log(
//       chalk.red.bold(`\nOption not available. Please try again!
//           `)
//     );
//     mainMenu();
//   }
// }

// function readingListMenu() {
//   console.log(chalk.greenBright.inverse.bold('\nReading List Menu\n'));
//   console.log(
//     chalk.white('Select an option: \n 1: Back to main menu \n 2: Exit \n')
//   );
//   const readingListMenu = prompt();

//   if (`${readingListMenu}` == 1) {
//     mainMenu();
//   } else if (`${readingListMenu}` == 2) {
//     exitProgram();
//   } else {
//     console.log(
//       chalk.red.bold(`\nOption not available. Please try again!
//           `)
//     );
//     mainMenu();
//   }
// }

// function searchMenu(bookArray) {
//   console.log(chalk.greenBright.inverse.bold('Search Menu\n'));

//   console.log(
//     chalk.white(
//       'Select an option: \n 1: Save book to reading list \n 2: Back to main menu\n '
//     )
//   );
//   const searchMenu = prompt();

//   if (`${searchMenu}` == 1) {
//     chooseBookToSave(bookArray);
//   } else if (`${searchMenu}` == 2) {
//     mainMenu();
//   } else {
//     console.log(
//       chalk.red.bold(`Option not available. Please try again!\n
//           `)
//     );

//     mainMenu();
//   }
// }

// module.exports = { mainMenu, readingListMenu, searchMenu };
