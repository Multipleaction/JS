// Вам необхідно написати функцію-декоратор logArguments(fn),
// яка приймає на вхід функцію і додає можливість логувати всі аргументи,
// передані у функцію-аргумент.

function logArguments(fn) {
    return function(...args) {
        console.log("Arguments:", args);
        return fn.call(this, ...args);
    };
}

// Перевірка
function addNumbers(a, b) {
    return a + b;
}

const loggedAddNumbers = logArguments(addNumbers);
console.log(loggedAddNumbers(5, 3));

// Вам необхідно написати функцію-декоратор validate(fn, validator),
// яка приймає на вхід функцію і додає можливість перевіряти аргументи,
// передані у функцію fn, на відповідність заданому validator.
// Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.

function validate(fn, validator) {
    return function(...args) {
        if (!validator(...args)) {
            throw new Error("Validation failed");
        }
        return fn.call(this, ...args);
    };
}

// Валідатор
function isNumber(a, b) {
    return typeof a === 'number' && typeof b === 'number';
}

// перевірка
function multiplyNumbers(a, b) {
    return a * b;
}

const validatedMultiplyNumbers = validate(multiplyNumbers, isNumber);
console.log(validatedMultiplyNumbers(2, 3));
console.log(validatedMultiplyNumbers(2, '3'));

// Вам необхідно написати функцію-декоратор retry(fn, maxAttempts),
// яка приймає на вхід функцію і додає можливість викликати функцію з максимальною кількістю спроб у разі помилки
// та повертає результат останнього виклику.


function retry(fn, maxAttempts) {
    return function(...args) {
        let attempts = 0;

        function attempt() {
            return fn.apply(this, args).catch((error) => {
                attempts++;
                if (attempts >= maxAttempts) {
                    return Promise.reject(error);
                }
                return attempt();
            });
        }

        return attempt();
    };
}

// Довше думав як це нормально перевірити і продемонструвати((
let callCount = 0;

function fetchData() {
    return new Promise((resolve, reject) => {
        callCount++;
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(`Attempt ${callCount}: Generated number ${randomNumber}`);
        if (randomNumber <= 5) {
            reject(new Error("Invalid result"));
        } else {
            resolve("Data fetched successfully");
        }
    });
}

const retryFetchData = retry(fetchData, 3);

// Перевірка
retryFetchData()
    .then(result => {
        console.log(result);  // Повинно вивести "Data fetched successfully"
        console.log(`fetchData called ${callCount} times`);
    })
    .catch(error => {
        console.error(error.message);  // Виведе "Invalid result" якщо вссі невалідні
        console.log(`fetchData called ${callCount} times`);
    });
