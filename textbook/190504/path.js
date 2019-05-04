const path = require('path');

const string = __filename;

console.log('path.sep', path.sep);
console.log('path.delimiter', path.delimiter);
console.log('path.dirname()', path.dirname(string));
console.log('path.dirname()', path.extname(string));
console.log('path.basename()', path.basename(string));
console.log('path.parse()', path.basename(string));

console.log('path.join() : ', path.join(__dirname,'..','..','/users','.','/keen'));