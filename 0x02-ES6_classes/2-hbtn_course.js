export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter & Setter name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof (value) !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter & Setter Length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof (value) !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter & Setter Students
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)
    || !value.every((val) => typeof val === 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
