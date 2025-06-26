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


