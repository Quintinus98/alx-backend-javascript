const http = require('http');
const fs = require('fs');

const port = 1245;
const host = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const groups = {};
      const fieldNames = fileLines[0].split(',');
      const studentNames = fieldNames
        .slice(0, fieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(groups).includes(field)) {
          groups[field] = [];
        }
        const studentEntries = studentNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        groups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(groups)
        .reduce((pre, cur) => (pre || []).length + cur.length);

      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(groups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

const appRouteHandlers = [
  {
    route: '/',
    handler(_, res) {
      const body = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', body.length);
      res.statusCode = 200;
      res.write(Buffer.from(body));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const body = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', body.length);
          res.statusCode = 200;
          res.write(Buffer.from(body));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const body = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', body.length);
          res.statusCode = 200;
          res.write(Buffer.from(body));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandlers of appRouteHandlers) {
    if (routeHandlers.route === req.url) {
      routeHandlers.handler(req, res);
      break;
    }
  }
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
