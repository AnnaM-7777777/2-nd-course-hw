//_______________________ Генерация случайного числа от 1 до 100 _______________________

function showPopupGame1() {
    document.getElementById('popupGame1').style.display = 'block';
}

function closePopupGame1() {
    document.getElementById('popupGame1').style.display = 'none';
}


let randomNumber;

document.getElementById("generateButton").addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message").textContent = "Число сгенерировано! Удачи!";
});

document.getElementById("guessButton").addEventListener("click", function() {
    if (!randomNumber) {
        document.getElementById("message").textContent = "Сначала сгенерируйте число!";
        return;
    }

    const guess = parseInt(document.getElementById("guessInput").value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("message").textContent = "Введите число от 1 до 100";
        return;
    }

    if (guess === randomNumber) {
        document.getElementById("message").textContent = `Поздравляю! Вы угадали число ${randomNumber}!`;
        randomNumber = null; // Сбрасываем число после угадывания

    } else if (guess < randomNumber) {
        document.getElementById("message").textContent = "Загаданное число больше";

    } else {
        document.getElementById("message").textContent = "Загаданное число меньше";
    }
});





