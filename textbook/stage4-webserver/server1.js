const http = require('http');

const server = http.createServer((req, res) => {
    res.write('<h1>웰컴</h1>');
    res.end('<h2>하이 서버</h2>');
});

server.listen(8080);

server.on('listening', () => {
    console.log('8080 대기');
});

server.on('error', () => {
    console.error(error)
});