const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to this simple HTML page');  // note that \n closes the connection
    } else if (req.url === '/api') {
        res.statusCode = 200;
        res.end(JSON.stringify(greet())); //JSON Object "Greetings"
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('Page Not Found')
    }
  });


  
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const greet = () => 'Greetings Earthlings!';
