export default class Course {
  constructor(name, length, students) {
    // Verify and set name
    this.name = name; // Uses the setter
    
    // Verify and set length
    this.length = length; // Uses the setter
    
    // Verify and set students
    this.students = students; // Uses the setter
  }

  // Name getter and setter
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Length getter and setter
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number' || isNaN(newLength)) {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Students getter and setter
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every(item => typeof item === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
