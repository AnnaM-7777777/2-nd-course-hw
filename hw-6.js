//_______________________ Задание 1 _______________________

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) {
        break;
    }
}


//_______________________ Задание 2 _______________________

const arr = [1, 5, 4, 10, 0, 3];
const val = 4;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] === val) {
		console.log(i);
        break;
	}
}


//_______________________ Задание 3 _______________________

const num = [1, 3, 5, 10, 20];
const joinNum = num.join(" ");

console.log(joinNum);


//_______________________ Задание 4 _______________________

const arrays = [
    [1, 1, 1], 
    [2, 2, 2], 
    [3, 3, 3]
];

for (let item of arrays) {
    for (let i = 0; i < item.length; i++) {
        console.log(item);
    }
}


//_______________________ Задание 5 _______________________

const array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);


//_______________________ Задание 6 _______________________

const sortArr = [9, 8, 7, 'a', 6, 5];
sortArr.sort();
const filteredArr = sortArr.filter(item => item !== 'a');
console.log(filteredArr);


//_______________________ Задание 7 _______________________

const guessNum = [9, 8, 7, 6, 5];
const inputNumber = prompt('Введите число');
const number = parseInt(inputNumber);
const isFound = guessNum.includes(number);

if (isFound) {
    alert('Угадал');
    } else {
    alert('Не угадал');
}


//_______________________ Задание 8 _______________________

const str = 'abcdef';
console.log(str.split('').reverse().join(''));


//_______________________ Задание 9 _______________________

const arrNum = [[1, 2, 3], [4, 5, 6]];
const newArrNum = [].concat(...arrNum);
console.log(newArrNum);


//_______________________ Задание 10 _______________________

const arrayNum = [2, 6, 1, 5, 4, 8];

for (let i = 0; i < arrayNum.length - 1; i++) {
    const sum = arrayNum[i] + arrayNum[i + 1];
    console.log(sum);
}


//_______________________ Задание 11 _______________________

const arrayNumbers = [10, 4, 5, 1, 3];

function squareArray(arrayNumbers) {
    return arrayNumbers.map(num => num ** 2);
}

console.log(squareArray(arrayNumbers));


//_______________________ Задание 12 _______________________

const arrayWords = ["Кот", "Замок", "Платье", "Торт", "Юг", "Львёнок"];

function lengthWords(arrayWords) {
    return arrayWords.map(word => word.length);
}

console.log(lengthWords(arrayWords));


//_______________________ Задание 13 _______________________

const arrNumbers = [5, 7, -6, 6, 3, -2, -9];

function filteredNum(arrNumbers) {
    /* arrNumbers.sort(); */
    return arrNumbers.filter(num => num < 0);
}

console.log(filteredNum(arrNumbers));


//_______________________ Задание 14 _______________________

function generateRandomArray(length = 10) {
    return Array.from({ length }, () => Math.floor(Math.random() * 11));
}

const originalArrayNum = generateRandomArray();
const evenArrayNum = originalArrayNum.filter(num => num % 2 === 0);

console.log("Сгенерирован исходный массив:", originalArrayNum);
console.log("Массив с четными значениями:", evenArrayNum);


//_______________________ Задание 15 _______________________

function generateRandomArr(length = 6) {
    return Array.from({ length }, () => Math.floor(Math.random() * 11));
}

const originalArrNum = generateRandomArr();
const meanArrNum = originalArrNum.reduce((total, number) => total + number, 0) / originalArrNum.length;

console.log("Сгенерирован исходный массив:", originalArrNum);
console.log("Среднее арифметическое элементов массива:", meanArrNum);

