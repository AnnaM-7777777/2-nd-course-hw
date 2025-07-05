//_______________________ Задание 1 _______________________

const btnElement = document.querySelector('#btnElement');
const textElement = document.querySelector('#textElement');

btnElement.addEventListener('click', function() {
    if (textElement.style.display === '') {
        textElement.style.display = 'none';
        btnElement.textContent = 'Показать текст';
    } else {
        textElement.style.display = '';
        btnElement.textContent = 'Скрыть текст';
    }
});


//_______________________ Задание 2 _______________________

const btnColorElement = document.querySelector('#btnColor');
const textColorElement = document.querySelector('#textColor');

btnColorElement.addEventListener('click', function() {
    if (textColorElement.style.color === '') {
        textColorElement.style.color = 'blue';
    } else {
        textColorElement.style.color = '';
    }
});


//_______________________ Задание 3 _______________________

const btnChangeElement = document.querySelector('#btnChange');
const textChangeElement = document.querySelector('#textChange');

btnChangeElement.addEventListener('click', function() {
    textChangeElement.textContent = 'Привет, мир!';
});


//_______________________ Задание 4 _______________________

const btnElementAll = document.querySelectorAll('#btnChangeAll');
const searchElementAll = document.querySelectorAll('.description');

btnElementAll.forEach(btn => {
    btn.addEventListener('click', function() {
        searchElementAll.forEach(description => {
            description.textContent = 'Измененный текст.'; // Меняем текстовое содержимое каждого элемента на 'Измененный текст.'
        });
    });
});


//_______________________ Задание 5 _______________________

const btnChangeTextAll = document.querySelectorAll('#btnDescripAll');
const searchDescripAll = document.querySelectorAll('.descriptions');

btnChangeTextAll.forEach(btn => {
    btn.addEventListener('click', function() {
        searchDescripAll.forEach(descriptions => {
            descriptions.textContent = 'Новый текст'; // Меняем текстовое содержимое каждого элемента на 'Измененный текст.'
        });
    });
});


//_______________________ Задание 6 _______________________

const btnAddElement = document.getElementById('btnAdd');

btnAddElement.addEventListener('click', function() {
    const newP = document.createElement('p');
    newP.textContent = 'Новый элемент';
    document.body.appendChild(newP);
});