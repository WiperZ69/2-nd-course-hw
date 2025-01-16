// 1
let jsStr = "js";
console.log(jsStr.toUpperCase());

// 2
const oneStr = ["Анна Каренина", "Атлант расправил плечи", "Повелитель мух", "Таинственный остров", "Анкета"];
const prefix = 'а';
function getStr(Str, twoStr) {
    const lowerCaseStr = twoStr.toLowerCase();
    return Str.filter(item => item.toLowerCase().startsWith(lowerCaseStr));
}
const resultStr = getStr(oneStr, prefix);
console.log(resultStr);

// 3
let numMath = 32.58884;
console.log(Math.floor(numMath), Math.ceil(numMath), Math.round(numMath));

// 4
const arrNum = [52, 53, 49, 77, 21, 32];
const arrMinNum = getMinOfArray(arrNum);
const arrMaxNum = getMaxOfArray(arrNum);
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}
console.log(`Максимальное число: ${arrMaxNum}, минимальное число: ${arrMinNum}`);

// 5
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const rnd = getRandomInt(1, 10);
console.log(rnd);

// 6
function getRandomArray(num) {
    if (num <= 0) {
        return [];
    }

    const length = Math.floor(num / 2);
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * num));
    }

    return randomArray;
}
let inputNum = prompt("Введите число");
inputNum = Number(inputNum);
const inputResult = getRandomArray(inputNum);
console.log(inputResult);

// 7 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let rndNum1 = prompt("Введите первое число");
let rndNum2 = prompt("Введите второе число");
rndNum1 = Number(rndNum1);
rndNum2 = Number(rndNum2);
const rndResult = getRandomInt(rndNum1, rndNum2)
console.log(rndResult);

// 8
const curDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', 
day: 'numeric' };
const formattedDate = curDate.toLocaleDateString('ru-RU', options);
console.log(formattedDate);

// 9
const currentDate = new Date();
console.log("Текущая дата:", currentDate.toLocaleDateString());
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log("Дата через 73 дня:", futureDate.toLocaleDateString());

// 10
function formatDate(date) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    
    const weekdays = [
        "воскресенье", "понедельник", "вторник", "среда",
        "четверг", "пятница", "суббота"
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const dateString = `Дата: ${day} ${month} ${year} — это ${weekday}.`;
    const timeString = `Время: ${hours}:${minutes}:${seconds}`;

    return `${dateString}\n${timeString}`;
}

const currentsDate = new Date();
console.log(formatDate(currentsDate));