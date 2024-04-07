/* 
Вам необхідно написати програму, яка приймає на вхід число
і виводить у консоль повідомлення залежно від значення числа.
Якщо число ділиться на 3, то повідомлення має бути Fizz,
якщо число ділиться на 5, то повідомлення має бути Buzz,
а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz.
Наприклад, для числа 15 повідомлення має бути FizzBuzz.
*/

function fizzBuzz(num) {
	if (num % 3 === 0 && num % 5 === 0) {
		return 'FIzzBuzz';
	} else if (num % 3 === 0) {
		return 'Fizz';
	} else if (num % 5 === 0) {
		return 'Buzz';
	} else {
		return 'Not Fizz or Buzz';
	}
}

const insertNumber = parseInt(prompt('Введіть число: '));
const result = fizzBuzz(insertNumber);
alert(result);

/*
Вам необхідно написати програму, 
яка приймає на вхід число і виводить у консоль повідомлення, 
що вказує, чи є введений рік високосним.
*/

function isLeapYear(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return true;
	} else {
		return false;
	}
}

const year = parseInt(prompt('Введіть рік: '));

if (isLeapYear(year)) {
	alert('Введений рік є високосним');
} else {
	alert('Введений рік не є високосним');
}

// Ще підгледів в інетах такий варіант через Date object
// function checkLeapYear(year) {
// 	// Create a date object for February 29th of the given year
// 	const date = new Date(year, 1, 29);

// 	// Check if the date remains February 29th after creating the date object
// 	return date.getMonth() === 1 && date.getDate() === 29;
// }

// const year2 = parseInt(prompt('Введіть рік: '));

// if (checkLeapYear(year2)) {
// 	alert('Введений рік є високосним');
// } else {
// 	alert('Введений рік не є високосним');
// }

/*
Вам необхідно написати програму, 
яка приймає на вхід число і виводить у консоль повідомлення у форматі Вам N рік / роки / років. 
Залежно від числа N слово рік має змінюватися на років або року. 
Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки.
*/

function formatAge(years) {
	let lastDigit = years % 10;
	let lastTwoDigits = years % 100;

	if (lastDigit === 1 && lastTwoDigits !== 11) {
		return `Вам ${years} рік`;
	} else if (
		lastDigit >= 2 &&
		lastDigit <= 4 &&
		!(lastTwoDigits >= 12 && lastTwoDigits <= 14)
	) {
		return `Вам ${years} роки`;
	} else {
		return `Вам ${years} років`;
	}
}

const age = parseInt(prompt('Введіть кількість років: '));
alert(formatAge(age));
