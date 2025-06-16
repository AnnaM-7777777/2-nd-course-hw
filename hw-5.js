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


