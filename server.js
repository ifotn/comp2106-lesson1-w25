// import necessary libs
const http = require('http');
const fs = require('fs');

// start web server & listen for http requests
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile('index.html', 'utf8', (err, fileContents) => {
        if (err) {
            console.log(err);
        }
        else {
            res.write(fileContents);        
        }
        res.end();
    });
     
    //res.end('<h1>Hello World</h1>');
}).listen(3000);

console.log('Server running on port 3000'); 