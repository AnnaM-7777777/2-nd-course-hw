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



