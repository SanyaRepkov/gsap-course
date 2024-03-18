let titleProject = prompt('Название проекта?');
console.log(titleProject);
let screensValue = prompt('Какой тип экранов вам необходим: шаблонные, с уникальным дизайном, с анимациями');
console.log(screensValue);
let screenPrice = +prompt('Сколько это будет стоить?');
console.log(screenPrice);
let service1 = prompt('Какой сервис нужен?');
console.log(service1);
let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);
let service2 = prompt('Какой еще сервис тебе нужен?');
console.log(service2);
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
console.log(servicePrice2);
// let fullPrice = screenPrice + servicePrice1 + servicePrice2;
// console.log(fullPrice);
// let servicePercentPrice = fullPrice - (fullPrice * 0.15);
// servicePercentPrice = Math.round(servicePercentPrice);


let getAllServicePrices = function(serv1, serv2) {
  return serv1 + serv2;
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(screenPrice) {
  return screenPrice + allServicePrices;
}

let fullPrice = getFullPrice(screenPrice);

function getTitle(titleProject) {
  return titleProject.trim().charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}


titleProject = getTitle(titleProject);
console.log(titleProject);

function getServicePercentPrice(fullPrice, percent) {
  return Math.round(fullPrice - (fullPrice * (percent / 100)));
}
let servicePercentPrice = getServicePercentPrice(fullPrice, 15);
console.log(servicePercentPrice);

const getRollbackMessage = (price) => {
  if (price > 50000) {
    console.log("Сделаем скидку 10%");
  } else if (price > 20000 && price <= 50000) {
    console.log("Сделаем скидку 5%");
  } else if (price > 0 && price <= 20000) {
    console.log("Скидка не предусмотрена");
  } else if (price === 0) {
    console.log("Цена равна 0");
  } else if (price === 20000) {
    console.log("Цена равна 20000");
  } else if (price === 50000) {
    console.log("Цена равна 50000");
  } else {
    console.log("Что-то пошло не так");
  }

  console.log(servicePercentPrice);
}

getRollbackMessage(fullPrice);
