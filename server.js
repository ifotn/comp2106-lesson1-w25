const http = require('http');

// start web server & listen for http requests
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
}).listen(3000);

console.log('Server running on port 3000');