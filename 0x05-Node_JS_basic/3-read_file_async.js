const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 */
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

module.exports = countStudents;
