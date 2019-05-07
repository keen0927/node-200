require('http').createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello world')
}).listen(50000,() => {
    console.log('서버가 동작 중입니다.')
})