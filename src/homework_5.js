// Вам необхідно написати функцію reverseString(str), 
// яка приймає на вхід рядок і повертає його у зворотному порядку.

const str1 = "Homework";
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Перевірка Зворотьнох стрінги
console.log(reverseString(str1))

// Вам необхідно написати функцію isPalindrome(str), 
// яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.

const str2 = "ALLa";

function isPalindrome(str) {
    const processedStr = str.replace(/\s/g, '').toLowerCase();
    const reversedStr = reverseString(processedStr);
    if (processedStr === reversedStr) {
        console.log('The string is a palindrome.');
    } else {
        console.log('The string is not a palindrome.');
    }
}
// Перевірка паліндром
isPalindrome(str2);


// Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.
function findGCD(a, b) {
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a %= b;
        } else {
            b %= a;
        }
    }
    return a + b; 
}

// Перевірочка НСД
const a = 16;
const b = 48;
console.log("НСД чисел", a, "i", b, ":", findGCD(a, b));