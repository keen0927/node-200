const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('./136.html',(error, data) => {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(data)
    })
}).listen(50000, () => {
    console.log('서버가 동작 중 입니다.')
});