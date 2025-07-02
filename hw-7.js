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