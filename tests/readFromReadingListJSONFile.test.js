const { readFromReadingListJSONFile} = require('../utils/readFromReadingListJSONFile')
const fs = require('fs');

jest.spyOn(fs, 'readFileSync');

describe('readFromReadingListJSONFile', () => {

    test('readFromReadingListJSONFile function exists', () => {
        expect(readFromReadingListJSONFile).toBeDefined();
    });

    test.todo('should return the expected file if it exists as an object',
        // () => {
        // fs.readFileSync.mockImplementation(() => {
        //         '{\"menuID\": 1, \"title\": \"Disney The Lion King: Roar of the Pride Lands\",\"author\": [\"Maggie Fischer\"],\"publisher\": \"SFI Readerlink Dist\"}'
        //     });

        // const file = readFromReadingListJSONFile('./fake/path');
        //     expect(file).toEqual();
        //     jest.clearAllMocks();
        //expect(fs.readFileSync.mock.calls[0][0].toMatchObject('../fixtures/readingListTest.json'));
        //}
    )
});
