# Google Books Api CLI
*8th Light Technical Assessment*
A command line application that allows you to use the Google Books API to search for books and construct a reading list.

# Demo-Preview

![Random GIF](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif) -->

# Table of contents
- [Google Books Api CLI](#google-books-api-cli)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Issues to resolve](#issues-to-resolve)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)


<!--

To use this project, first clone the repo on your device using the command below:

```git init```

```git clone ``` -->

# Usage
[(Back to top)](#table-of-contents)


# Dependencies
[(Back to top)](#table-of-contents)


# Issues to resolve
[(Back to top)](#table-of-contents)

***Circular Dependency***

I came unstuck with this error when i tried to return back to the mainMenu when on the readingListMenu or searchMenu.

![typeError-reading-list-menu](https://user-images.githubusercontent.com/69358550/122571047-39bd6880-d044-11eb-877b-bec2ff9e2750.jpg)

After triple checking that my imports and exports were correct, i couldn't understand why as other function calls were processing (ie exitProgram). After some research, i realised that it was due to circular dependency.
I tried to solve this by forward declaring the exports object before requiring any other modules, to no success.Then i tried to require mainMenu inside of searchMenu and readingListMenu functions and this worked. I am sure that this is a hack fix and there is another more sophisticated way of resolving this issue given more time.

This is the [resource](https://stackoverflow.com/questions/10869276/how-to-deal-with-cyclic-dependencies-in-node-js) that helped me with this issue.
# Footer
[(Back to top)](#table-of-contents)

![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png)
