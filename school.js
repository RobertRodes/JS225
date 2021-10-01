function createStudent(name, year) {
  let notes = {};

  const getCourse = (key) => {
    return courses.find(obj => String(obj.code) === String(key));
  };

  return {
    courses: [],

    getName() {
      return name;
    },

    info() { 
      console.log(`${name} is a ${year} year student.`);
    },

    listCourses() {
      console.log(this.courses);
    },

    addCourse(course) {
      this.courses.push(course);
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

let school = (function() {
  let students = [];
  let validYears = ['1st', '2nd', '3rd', '4th', '5th'];

  function getCourse(student, name) {
    return student.courses.find(course => course.name === name);
  }

  return {
    addStudent(name, year) {
      if (!validYears.includes(year)) {
        console.log(`Invalid year '${year}' for student '${name}'`);
        return;
      }

      const student = createStudent(name, year);
      students.push(student);
      return student;
    },

    enrollStudent(student, course) {
      student.addCourse(course);
    },

    addGrade(student, name, grade) {
      getCourse(student, name).grade = grade;
    },

    getReportCard(student) {
      console.log(`Report card for ${student.getName()}`);
      for (course of student.courses) {
        let grade = course.grade === undefined ? 'In progress' : course.grade;
        console.log(`${course.name}: ${grade}`);
      }
      console.log('');
    },

    courseReport(name) {
      let enrollees = students.filter(({courses}) => 
        courses.some(course => course.name === name && course.grade !== undefined));

      if (enrollees.length === 0) {
        console.log(`=${name} Grades=\n(None found)`);
        return;
      }

      let gradeList = enrollees.map(student => {
        let grade = getCourse(student, name).grade;
        return {name: student.getName(), grade: grade};
      });

      let avg = gradeList.reduce((acc, list) => acc + list.grade, 0) / gradeList.length;

      console.log(`=${name} Grades=`);

      for (lineItem of gradeList) {
        console.log(`${lineItem.name}: ${lineItem.grade}`);
      }

      console.log('---');
      console.log(`Course Average: ${avg.toFixed(0)}\n`);
    }
  }
})();

console.log(school.students);

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101});
school.enrollStudent(foo, { name: 'Advanced Math', code: 102});
school.enrollStudent(foo, { name: 'Physics', code: 202, });

school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101, grade: 91, });

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101, grade: 92, });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102, grade: 90, });

school.getReportCard(foo);
school.getReportCard(bar);
school.getReportCard(qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
