// const chalk = require('chalk');
// const boxen = require('boxen');
// const prompt = require('prompt-sync')();
// const { getBookDetails, getReadingList } = require('../index'); // need to change at end
// // const { getReadingList } = require('../index');// need to change at end

// function mainMenu() {

//   console.log(chalk.greenBright.inverse.bold('\nMain Menu\n'));
//   console.log(
//     chalk.white(
//       'Select an option: \n 1: Search for Books \n 2: View Reading List \n 3: Exit\n'
//     )
//   );
//   const menu = prompt();

//     if (`${menu}` == 1) {

//     console.log(chalk.white('\nWhat book would you like to search for? '));
//     let search = prompt();

//     if (`${search}` === '') {
//       console.log(
//         chalk.red(
//           '\nNothing selected. Please enter the book or phrase you would like to search.  '
//         )
//       );
//       console.log(chalk.white('\nWhat book would you like to search for? '));
//       search = prompt();
//     }

//     console.log(chalk.cyan.inverse(`\nBooks about '${search}': `));
//         getBookDetails(search);

//     } else if (`${menu}` == 2) {

//         getReadingList();

//     } else if (`${menu}` == 3) {

//     const exitGreeting = chalk.white.bold(`Have a great day. Goodbye! 😊 `);
//     const msgBox2 = boxen(exitGreeting, boxenOptions);
//     console.log(msgBox2);
//         process.exit(1);

//     } else {

//     console.log(
//       chalk.red.bold(`\nOption not available. Please try again!
//           `)
//     );
//     mainMenu();
//   }
// }

// module.exports = { mainMenu };
