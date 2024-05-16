// Вам необхідно використовувати масив нотифікацій з минулих занять.
// До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор,
// щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications таким чином,
// немов працюємо з "плоским" масивом.

function groupNotificationsBySource(notifications) {
    const grouped = notifications.reduce((acc, notification) => {
        const { source, text, date } = notification;

        if (!acc[source]) {
            acc[source] = [];
        }
        acc[source].push({ text, date });

        return acc;
    }, {});

    grouped[Symbol.iterator] = function* () {
        for (const source in this) {
            if (this.hasOwnProperty(source)) {
                for (const notification of this[source]) {
                    yield notification;
                }
            }
        }
    };

    return grouped;
}

const notifications = [
    { source: "email", text: "У вас 1 нове повідомлення", date: "2024-05-01" },
    { source: "email", text: "Нагадування: зустріч о 15:00", date: "2024-05-02" },
    { source: "system", text: "Заплановано перезавантаження системи на 2:00 ночі", date: "2024-05-01" },
    { source: "social", text: "Новий коментар до вашого посту", date: "2024-05-03" }
];

const groupedNotifications = groupNotificationsBySource(notifications);

// Перевірка
for (const notification of groupedNotifications) {
    console.log(notification);
}

// Вам необхідно реалізувати функцію memoize(fn), яка приймає вхід функцію і додає їй можливість кешування результатів виконання,
// щоб уникнути повторних обчислень. Це означає, що в разі, коли функція викликається з однаковими параметрами,
// то результат необхідно брати з кешу. (Тільки примітиви у параметрах та використовуйте Map)

function memoize(fn) {
    let cache = new Map();

    return function(...args) {
        const key = args.toString();
        if (cache.has(key)) {
            console.log('Беремо з кеша:', key); // Було цікаво бачити наочно коли звідки шо береться
            return cache.get(key);
        }
        console.log('Рахуємо та кешуємо:', key); // Було цікаво бачити наочно коли звідки шо береться
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

const multiply = (x, y) => {
    console.log('Рахуємо:', x, '*', y);
    return x * y;
};


const memoizedMultiply = memoize(multiply);

console.log(memoizedMultiply(4, 5));
console.log(memoizedMultiply(4, 5));
console.log(memoizedMultiply(5, 4));
console.log(memoizedMultiply(5, 4));

// Встановіть обмеження на розмір кеша у вигляді числа N.
// Якщо це значення перевищено, то вам необхідно перезаписати перше значення, потім друге і так далі.
// Додайте перевірку, щоб прибрати дублікати результатів із кешу.



/**
 * 
ЦЕ ВСЕ ГУГЛ ТА СТИРЕНЕ ЧУЖЕ РІШЕННЯ З ІНТЕУ, ЦЕ БІЛЬШЕ ДЛЯ СЕБЕ ТАК ШО МОЖНА НЕ ПЕРЕВІРЯТИ!!!
*
*/
function memoize(fn, maxSize = 5) {
    let cache = new Map();

    return function(...args) {
        const key = args.toString();
        if (cache.has(key)) {
            console.log('Беремо з кеша:', key);
            // Переміщаємо ключ на останнє місце
            const value = cache.get(key);
            cache.delete(key);
            cache.set(key, value);
            return value;
        }

        if (cache.size === maxSize) {
            // Видалення найстарішого запису (першого в Map)
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
            console.log('Кеш перповнений, прибираємо найстаріше значення:', firstKey);
        }

        console.log('Рахуємо та кешуємо:', key);
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}


const multiply2 = (x, y) => {
    console.log('Calculating:', x, '*', y);
    return x * y;
};

// Створення мемоізованої версії функції multiply з максимальним розміром кеша 3
const memoizedMultiply2 = memoize(multiply2, 3);

console.log(memoizedMultiply2(4, 5));
console.log(memoizedMultiply2(5, 4));
console.log(memoizedMultiply2(2, 2));
console.log(memoizedMultiply2(3, 3)); // Кеш має 3 елементи
console.log(memoizedMultiply2(4, 5)); // Виклик з кешу, 4*5 переміщається в кінець
console.log(memoizedMultiply2(6, 7)); // Видалення старого запису 5*4