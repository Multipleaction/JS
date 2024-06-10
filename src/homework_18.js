// sumArrayPromise.Напишіть функцію, яка приймає масив чисел як аргумент і повертає Promise.
// Promise має бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.

function sumArrayPromise(numbers) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        resolve(sum);
      }, 3000);
    });
  }
  
  // Перевірка
  sumArrayPromise([1, 2, 3, 4, 5]).then(sum => console.log(sum));
  

// concurrentPromises.Створіть функцію concurrentPromises, яка приймає масив промісів і максимальну кількість промісів, що виконуються одночасно.
// Функція має виконати проміси паралельно, але не більше зазначеної максимальної кількості.
// Результатом функції має бути масив результатів промісів.

function concurrentPromises(promises, maxConcurrent) {
  return new Promise((resolve, reject) => {
    const results = [];
    let running = 0;
    let currentIndex = 0;

    function runNext() {
      if (currentIndex >= promises.length) {
        if (running === 0) {
          resolve(results);
        }
        return;
      }

      const index = currentIndex++;
      const promise = promises[index];
      running++;

      promise()
        .then(result => {
          results[index] = result;
        })
        .catch(err => {
          reject(err);
        })
        .finally(() => {
          running--;
          runNext();
        });
    }

    for (let i = 0; i < maxConcurrent && i < promises.length; i++) {
      runNext();
    }
  });
}

// Перевірка
const promiseFactory = (time, result) => () => new Promise(resolve => setTimeout(() => resolve(result), time));

const promises = [
  promiseFactory(1000, '1'),
  promiseFactory(2000, '2'),
  promiseFactory(3000, '3'),
  promiseFactory(4000, '4'),
];

concurrentPromises(promises, 2).then(results => console.log(results));


// sequenceAsync.Реалізуйте функцію sequenceAsync, яка приймає масив функцій-промісів asyncFunctions.
// Кожна функція-проміс приймає попередній результат як аргумент і повертає новий результат.
// Функція sequenceAsync має виконати проміси послідовно, передаючи результат попереднього промісу в наступний.

async function sequenceAsync(asyncFunctions) {
  let result;

  for (const asyncFunction of asyncFunctions) {
    result = await asyncFunction(result);
  }

  return result;
}

// Перевірка
const asyncFunctions = [
  (prevResult) => Promise.resolve(prevResult + 1),
  (prevResult) => Promise.resolve(prevResult * 2),
  (prevResult) => Promise.resolve(prevResult - 3),
];

sequenceAsync([() => Promise.resolve(0), ...asyncFunctions]).then(result => console.log(result));
