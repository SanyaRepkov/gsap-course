let titleProject = prompt('Название проекта?')
let screensValue = prompt('Какой тип экранов вам необходим: шаблонные, с уникальным дизайном, с анимациями')
let screenPrice = +prompt('Сколько это будет стоить?')
let servise1 = prompt('Какой сервис нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
let fullPrice =  screenPrice + servicePrice1 + +servicePrice2
console.log(fullPrice)
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