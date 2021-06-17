// const chalk = require('chalk');
// const prompt = require('prompt-sync')();
// const { mainMenu } = require('./mainMenu');
// const { saveToReadingList } = require('../index'); // need to change at end


// function searchMenu(bookArray) {

//   console.log(chalk.greenBright.inverse.bold('Search Menu\n'));
//   console.log(
//     chalk.white(
//       'Select an option: \n 1: Save book to reading list \n 2: Back to main menu\n '
//     )
//   );
//   const searchMenu = prompt();

//   if (`${searchMenu}` == 1) {
//     /// function goToMainMenu
//     console.log(
//       chalk.white(
//         '\nInsert the book number you would like to save to your reading list? '
//       )
//     );
//     let chosenBookId = prompt();

//     if (`${chosenBookId}` > 0 && `${chosenBookId}` < 6) {
//       let chosenBook = bookArray.find((x) => x.menuID == `${chosenBookId}`);
//       console.log(
//         chalk.white(`\nSaving book number `) + chalk.red(`${chosenBookId}`)
//       );
//       if (chosenBook) saveToReadingList(chosenBook);
//     } else {
//       /// function goToMainMenu
//       console.log(
//         chalk.red.bold(`\nBook number not available. Try again!
//           `)
//       );
//       mainMenu();
//     }
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

// module.exports = { searchMenu };
