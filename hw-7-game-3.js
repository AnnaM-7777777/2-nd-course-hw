//_______________________ Переверни текст _______________________

function showPopupGame3() {
    document.getElementById('popupGame3').style.display = 'block';
}

function closePopupGame3() {
    document.getElementById('popupGame3').style.display = 'none';
}

function showPrompt() {
    const text = prompt("Введите слово");
    const reversText = text.toLowerCase('').split('').reverse().join('');
    const resultFirstCapitalWord = reversText.charAt(0).toUpperCase() + reversText.slice(1);

    if (text !== null) {
        document.getElementById("output").innerText = resultFirstCapitalWord;
    }
}

