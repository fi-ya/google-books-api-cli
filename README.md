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
- [Usage](#usage)
    - [Search for book and save to reading list](#search-for-book-and-save-to-reading-list)
    - [View reading list and exit program](#view-reading-list-and-exit-program)
- [Dependencies](#dependencies)
- [Issues to resolve](#issues-to-resolve)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)

To use this project,
- clone this repo on your device using the command `git clone`
- `cd` into google-books-api-cli folder
- Run `npm install` to install dependencies
- Run `node .` or `node index.js` to start CLI

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
# Footer
[(Back to top)](#table-of-contents)

![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png)
