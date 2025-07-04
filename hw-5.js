//_______________________ Задание 1 _______________________

function smallerNumber (a, b) {
    return a < b ? a : b;
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
    const age = Number(prompt("Сколько Вам лет?"));

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
    const num1 = Number(prompt('Введите первое число'));
    const num2 = Number(prompt('Введите второе число'));

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


//_______________________ Задание 7 _______________________

const circle1 = {
    radius: 7,
    color: 'blue',
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(`Площадь круга:`, circle1.getArea());
console.log(`Периметр окружности:`, circle1.getPerimeter());


const circle2 = {
    radius: 12,
    color: 'green',  
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(`Площадь круга:`, circle2.getArea());
console.log(`Периметр окружности:`, circle2.getPerimeter());





