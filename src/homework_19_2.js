// flatten. Напишіть функцію-генератор flatten, яка приймає масив, що містить вкладені масиви,
// і повертає генератор для ітерації по всіх елементах вкладених масивів.

function* flatten(array) {
    for (const item of array) {
      if (Array.isArray(item)) {
        yield* flatten(item);
      } else {
        yield item;
      }
    }
  }

const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
const flattenGen = flatten(nestedArr);

console.log([...flattenGen]);
// [1, 2, 3, 4, 5, 6, 7]

// asyncGenerator. Створіть функцію-генератор asyncGenerator, 
// яка отримуватиме на вході масив промісів і повертатиме результати виконання цих промісів у міру їхнього завершення.

async function* asyncGenerator(promises) {
  const wrappedPromises = promises.map((promise, index) =>
    promise
      .then(value => ({ status: 'fulfilled', index, value }))
      .catch(error => ({ status: 'rejected', index, error }))
  );

  while (wrappedPromises.length > 0) {
    const result = await Promise.race(wrappedPromises);
    const index = wrappedPromises.findIndex(p => p === wrappedPromises[result.index]);
    wrappedPromises.splice(index, 1);

    if (result.status === 'fulfilled') {
      yield result.value;
    } else {
      throw result.error;
    }
  }
}

// Перевірка
const delay = (ms, result) => new Promise(resolve => setTimeout(() => resolve(result), ms));

const promises = [
  delay(1000, 'First'),
  delay(500, 'Second'),
  delay(1500, 'Third')
];

(async () => {
  try {
    for await (const result of asyncGenerator(promises)) {
      console.log(result); // 'Second', 'First', 'Third'
    }
  } catch (error) {
    console.error(error);
  }
})();
