//_______________________ Задание 1 _______________________

let a = 10;
alert (a);

a = 20;
alert (a);



//_______________________ Задание 2 _______________________

let iPhone = 2007;
alert (iPhone);



//_______________________ Задание 3 _______________________

let creator = 'Брендан Эйх';
alert (creator);



//_______________________ Задание 4 _______________________

let numBig = 10;
let numSmall = 2;

let sum = numBig + numSmall;
let difference = numBig - numSmall;
let product = numBig * numSmall;
let quotient = numBig / numSmall;

let lineBreak = '\n';

alert(` сумма: ${sum}, ${lineBreak} разность: ${difference}, ${lineBreak} произведение: ${product}, ${lineBreak} частное: ${quotient}`);



//_______________________ Задание 5 _______________________

let numb = 2;
let result = numb ** 5;

alert(result);



//_______________________ Задание 6 _______________________

let b = 9;   //переменные 'a' и 'b' заменены на 'b' и 'c' соответственно в связи с тем, что переменная 'a' уже есть в 1-ом задании
let c = 2;

let remainder = 9 % 2;

alert(remainder);



//_______________________ Задание 7 _______________________

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);



//_______________________ Задание 8 _______________________

let age = Number(prompt('Сколько Вам лет?'));

alert(age);



//_______________________ Задание 9 _______________________

let user = {
   name: 'Anna',
   age: 35,
   isAdmin: true
}

alert(user.name);
alert(user.age);
alert(user.isAdmin);



//_______________________ Задание 10 _______________________

let userName = prompt('Как тебя зовут?');

alert(`Привет, ${userName}`);