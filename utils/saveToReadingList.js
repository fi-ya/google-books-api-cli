const fs = require('fs');

const contents = '';

// get reading list data from .json file
var readingListData = fs.readFileSync('readingList.json');
var readingList = JSON.parse(readingListData);
//console.log(readingList);

// save to readingList.json
var data = JSON.stringify('title,author,publisher', null, 2);
fs.appendFile('readingList.json', data, finished);

function finished(err) {
  console.log('Saved to reading list!');
}
