// Вам необхідно створити конструктор Студента, у якого мають бути властивості: ім'я, прізвище, рік народження, оцінки, відвідуваність, курс.
// Кількість оцінок і відвіданих занять залежить від курсу, на якому займається студент.
// Так само у Студента є методи: додати оцінку, додати відвідування, отримати середню успішність,
// отримати середнє відвідування, отримати кількість пройдених занять, змінити курс (мають оновитися дані про курс),
// а також отримати всю інформацію про студента.

// Конструктор Student
function Student(firstName, lastName, birthYear, course) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = [];
    this.courses = [course];
}

Student.prototype.addGrade = function(grade) {
    this.grades.push(grade);
};

Student.prototype.addAttendance = function(attended) {
    this.attendance.push(attended);
};

Student.prototype.getAverageGrade = function() {
    if (this.grades.length === 0) {
        return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
};

Student.prototype.getAverageAttendance = function() {
    if (this.attendance.length === 0) {
        return 0;
    }
    const attendedClasses = this.attendance.filter(attended => attended).length;
    return attendedClasses / this.attendance.length;
};

Student.prototype.getCompletedClasses = function() {
    return this.attendance.length;
};

Student.prototype.changeCourse = function(newCourse) {
    this.course = newCourse;
};

Student.prototype.getStudentInfo = function() {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        birthYear: this.birthYear,
        grades: this.grades,
        averageGrade: this.getAverageGrade(),
        attendance: this.attendance,
        averageAttendance: this.getAverageAttendance(),
        completedClasses: this.getCompletedClasses(),
        courses: this.courses
    };
};

// Додати Студенту можливість навчатися на кількох курсах з можливістю додавання і видалення курсу.

// Функції для додавання та видалення курсів
function addCourse(student, newCourse) {
    const coursesSet = new Set(student.courses);
    coursesSet.add(newCourse);
    student.courses = Array.from(coursesSet);
    console.log(`${student.firstName} ${student.lastName} Курс ${newCourse} додано.`);
}

function removeCourse(student, course) {
    const coursesSet = new Set(student.courses);
    if (coursesSet.has(course)) {
        coursesSet.delete(course);
        student.courses = Array.from(coursesSet);
        console.log(`${student.firstName} ${student.lastName} Курс ${course} видалено.`);
    } else {
        console.log(`Студент не зареєстрований на ${course}.`);
    }
}

// Створити конструктор Група,
// яка має список студентів і методи для додавання, видалення студентів,
// а також одержання рейтингу студентів за відвідуваністю і успішністю

// Конструктор Group
function Group() {
    this.students = [];
}

Group.prototype.addStudent = function(student) {
    this.students.push(student);
};

Group.prototype.removeStudent = function(student) {
    this.students = this.students.filter(s => s !== student);
};

Group.prototype.getAttendanceRanking = function() {
    return this.students
        .slice()
        .sort((a, b) => b.getAverageAttendance() - a.getAverageAttendance());
};

Group.prototype.getGradeRanking = function() {
    return this.students
        .slice()
        .sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
};

// Вивід списку студентів в групі (ну тут трохи звично було, бо я на роботі часто коли дебажу тести шсоь собі так виводжу)
Group.prototype.printStudents = function() {
    console.log('Список студентів в групі:');
    this.students.forEach((student, index) => {
        console.log(`${index + 1}. ${student.firstName} ${student.lastName}`);
    });
};


// Форматоване виведення успішності та відвідування (підгуглив ідею шоб красівоє було)
Group.prototype.printAttendanceRanking = function() {
    console.log('Рейтинг Відвідування:');
    this.getAttendanceRanking().forEach((student, index) => {
        console.log(`${index + 1}. ${student.firstName} ${student.lastName} - Середнє Відвідування: ${(student.getAverageAttendance() * 100).toFixed(2)}%`);
    });
};

Group.prototype.printGradeRanking = function() {
    console.log('Рейтинг Успішності:');
    this.getGradeRanking().forEach((student, index) => {
        console.log(`${index + 1}. ${student.firstName} ${student.lastName} - Середня Успішність: ${student.getAverageGrade()}`);
    });
};

// Перевіірка
const student1 = new Student('Іван', 'Петренко', 2000, 'Фізика');
const student2 = new Student('Ганна', 'Симоенко', 1999, 'Математика');
const student3 = new Student('Василь', 'Кіт', 2001, 'Геологія');

console.log(student1, student2, student3)

student1.addGrade(90);
student1.addGrade(80);
student1.addAttendance(true);
student1.addAttendance(false);
student1.addAttendance(true);

student2.addGrade(85);
student2.addGrade(75);
student2.addAttendance(true);
student2.addAttendance(true);

student3.addGrade(95);
student3.addGrade(85);
student3.addAttendance(false);
student3.addAttendance(true);

console.log(student1, student2, student3)

addCourse(student1, 'Астрономія');
addCourse(student2, 'Хімія');
removeCourse(student1, 'Фізика');

console.log(student1, student2, student3)

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);
group.addStudent(student3);

// Вивід списку студентів
group.printStudents();

// Рейтинг Відвідування
group.printAttendanceRanking();

// Рейтинг Успішності
group.printGradeRanking();