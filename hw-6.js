//_______________________ Задание 1 _______________________

let numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) {
        break;
    }
}


//_______________________ Задание 2 _______________________

let arr = [1, 5, 4, 10, 0, 3];
let val = 4;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] === val) {
		console.log(i);
        break;
	}
}


//_______________________ Задание 3 _______________________

let num = [1, 3, 5, 10, 20];
let joinNum = num.join(" ");

console.log(joinNum);


//_______________________ Задание 4 _______________________

let arrays = [
    [1, 1, 1], 
    [2, 2, 2], 
    [3, 3, 3]
];

for (let item of arrays) {
    for (let i = 0; i < item.length; i++) {
        console.log(item);
    }
}
