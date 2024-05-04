// Створіть функцію reverseArray, яка приймає масив і повертає новий масив,
// елементи якого розташовані у зворотному порядку.

function reverseArray(array) {
    return array.slice().reverse();
  }
  

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]
