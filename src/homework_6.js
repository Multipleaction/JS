// Вам необхідно написати функцію doubleLetter(str),
// яка приймає на вхід рядок і повертає новий рядок,
// у якому кожен символ повторюється двічі hello ⇒ hheelllloo.

function doubleLetter(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}

// Перевірка
console.log(doubleLetter("hello"));

// Вам необхідно написати функцію padString(str, length, symbol, toLeft),
// яка приймає на вхід рядок, число, що є довгим рядком,
// який ми хочемо отримати в результаті та символ,
// яким доповниться рядок, якщо це буде потрібно,
// четвертим параметром є буремний «прапор», чи додавати символи зліва або справа(за замовчуванням).
// Якщо 2 параметр менше, ніж довжина вихідного рядка, то виводимо вихідний рядок без змін.
// Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.

function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str;
    }

    const diff = length - str.length;

    let padding = ''; 

    for (let i = 0; i < diff; i++) {
        padding += symbol; 
    }

    if (toLeft) {
        return padding + str; 
    } else {
        return str + padding;
    }
}

// Перевірка
console.log(padString('Ivan', 6, '*'));
console.log(padString('Ivannnnnnnn', 6, '*'));

// Вам необхідно написати функцію camelCase(str, separator),
// яка приймає на вхід рядок і перетворює його до формату camelCase.

function camelCase(str, separator = ' ') {
    // Ніколи не намагався запам1ятовувати регулярні вирази, завжди гуглю і тут гуглив, але так кому прибирає
    str = str.replace(/,/g, '');

    const words = str.split(separator).filter(word => word !== '');
    
    const camelCaseString = words.reduce((acc, curr, index) => {
        if (index === 0) {
            return acc + curr.toLowerCase();
        } else {
            return acc + curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase();
        }
    }, '');

    return camelCaseString;
}

// Перевірка
console.log(camelCase('hello world')); 
console.log(camelCase('hello_world', '_')); 
console.log(camelCase('Hello, how are you?', ' '));