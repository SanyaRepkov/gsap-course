const gameBotFunction = function () {

  function randomGenerate(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  

  let randomNuber = randomGenerate(0,100);
  let userGuess;
  let attempts = 3;

  const checkIsNumber = function(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
  }

  return function getUserGuess(){
    
    userGuess = prompt('Угадайте число от 0 до 100, количество попыток: ' + attempts);
    
    while (userGuess === null || !checkIsNumber(userGuess) || userGuess.trim() == '') {
      if (userGuess === null) {
          alert('Вы завершили игру');
          return;
      } else alert('Вы ввели некорректное число');
      userGuess = prompt('Угадайте число от 1 до 100');
    }
  
    userGuess = Number(userGuess);

    if (userGuess === randomNuber) {
      alert('Ураааа, вы угадали, бот действительно загадал ' + randomNuber);
      if (confirm('Хотите повторить игру?')) {
        randomNuber = randomGenerate(0,10);
        attempts = 3;
        getUserGuess();
      }
      return;
    }

    while (attempts > 1) {
      attempts--;
      if (userGuess < randomNuber) {
        userGuess = prompt('Загаданное число больше. Оставшиеся попытки: ' + attempts);
      } else if (userGuess > randomNuber) {
        userGuess = prompt('Загаданное число меньше. Оставшиеся попытки: ' + attempts);
      }
      userGuess = Number(userGuess);
      if (userGuess === randomNuber) {
        alert('Ураааа, вы угадали, бот действительно загадал ' + randomNuber);
        if (confirm('Хотите повторить игру?')) {
          randomNuber = randomGenerate(0,10);
          attempts = 3;
          getUserGuess();
        }
        return;
      }
    }

    if (attempts === 1) {
      alert('К сожалению, вы не угадали. Бот загадал число ' + randomNuber);
      if (confirm('Хотите повторить игру?')) {
        randomNuber = randomGenerate(0,10);
        attempts = 3;
        getUserGuess();
      }
    }
  }
}

const getUserGuess = gameBotFunction();
getUserGuess();
