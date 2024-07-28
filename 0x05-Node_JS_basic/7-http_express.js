const express = require('express');
const countStudents = require('./3-read_file_async');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const app = express();
const port = 1245;

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_req, res) => {
  const body = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      body.push(report);
      const responseText = body.join('\n');
      res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain',
      });
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      body.push(err instanceof Error ? err.message : err.toString());
      const responseText = body.join('\n');
      res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain',
      });
      res.write(Buffer.from(responseText));
    });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

module.exports = app;
