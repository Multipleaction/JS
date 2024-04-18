// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі:
// Число N є простим числом,
// якщо число N просте, та Число N не є простим числом, якщо число N складене.
// Я до сьогодні думав шо число 1 теж просте =(, але гугл каже шо нє

function isPrime(num) {
	if (num <= 1) {
		return false;
	}

	for (let i = 2; i * i <= num; i++) {
		// for (let i = 2; i <= Math.sqrt(num); i++) варік зі стек оверфлов, ну типо ясно чому, бо у нас і так квадратний корінь
		if (num % i === 0) return false; // на останньому занняті ти показував всякий скорочений синтаксис по функціях, рішив теж спробувати з кондішенами
	}
	return true;
}

function checkPrime(num) {
	if (isPrime(num)) {
		console.log(`Число ${num} є простим числом`);
	} else {
		console.log(`Число ${num} не є простим числом`);
	}
}

checkPrime(13);

// Вам необхідно написати програму, яка приймає на вхід число N
// і знаходить усі числа в діапазоні від 1 до N, які є досконалими числами.
// У теорії чисел досконале число  — натуральне число, що дорівнює сумі його додатних дільників, не враховуючи самого числа
function isPerfect(number) {
	let divisorSum = 0;
	for (let i = 1; i < number; i++) {
		if (number % i === 0) {
			divisorSum += i;
		}
	}
	return divisorSum === number;
}

function findPerfectNumbers(N) {
	const perfectNumbers = [];
	for (let i = 1; i <= N; i++) {
		if (isPerfect(i)) {
			perfectNumbers.push(i);
		}
	}
	return perfectNumbers;
}
console.log(`Знайдені досконалі числа: ${findPerfectNumbers(9000)}`);

// Вам необхідно написати програму,
// яка приймає на вхід число, що буде висотою вершини вашої ялинки.
// Уся ялинка має бути реалізована одним рядком:

//    *
//   ***
//  *****
// *******

function drawTree(height) {
	let tree = '';
	for (let i = 1; i <= height; i++) {
		for (let t = 0; t < height - i; t++) {
			tree += ' ';
		}

		for (let k = 0; k < 2 * i - 1; k++) {
			tree += '*';
		}

		tree += '\n';
	}
	console.log(tree);
}

drawTree(6);
