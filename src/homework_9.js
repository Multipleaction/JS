// Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив,
// що містить тільки ті числа, які є простими числами.

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function filterPrimes(numbers) {
      return numbers.filter(isPrime);
  }
  
  // Перевірка
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 17, 19];
  const primes = filterPrimes(numbers);
  console.log(primes);
  
  // Вам необхідно написати функцію, яка приймає на вхід масив об'єктів,
  // де кожен об'єкт описує сповіщення та має поля source / text / date.
  // Вам необхідно перетворити цей масив на об'єкт,
  // де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.
  
  function groupNotificationsBySource(notifications) {
      return notifications.reduce((acc, notification) => {
          const { source, text, date } = notification;
  
          if (acc[source]) {
              acc[source].push({ text, date });
          } else {
              acc[source] = [{ text, date }];
          }
  
          return acc;
      }, {});
  }
  
  
  const notifications = [
      { source: "email", text: "У вас 1 нове повідомлення", date: "2024-05-01" },
      { source: "email", text: "Нагадування: зустріч о 15:00", date: "2024-05-02" },
      { source: "system", text: "Заплановано перезавантаження системи на 2:00 ночі", date: "2024-05-01" },
      { source: "social", text: "Новий коментар до вашого посту", date: "2024-05-03" }
  ];
  
  const groupedNotifications = groupNotificationsBySource(notifications);
  console.log(groupedNotifications);
  
  
  // Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group
  
  function groupBy(array, keyFunction) {
      return array.reduce((result, item) => {
  
          const key = keyFunction(item);
  
          if (!result[key]) {
              result[key] = [];
          }
          result[key].push(item);
          return result;
      }, {});
  }
  
  
  const data = [
    { type: 'food', name: 'Pizza' },
    { type: 'drink', name: 'Coffee' },
    { type: 'food', name: 'Hot Dog' }
    ];
  
  const groupedByType = groupBy(data, item => item.type);
  
  console.log(groupedByType);
  console.log(groupedByType['food']);