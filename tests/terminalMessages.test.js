const {
  welcomeMessage,
  displayMainMenu,
  displayReadingListMenu,
  displaySearchMenu,
  enterBookName,
  searchingBookName,
  enterBookNumber,
  savingBookNumber,
  readingListHeader,
  displayBookDetails,
  viewBookData,
  displaySavedToReadingList,
  exitGreeting,
} = require('../utils/terminalMessages');

describe('terminalMessages', () => {

    test('welcomeMessage function exists', () => {
        expect(welcomeMessage).toBeDefined();
    });

    test('displayMainMenu function exists', () => {
        // const result = displayMainMenu();
        // const expected = '\nMain Menu\n'
        // const expected2 = 'Select an option: \n 1: Search for Books \n 2: View Reading List \n 3: Exit\n';
        expect(displayMainMenu).toBeDefined();
        //expect(result).toEqual(expect.stringMatching(expected+expected2));
    });

    test('displayReadingListMenu function exists', () => {
      //   const result = displayReadingListMenu();
      //   const expected = '\nSaved to reading list!';
      expect(displayReadingListMenu).toBeDefined();
      //expect(result).toEqual(expect.stringMatching(expected));
    });

    test('displaySearchMenu function exists', () => {
      //   const result = displaySearchMenu();
      //   const expected = '\nSaved to reading list!';
      expect(displaySearchMenu).toBeDefined();
      //expect(result).toEqual(expect.stringMatching(expected));
    });

    test('enterBookName function exists', () => {
      // const result = enterBookName();
      // const expected = `What book would you like to search for? `;
      expect(enterBookName).toBeDefined();
      // expect(result).toEqual(expect.stringMatching(expected));
    });

    test('searchingBookName function exists', () => {
      expect(searchingBookName).toBeDefined();
    });

    test('enterBookNumber function exists', () => {
      // const result = enterBookNumber();
      // const expected = `Insert the book number you would like to save to your reading list? `;
      expect(enterBookNumber).toBeDefined();
      //expect(result).toEqual(expect.stringMatching(expected));
    });

    test('savingBookNumber function exists', () => {
      expect(savingBookNumber).toBeDefined();
    });

    test('readingListHeader function exists should have the correct message', () => {
      const result = readingListHeader();
      const expected = `Your reading list: `;
      expect(readingListHeader).toBeDefined();
      expect(result).toEqual(expect.stringMatching(expected));
    });

    test('displayBookDetails function exists', () => {
      expect(displayBookDetails).toBeDefined();
    });

    test('viewBookData function exists', () => {
      expect(viewBookData).toBeDefined();
    });

    test('displaySavedToReadingList function exists should have the correct message', () => {
      const result = displaySavedToReadingList();
      const expected = '\nSaved to reading list!';
      expect(displaySavedToReadingList).toBeDefined();
      expect(result).toEqual(expect.stringMatching(expected));
    });

    test('exitGreeting function exists should have the correct goodbye message', () => {
      const result = exitGreeting();
      const expected = `Have a great day. Goodbye! 😊 `;
      expect(exitGreeting).toBeDefined();
      expect(result).toEqual(expect.stringMatching(expected));
    });
})
