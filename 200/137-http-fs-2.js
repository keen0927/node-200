const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('./newyork.jpg'), (err, data) => {
        Response.writeHead(200, {'Content-type': 'image/jpeg'});
        Response.end(data);
    }
}).listen(50001,() => {
    console.log('서버가 동작중 입니다.')
})

http.createServer((req, res) => {
    fs.readFile('./ddd.mp3', (err, data) => {
        res.writeHead(200, {'Content-type': 'audio/mp3'});
        res.end(data);
    })
}).listen(50002, () => {
    console.log('서버가 동작 중입니다.')
})