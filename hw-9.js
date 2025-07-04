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

/* Показать текст
Скрыть текст */
//_______________________ Задание 2 _______________________
