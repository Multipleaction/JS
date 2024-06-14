// fibonacci. Напишіть функцію-генератор fibonacci, яка повертає наступне число Фібоначчі при кожному виклику.
// Генератор повинен зупинитися після досягнення заданої межі n.

function* fibonacci(limit) {
  let current = 0, next = 1;

  while (current <= limit) {
      yield current;
      [current, next] = [next, current + next];
  }
}


const fibGen = fibonacci(10);

// Перевірка 
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value); // undefined (бо перевищує межу)