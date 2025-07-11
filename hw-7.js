//_______________________ Задание 1 _______________________

const str = 'js';
console.log(str.toUpperCase());


//_______________________ Задание 2 _______________________

const arrFruits = ["Lemon", "pear", "orange", "apple", "apriCot", "peach", "Pineapple", "banAna", "strawberrY", "cherry"];
const strPrefix = "p";

function filterByPrefix(arrFruits, strPrefix) {
    strPrefix = strPrefix.toLowerCase();

    return arrFruits.filter(function(item) {
        return item.toLowerCase().startsWith(strPrefix);
    });
}

console.log(filterByPrefix(arrFruits, strPrefix));


//_______________________ Задание 3 _______________________

let fractionalNumber = 32.58884;
console.log(Math.floor(fractionalNumber));
console.log(Math.ceil(fractionalNumber));
console.log(Math.round(fractionalNumber));


//_______________________ Задание 4 _______________________

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


//_______________________ Задание 5 _______________________

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

generateRandomNumber();


//_______________________ Задание 6 _______________________

/* const maxNumber = Math.floor(Math.random() * 10) + 1; */  //генерация любого случайного числа от 1 до 10
const maxNumber = 8; //конкретное заданное число
const randomArray = generateRandomArray(maxNumber);

function generateRandomArray(maxNumber) {
    const arrayLength = Math.floor(maxNumber / 2); // длина массива в два раза меньше переданного числа
    const randomArray = [];

    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.floor(Math.random() * (maxNumber + 1)); // Генерация случайного числа от 0 до maxNumber включительно
        randomArray.push(randomNumber);
    }

    return randomArray;
}

console.log(randomArray);


//_______________________ Задание 7 _______________________

const minNum = 4;
const maxNum = 13;

function generateRandomNum(minNum, maxNum) {
    if (minNum >= maxNum) {
        throw new Error('Первое число должно быть меньше второго');
    }

    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

const randomNumber = generateRandomNum(minNum, maxNum);
console.log(randomNumber);


//_______________________ Задание 8 _______________________

const myDate = new Date();
console.log(myDate);


//_______________________ Задание 9 _______________________

const currentDate = new Date();
const daysFuture73 = new Date(currentDate.getTime() + 73 * 24 * 60 * 60 * 1000);

console.log(daysFuture73);


//_______________________ Задание 10 _______________________

const daysWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const myDateNow = new Date();

const todayDate = `Дата: ${myDateNow.getDate()} ${months[myDateNow.getMonth()]} ${myDateNow.getFullYear()} - это ${daysWeek[myDateNow.getDay()]}`;
const todayTime = `Время: ${myDateNow.getHours()}:${myDateNow.getMinutes().toString().padStart(2, '0')}:${myDateNow.getSeconds().toString().padStart(2, '0')}`;

console.log(`${todayDate} \n${todayTime}`);

