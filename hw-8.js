//_______________________ Задание 1 _______________________

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);
console.log(people.map(person => `${person.name}: ${person.age}`));


//_______________________ Задание 2 _______________________

function isPositive(number) {
    return number > 0;
}

function isMale(human) {
    return human.gender === 'female';
}

function filter(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(filter([3, -4, 1, 9], isPositive));

const menAndWomen = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
console.log(menAndWomen.filter(isMale).map(human => `${human.name}: ${human.gender}`));


//_______________________ Задание 3 _______________________

function currentDate() {
    const timeInterval = setInterval(() => {
        console.log(new Date());
    }, 3000); // Интервал в 3 секунды

    setTimeout(() => {
        clearInterval(timeInterval); // Останавливаем интервал
        console.log('30 секунд прошло');
    }, 30000); // Через 30 секунд
}

currentDate();


//_______________________ Задание 4 _______________________

function delayForSecond(callback) {
    setTimeout(callback, 1000); // Вызов callback через 1 секунду
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});


//_______________________ Задание 5 _______________________

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSeconds(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);  // Исправлен синтаксис шаблонной строки
}

// Код выше менять нельзя
// Нужно изменить код ниже:
// Передаем анонимную функцию
/* delayForSeconds(() => setTimeout(() => sayHi('Мир'), 1000)); */ // Вывод функции как поняла я - через секунду delayForSeconds, затем еще через секунду приветствие sayHi
delayForSeconds(() => sayHi('Мир')); // Вывод функции, наверное, как нужно было

