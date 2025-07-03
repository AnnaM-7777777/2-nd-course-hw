//_______________________ Простая викторина _______________________

function showPopupGame4() {
    document.getElementById('popupGame4').style.display = 'block';
}

function closePopupGame4() {
    document.getElementById('popupGame4').style.display = 'none';
}


function getComputerChoice() {
    const version = ['камень', 'ножницы', 'бумага'];
    const randomIndex = Math.floor(Math.random() * 3);
    return version[randomIndex];
}

function determineWinner(userVersion, computerVersion) {
    if (userVersion === computerVersion) {
        return 'Ничья!';
    } else if (
        (userVersion === 'камень' && computerVersion === 'ножницы') ||
        (userVersion === 'ножницы' && computerVersion === 'бумага') ||
        (userVersion === 'бумага' && computerVersion === 'камень')
    ) {
        return 'Победа!';
    } else {
        return 'Поражение!';
    }
}

function determineWinner(userVersion, computerVersion) {
    if (userVersion === computerVersion) {
        return 'Ничья!';
    } else if (
        (userVersion === 'камень' && computerVersion === 'ножницы') ||
        (userVersion === 'ножницы' && computerVersion === 'бумага') ||
        (userVersion === 'бумага' && computerVersion === 'камень')
    ) {
        return 'Победа!';
    } else {
        return 'Поражение!';
    }
}


function playGame() {
    const userVersion = prompt('Выберите: камень, ножницы или бумага').toLowerCase();

    if (!['камень', 'ножницы', 'бумага'].includes(userVersion)) {
        alert('Некорректный ввод. Пожалуйста, выберите камень, ножницы или бумага.');
        return;
    }

    const computerVersion = getComputerChoice();
    const resultElement = document.getElementById('resultGame'); // Получаем ссылку на элемент, куда будем выводить результат
    const result = determineWinner(userVersion, computerVersion);
    resultElement.innerText = `Вы выбрали: ${userVersion}. \n Компьютер выбрал: ${computerVersion}. \n Результат: ${result}`;
}

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', playGame);


