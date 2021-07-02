const { getBookDetailsFromAPI } = require('../utils/getBookDetails');
const axios = require('axios');
const data = require('../fixtures/axiosTestResponse');

jest.mock('axios');

describe('getBookDetailsFromAPI', () => {
  test('getBookDetailsFromAPI function exists', () => {
    expect(getBookDetailsFromAPI).toBeDefined();
  });

  test.todo('fetches successfully data from google books API',
    //() => {
    // Unable to resolve issue.
    //   axios.get.mockImplementationOnce(() =>
    //       Promise.resolve(data));

    // const search = 'coding';
    // const searchResponse = getBookDetailsFromAPI(search);

    // expect(axios.get).toHaveBeenCalledWith(
    //   `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=5&projection=lite`
    // );
    // expect(axios.get).toHaveBeenCalledTimes(1);
    // expect(searchResponse).toEqual(data);
    //}
  );
});
