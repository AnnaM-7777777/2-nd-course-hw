//_______________________ Генерация случайных задач на сложение, вычитание, умножение и деление _______________________

function showPopupGame2() {
    document.getElementById('popupGame2').style.display = 'block';
}

function closePopupGame2() {
    document.getElementById('popupGame2').style.display = 'none';
}

const questionElement = document.getElementById('question');
        const answerInput = document.getElementById('answerInput');
        const submitButton = document.getElementById('submitButton');
        const resultElement = document.getElementById('result');

        let correctAnswer; // Объявляем correctAnswer в глобальной области видимости

        function generateQuestion() {
            const num1 = Math.floor(Math.random() * 10);
            const num2 = Math.floor(Math.random() * 10);
            const operator = Math.random() < 0.5 ? '+' : '*'; // Можно добавить другие операторы
            const calculatedAnswer = operator === '+' ? num1 + num2 : num1 * num2;

            questionElement.textContent = `${num1} ${operator} ${num2} = ?`;
            return calculatedAnswer; // Возвращаем вычисленный ответ
        }

        function checkAnswer() {
            const userAnswer = parseInt(answerInput.value, 10);

            if (userAnswer === correctAnswer) {
                resultElement.textContent = 'Правильно!';
            } else {
                resultElement.textContent = `Неправильно! Правильный ответ: ${correctAnswer}`;
            }

            answerInput.value = '';
            correctAnswer = generateQuestion(); // Генерируем новую задачу и сохраняем ответ
        }

        submitButton.addEventListener('click', () => {
            checkAnswer(); // Убираем аргумент, используем глобальную correctAnswer
        });

        correctAnswer = generateQuestion(); // Генерируем первый вопрос при загрузке страницы