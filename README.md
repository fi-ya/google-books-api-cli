# Google Books Api CLI
**8th Light Technical Assessment**
---
A command line application that allows you to use the Google Books API to search for books and construct a reading list.

# Acceptance Criteria
* Type in a query and display a list of 5 books matching that query.
* Each item in the list should include the book's author, title, and publishing company.
* A user should be able to select a book from the five displayed to save to a “Reading List”
* View a “Reading List” with all the books the user has selected from their queries -- this is a local reading list and not tied to Google Books’s account features.

![Random GIF](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)

# Table of contents
- [Google Books Api CLI](#google-books-api-cli)
  - [**8th Light Technical Assessment**](#8th-light-technical-assessment)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Testing](#testing)
- [Usage](#usage)
    - [Search for book and save to reading list](#search-for-book-and-save-to-reading-list)
    - [View reading list and exit program](#view-reading-list-and-exit-program)
- [Dependencies](#dependencies)
- [Issues to resolve](#issues-to-resolve)
- [Bug fixes](#bug-fixes)
- [Further improvements](#further-improvements)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)

To use this project,
- clone this repo on your device using the command `git clone`
- `cd` into google-books-api-cli folder
- Run `npm install` to install dependencies
- Run `node .` or `node index.js` to start CLI
# Testing
[(Back to top)](#table-of-contents)

There are three ways you can run jest tests for this application:

```
npm run test  // To run all tests once
npm run watch // To continuously keep running tests in the background
npm run coverage // To run tests and get a coverage report
```
Note: make sure you are in the correct directory before running tests.

# Usage
[(Back to top)](#table-of-contents)

There are three menu's in this CLI program, mainMenu, readingListMenu & searchMenu.Below are screenshots of a typical user journey of searching for a book, saving a book, viewing a the reading list and exiting the program.

### Search for book and save to reading list

![Screenshot 2021-06-18 at 15 49 08](https://user-images.githubusercontent.com/69358550/122579365-bf451680-d04c-11eb-9885-146b9fa65c05.png)

### View reading list and exit program
![Screenshot 2021-06-18 at 15 53 06](https://user-images.githubusercontent.com/69358550/122579906-50b48880-d04d-11eb-9ab6-0371c783f100.png)

# Dependencies
[(Back to top)](#table-of-contents)
- [axios](https://www.npmjs.com/package/axios):
Promise based HTTP client for the browser and node.js
- [boxen](https://www.npmjs.com/package/boxen): Create boxes in the terminal
- [chalk](https://www.npmjs.com/package/chalk#256-and-truecolor-color-support): Terminal string styling done right
- [prompt-sync](https://www.npmjs.com/package/prompt-sync): A sync prompt for node. very simple. no C++ bindings and no bash scripts.

# Issues to resolve
[(Back to top)](#table-of-contents)

***Circular Dependency***

I came unstuck with this error when i tried to return back to the mainMenu when on the readingListMenu or searchMenu.

![typeError-reading-list-menu](https://user-images.githubusercontent.com/69358550/122571047-39bd6880-d044-11eb-877b-bec2ff9e2750.jpg)

After triple checking that my imports and exports were correct, i couldn't understand why as other function calls were processing (ie exitProgram). After some research, i realised that it was due to circular dependency.
I tried to solve this by forward declaring the exports object before requiring any other modules, to no success.Then i tried to require mainMenu inside of searchMenu and readingListMenu functions and this worked. I am sure that this is a hack fix and there is another more sophisticated way of resolving this issue given more time.

It seems this error persists and can be seen when the google books API results are displayed as seen here. This error appear after refactoring the code from index.js file ![Screenshot 2021-06-18 at 23 33 02](https://user-images.githubusercontent.com/69358550/122621469-8da06f80-d08d-11eb-9d4d-eb153ccc12a3.png)


This is the [resource](https://stackoverflow.com/questions/10869276/how-to-deal-with-cyclic-dependencies-in-node-js) that helped me with this issue.

***Testing***
I had not used jest, prior to this assessment and was able to run tests to see if function existed, if data was returned correctly and run mockExit tests. However i struggled to mock axios and fs files, so was unable to test the API call and readFileSync and writeFile functions. Furthermore i understand the benefit of modular functions in carrying out successful unit tests.

This is an error i kept facing and was unable to find a solution.

*Error:* I tried to run tests to check that the correct message was being logged to the console, in `terminalMessages.js` however i kept getting a `deep equality` error for some functions (displayReadingListMenu, displaySearchMenu,enterBookName,enterBookNumber) and not others(readingListHeader, displaySavedToReadingList, exitGreeting).
![Screenshot 2021-07-02 at 16 58 47](https://user-images.githubusercontent.com/69358550/124301020-238ccd80-db57-11eb-867f-b21906fe9bf6.png)


# Bug fixes
[(Back to top)](#table-of-contents)

My technical assessment feedback raised areas of improvement. The following details how i went about solving these bugs.

***User enters an incorrect input when choosing which book to save***

I had used an if/else statement to handle any incorrect inputs in `chooseBookToSave` function whereby if the user inputs a number outside the acceptable range (1-5) I had called `mainMenu` function. However, this `mainMenu` function did not run due to the circular dependency [issue](#issues-to-resolve). Hence, I fixed this bug by calling `chooseBookToSave(bookArray)` recursively instead. This meant that for example, if number 8 was entered, an error message would log in the console and the user would be prompted to insert a book number.


***User enters only whitespace when searching for a book***

I had used an if statement in `searchForBookMainMenuOption` to catch an empty string input and subsequently display an error message. However i did not account for whitespace.
Therefore to solve this edge case, I used [trim method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) to remove whitespace from both ends of the `search` string. I refactored the code by separating the console log messages into their own files, `terminalMessages`, `errorMessages`. Then i ended the if statement by recursively calling `searchForBookMainMenuOption()`.

Initial:
```javascript
let search = prompt();

  if (`${search}` === '') {
    console.log(
      chalk.red(
        '\nNothing selected. Please enter the book or phrase you would like to search.  '
      )
    );
    console.log(chalk.white('\nWhat book would you like to search for? '));
    search = prompt();
  }
```
Solution:
```javascript
const search = prompt().trim();

  if (search === '') {
    errorMessageIncorrectBookName();
    searchForBookMainMenuOption();
    return;
  }
```

***Google API returns undefined where a field does not exist***
There were times when the author or publisher of a book returned undefined, for example:
![Screenshot 2021-06-30 at 22 23 56](https://user-images.githubusercontent.com/69358550/124033629-173b3000-d9f2-11eb-99fc-da4c4b98d50d.png)
To solve this i added a ternary statement to the book object in the `bookDetailsMapper` function:
```javascript
var book = {
      menuID: i + 1,
      title: bookObj.title === undefined ? 'Information Not Available': bookObj.title,
      author: bookObj.authors === undefined ? 'Information Not Available': bookObj.authors,
      publisher: bookObj.publisher === undefined ? 'Information Not Available': bookObj.publisher,
    };
```
The final result:
![Screenshot 2021-06-30 at 22 23 25](https://user-images.githubusercontent.com/69358550/124033648-1efad480-d9f2-11eb-93bd-be3c2eae1467.png)

# Further improvements
[(Back to top)](#table-of-contents)
These are some suggestions on how the program could be further developed.

- Further refactoring of functions so that they are pure.
- Running more tests
- Searching by title and/or author
- Delete books from the reading list.
- Check to see if the book already exists in reading list before adding so there are no duplicates.
- Add functionality which displays 5 books at a time.
- User login functionality, useful if more than one user per machine.
# Footer
[(Back to top)](#table-of-contents)

![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png)
