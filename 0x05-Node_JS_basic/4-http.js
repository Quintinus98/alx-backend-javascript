const http = require('http');

const host = 'localhost';
const port = 1245;

const app = http.createServer((_req, res) => {
  const body = 'Hello Holberton School!';
  res.writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain',
  });
  res.write(Buffer.from(body));
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
