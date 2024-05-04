// Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів
// з інформацією про студентів (ім'я, вік, середній бал)
// і повертає середній бал усіх студентів.

function calculateAverageGrade(students) {
	const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
	return totalGrades / students.length;
  }

const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4 (Насправді 4.3999999999999995)