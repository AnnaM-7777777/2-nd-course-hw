//_______________________ Задание 1 _______________________

function smallerNumber (a, b) {

    if (a < b) {
        return a;

    } else {
        return b;
    }
}

console.log(smallerNumber(2, 5));
console.log(smallerNumber(6, 4));
console.log(smallerNumber(3, 3));


//_______________________ Задание 2 _______________________

function evenOddNumber(number) {

    if (number % 2 === 0) {
        return console.log('Число четное');

    } else {
        return console.log('Число нечетное');
    }
}

evenOddNumber(28);
evenOddNumber(7);


//_______________________ Задание 3 _______________________

function squareNumber1(number) {

    const power = number ** 2;
    console.log(power);
}

squareNumber1(3);
squareNumber1(8);


function squareNumber2(number) {
    return console.log(number ** 2);
}

squareNumber2(5);
squareNumber2(2);


//_______________________ Задание 4 _______________________

function howOld() {

    let age = Number(prompt("Сколько Вам лет?"));

    if (age < 0 || isNaN(age)) {
        console.log('Вы ввели неправильное значение!');

    } else if (age >= 0 && age < 13) {
        console.log('Привет, друг!');

    } else {
        console.log('Добро пожаловать!')
    }
}

howOld();


//_______________________ Задание 5 _______________________

function checkingNumbers() {

    const num1 = prompt('Введите первое число');
    const num2 = prompt('Введите второе число');


    if (isNaN(num1) || isNaN(num2)) {
        return console.log('Одно или оба значения не являются числом');

    } else {
        return console.log(num1 * num2);
    }
}

 checkingNumbers();


//_______________________ Задание 6 _______________________


function powerNumber() {

    const input = prompt('Введите число');

    if (isNaN(input)) {
        return console.log('Переданный параметр не является числом');

    } else {
        return console.log(`${input} в кубе равняется`, input ** 3);
    }
}

 powerNumber();


