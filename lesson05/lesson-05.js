let screenPrice = 10000;
let percentage = 10;
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue; 
let responsive;

const asking = function() {
  titleProject = prompt('Название проекта');
  screensValue = prompt('Тип экранов (шаблонные, уникальные, с анимациями)');
  responsive = prompt('Нужен ли респонсив на сайте?');
  screenPrice = validInput('Сколько это будет стоить?');
}

const getTitle = function(title) {
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
}

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getServicePercentPrices = function() {
  return Math.round(fullPrice - (fullPrice * (percentage / 100)));
}

const checkIsNumber = function(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

function validInput(promptMessage) {
  let userInput;
  do {
    userInput = prompt(promptMessage).trim(); // Удаляем лишние пробелы
  } while (!checkIsNumber(userInput) || userInput === null); // Проверяем на число и что пользователь не нажал на отмену
  return parseFloat(userInput);
}

const getAllServicePrices = function() {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    let service = '';
    if (i === 0) {
      service = prompt('Какой дополнительный тип услуги нужен?', 'Интеграция АМО срм');
    } else if (i === 1) {
      service = prompt('Какой дополнительный тип услуги нужен?', 'Интеграция с запиером');
    }

    let textFromPrompt = '';
    while (!checkIsNumber(textFromPrompt) || textFromPrompt.trim() == '' || textFromPrompt == null) {
      textFromPrompt = prompt('Сколько это будет стоить?');
    }

    sum = sum + Number(textFromPrompt);
  }
  return sum;
}

// Предоставление скидки

const getRollbackMessage = (price) => {
  if (price > 50000) {
    return "Сделаем скидку 10%";
  } else if (price > 20000 && price <= 50000) {
    return "Сделаем скидку 5%";
  } else if (price > 0 && price <= 20000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
}

asking();
titleProject = getTitle(titleProject);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
const rollbackMessage = getRollbackMessage(fullPrice);

console.log('Название проекта:', titleProject);
console.log('Тип экранов:', screensValue);
console.log('Респонсив:', responsive);
console.log('Цена за экран:', screenPrice);
console.log('Цены на доп. услуги:', allServicePrices);
console.log('Общая стоимость:', fullPrice);
console.log('Цена с учетом комиссии подрядчика:', servicePercentPrice);
console.log('Сообщение о скидке:', rollbackMessage);
