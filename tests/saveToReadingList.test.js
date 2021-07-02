const { saveToReadingList } = require('../utils/saveToReadingList');
const fs  = require('fs');

jest.spyOn(fs, 'writeFile');

describe('saveToReadingList', () => {

    test('saveToReadingList function exists', () => {
        expect(saveToReadingList).toBeDefined();
    })


    test('writes to file using fs.writeFile', () => {
        fs.writeFile.mockImplementation(() => 'abc');
        const chosenBook = {
          menuID: 1,
          title: 'Coding For Dummies',
          author: ['Nikhil Abraham'],
          publisher: 'John Wiley & Sons',
        };
        const result = saveToReadingList('abc');
        expect(result).toEqual('abc');
    })


})
