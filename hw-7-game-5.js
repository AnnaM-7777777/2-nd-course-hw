//_______________________ Простая викторина _______________________

function showPopupGame5() {
    document.getElementById('popupGame5').style.display = 'block';
}

function closePopupGame5() {
    document.getElementById('popupGame5').style.display = 'none';
}


function answerPrompt() {
    let score = 0;

    //Массив вопросов и правильных ответов
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Зеленый", "3. Синий"],
            correctAnswer: "3"
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: "2"
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Пять", "2. Четыре", "3. Шесть"],
            correctAnswer: "1"
        }
    ];

    for (let i = 0; i < quiz.length; i++) {

        // Собираем варианты ответа в строку, добавляя \n(перенос строки) между ними
        const optionsString = quiz[i].options.join("\n");
        const inputAnswer = prompt(`${quiz[i].question} \n${optionsString} \n\nВведите номер ответа: `);

        if (inputAnswer === null) {
            alert("Вы отменили вопрос.");
            continue;
        }

        const answerNumber = parseInt(inputAnswer); //Преобразуем ввод в число

        if (isNaN(answerNumber) || answerNumber < 1 || answerNumber > quiz[i].options.length) {
            alert(`Пожалуйста, введите число от 1 до ${quiz[i].options.length}`);
            i--; //Повторяем текущий вопрос
            continue;
        }

        if (String(answerNumber) === quiz[i].correctAnswer) {
            score++;
            alert(`Правильно! Ответ: ${quiz[i].options[parseInt(quiz[i].correctAnswer) - 1]}`);
        } else {
            alert(`Неправильно! Правильный ответ: ${quiz[i].options[parseInt(quiz[i].correctAnswer) - 1]}`);
        }
    }

    alert(`Количество правильных ответов: ${score} из ${quiz.length}`);
}
