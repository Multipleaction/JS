
// Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив,
// що містить тільки унікальні значення з обох масивів (без дублікатів).

function uniqueValues(array1, array2) {
    const combinedArray = [...array1, ...array2];
    const uniqueArray = [...new Set(combinedArray)];
    return uniqueArray;
  }

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]