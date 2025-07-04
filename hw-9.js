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