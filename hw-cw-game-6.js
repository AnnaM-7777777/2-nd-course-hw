//_______________________ Генератор случайных цветов _______________________

function showPopupGame6() {
    document.getElementById('popupGame6').style.display = 'block';
}

function closePopupGame6() {
    document.getElementById('popupGame6').style.display = 'none';
}


document.getElementById('btnBackgroundColor').addEventListener('click', function() {
    // Генерация случайного цвета в формате RGB
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    document.getElementById('popupGame6').style.backgroundColor = randomColor;
});