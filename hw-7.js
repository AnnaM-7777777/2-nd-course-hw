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


