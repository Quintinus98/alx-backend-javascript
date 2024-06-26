const fs = require('fs');

function countStudents(path) {
  try {
    const db = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });

    const lines = db.split('\n').filter((line) => line.trim() !== '');
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }
    console.log(`Number of students: ${lines.length - 1}`);

    const fields = {};
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].split(',');
      if (!fields[line[3]]) {
        fields[line[3]] = [line[0]];
      } else {
        fields[line[3]].push(line[1]);
      }
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
