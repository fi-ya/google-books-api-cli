const { readFromReadingListJSONFile} = require('./readFromReadingListJSONFile')
const fs = require('fs');

jest.spyOn(fs, 'readFileSync');

describe('readFromReadingListJSONFile', () => {

    test('readFromReadingListJSONFile function exists', () => {
        expect(readFromReadingListJSONFile).toBeDefined();
    });


    test('should return the expected file if it exists as an object',
        // () => {
        //  fs.readFileSync.mockImplementation(() => 'abc');

        // jest.clearAllMocks();

        //     const file = readFromReadingListJSONFile('../fixtures/readingListTest.json');
        //     // const result = JSON.parse(file)

        // expect(result).toEqual('abc');
        // expect(fs.readFileSync.mock.calls[0][0].toMatchObject('../fixtures/readingListTest.json'));
        // }
    )
});
