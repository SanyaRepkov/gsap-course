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
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);
let servicePercentPrice = fullPrice - (fullPrice * 0.15);
servicePercentPrice = Math.round(servicePercentPrice);
if (fullPrice > 50000) {
    console.log("Сделаем скидку 10%");
  } else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log("Сделаем скидку 5%");
  } else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("Скидка не предусмотрена");
  } else if (fullPrice === 0) {
    console.log("Цена равна 0");
  } else if (fullPrice === 20000) {
    console.log("Цена равна 20000");
  } else if (fullPrice === 50000) {
    console.log("Цена равна 50000");
  } else {
    console.log("Что-то пошло не так");
  }
console.log(servicePercentPrice);

let getAllServicePrices = function(serv1, serv2) {
  let allServicePrices = serv1 + serv2;
  console.log(allServicePrices);
};

getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(screenPrice, servicePrice1, servicePrice2) {
  let allServicePrices = servicePrice1 + servicePrice2;
  return screenPrice + allServicePrices;
}

let fullPrice2 = getFullPrice(screenPrice, servicePrice1, servicePrice2);
console.log(fullPrice2);

function getTitle(titleProject) {
  return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}

let editedTitle = getTitle(titleProject);
console.log(editedTitle);

function getServicePercentPrice(fullPrice, percent) {
  return fullPrice - (fullPrice * (percent / 100));
}
servicePercentPrice = getServicePercentPrice(fullPrice, 15);
console.log(servicePercentPrice);