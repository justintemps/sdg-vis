import jsonp from 'jsonp';

const BASE_URL = 'https://spreadsheets.google.com/feeds/list/';
const KEY = '1LuXheSLhX6dw4bzR7sOwaLNqXZabuHV83QioFV0INwU';
const QUERY = '/od6/public/values?alt=json';
const FULL_URL = [BASE_URL, KEY, QUERY].join('');

function parseData(data) {
  const sheet = data.feed.entry;
  return sheet.map(entry => ({
    description: entry.gsx$description.$t,
    sdg: entry.gsx$sdg.$t,
    thumbnail: entry.gsx$thumbnail.$t,
    title: entry.gsx$title.$t,
    youtubeID: entry.gsx$youtubeid.$t,
  }));
}

function getData() {
  return new Promise((resolve, reject) => {
    jsonp(FULL_URL, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(parseData(data));
      }
    });
  });
}


export default getData;
