// Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі.

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Перевірка
console.log(fibonacci(15));

// Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром,
// і властивість steps — це число викликів до знаходження паліндрома.
//  Для того, щоб перевірити себе використовуйте число 196. Це так зване Lychrel number — число яке немає поліндрому

function isPalindrome(number) {
  const str = number.toString();
  return str === str.split('').reverse().join('');
}

function reverseNumber(number) {
  return parseInt(number.toString().split('').reverse().join(''), 10);
}

function findPalindrome(number) {
  let steps = 0;
  let currentNumber = number;

  while (!isPalindrome(currentNumber)) {
    currentNumber += reverseNumber(currentNumber);
    steps++;
  }

  return {result: currentNumber, steps: steps};
}

// Перевірка
console.log(findPalindrome(191));
console.log(findPalindrome(193));
console.log(findPalindrome(196)); // Ну очевидно шо тут все зависне нафіг по ітогу якшо запустити, раз не має числовго паліндрому

// Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву.
// Використовуйте рекурсію для знаходження всіх перестановок

function permute(array) {
  let result = [];

  function permuteRecursive(arr, m = []) {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permuteRecursive(curr.slice(), m.concat(next));
      }
    }
  }

  permuteRecursive(array);
  return result;
}

// Перевірка
console.log(permute([1, 2, 3]));
