function createStudent(name, year) {
  let courses = [];
  let notes = {};

  const getCourse = (key) => {
    return courses.find(obj => String(obj.code) === String(key));
  };

  return {
    info() { 
      console.log(`${name} is a ${year} year student.`);
    },

    listCourses() {
      console.log(courses);
    },

    addCourse(course) {
      courses.push(course);
    },

    addNote(code, text) {
      if (Object.keys(notes).includes(String(code))) {
        notes[code] += `; ${text}`;
      } else {
        if (getCourse(code)) notes[code] = text;
      }
    },

    updateNote(code, text) {
      if (Object.keys(notes).includes(String(code))) notes[code] = text;
    },

    viewNotes() {
      for (key in notes) {
        let courseName = getCourse(key).name;
        console.log(courseName + ':', notes[key]);
      }
    },
  }
}


let foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.addNote(103, 'This should never appear');
foo.viewNotes();
foo.updateNote(101, 'Funny course');
foo.viewNotes();
