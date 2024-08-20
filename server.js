const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write('hello word');
  res.end();
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});