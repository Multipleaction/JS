// Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи.
// Функція debounce повинна повертати нову функцію,
// яка викликає вихідну функцію тільки після того, як минула вказана кількість часу без викликів

function debounce(callback, delay) {
    let timeoutId;
  
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  }
  
  
  const expensiveOperation = () => console.log("Виконую складну операцію...");
  const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);
  
  debouncedExpensiveOperation();
  debouncedExpensiveOperation();
  debouncedExpensiveOperation();
  // Через 1 секунду після останнього виклику "Виконую складну операцію..." буде виведене в консоль тільки один раз.
  

// Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах.
// Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t.
// Коли всі функції виконано, intervalRace має повернути масив із результатами.

function intervalRace(functions, t, callback) {
  let results = [];
  let index = 0;

  function executeNext() {
    if (index < functions.length) {
      const result = functions[index]();
      results.push(result);
      index++;
      setTimeout(executeNext, t);
    } else {
      callback(results);
    }
  }

  executeNext();
}

const func1 = () => 'Результат 1';
const func2 = () => 'Результат 2';
const func3 = () => 'Результат 3';

// Перевірка
intervalRace([func1, func2, func3], 1000, (results) => {
  console.log(results)
});