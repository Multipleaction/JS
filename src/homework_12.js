// Вам необхідно написати функцію summarize(num), яка приймає на вхід число і повертає
// функцію, яка під час виклику додає це число до аргументу і повертає результат.
// Якщо аргумент не передано, то додається одиниця.
// Наприклад, якщо функція викликається з аргументом 5,
// то функція, що повертається, повинна при виклику з аргументом 3 повернути 8

function summarize(num) {
    function add(value = 1){
        return num + value
    }

    return add;
};

// Перевірка
const addFive = summarize(5);
console.log(addFive(3));
console.log(addFive());  

// Вам необхідно написати функцію counter(startValue, step), 
// яка приймає на вхід два параметри - стартове значення лічильника і його крок.
// Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення.
// Лічильник повинен мати методи increment, decrement і reset,
//  які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.

function counter(startValue, step) {
    let count = startValue;

    function increment() {
        count += step;
        return count;
    }

    function decrement() {
        count -= step;
        return count;
    }

    function reset() {
        count = startValue;
        return count;
    }

    return {
        increment,
        decrement,
        reset
    };
}

// Перевірка
const myCounter = counter(0, 1);
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());

// Вам необхідно написати функцію sequence(fn, fn),
// яка приймає на вхід дві або більше функції і повертає нову функцію,
// яка викликає їх послідовно з результатом попереднього виклику.
// Результат останньої функції має бути повернутий новою функцією.
// Кожна функція повинна мати доступ до результату попередньої функції через замикання.

function sequence(...fns) {
    return function(...args) {
        let result;
        fns.forEach(fn => {
            if (result === undefined) {
                result = fn(...args);
            } else {
                result = fn(result);
            }
        });
        return result;
    };
}

// Перевірка
function addTwo(x) {
    return x + 2;
}

function multiplyByFive(x) {
    return x * 5;
}

function substractOne(x) {
    return x - 1;
}

const seqFunc = sequence(addTwo, multiplyByFive, substractOne);
const result = seqFunc(5);
console.log(result);