// Створіть функцію randomDelayPrint, 
// яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди.
// Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.

randomDelayPrint("Hello");
function randomDelayPrint(message) {
    const minDelay = 0; 
    const maxDelay = 1000; 
  
    for (let i = 0; i < message.length; i++) {
      const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
      setTimeout(() => {
        console.log(message[i]);
      }, delay);
    }
  }
  
  randomDelayPrint("Hello");