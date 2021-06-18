const { readFromReadingListJSONFile} = require('./readFromReadingListJSONFile')
const fs = require('fs');

jest.spyOn(fs, 'readFileSync');

describe('readFromReadingListJSONFile', () => {
    it('should return the expected file if it exists on disk as an object', () => {
        fs.readFileSync.mockImplementation(() =>
      cb(null, 'hello world')
        );

        const file = readFileSync({
            path: '../fixtures/readingListTest.json',
        });

        expect(file).toEqual('hello world');

        // expect(fs.readFileSync.mock.calls[0][0].toEqual('../fixtures/readingListTest.json');
    });




// function readFromReadingListJSONFile(readingList) {
//   const file = fs.readFileSync(readingList);
//   return JSON.parse(file);
// }

// module.exports = { readFromReadingListJSONFile };



// exports.readFileFromDisk = async ({ path }) =>
//   Promise.resolve(fs.readFileSync(path, 'utf8'));
