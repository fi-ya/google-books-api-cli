const { readFromReadingListJSONFile} = require('./readFromReadingListJSONFile')
const fs = require('fs');

jest.spyOn(fs, 'readFileSync');

describe('readFromReadingListJSONFile', () => {
    it('should return the expected file if it exists on disk as an object', () => {
        fs.readFileSync.mockImplementation(() => 'abc');
        jest.clearAllMocks();
        const file = readFileFromDisk({
            path: '../fixtures/readingListTest.json',
        });

        expect(file).toEqual('abc');
        expect(fs.readFileSync.mock.calls[0][0].toEqual('../fixtures/readingListTest.json'));
    });
});
// test not working...yet
