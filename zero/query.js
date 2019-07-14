const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gitgub.com/?page=3&limit=10&category=nodejs');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse() : ',query);
console.log(query.page);