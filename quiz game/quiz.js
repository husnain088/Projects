// Define quiz data
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Shakespeare", "Hemingway", "Tolstoy", "Fitzgerald"],
        correctAnswer: "Shakespeare"
    }
];

// DOM elements
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const feedbackElement = document.getElementById('feedback');

let currentQuestionIndex = 0;
let score = 0;

// Function to load question and choices
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice));
        choicesElement.appendChild(button);
    });
}

// Function to check answer
function checkAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.correctAnswer) {
        score++;
        feedbackElement.textContent = 'Correct!';
    } else {
        feedbackElement.textContent = 'Incorrect.';
    }

    // Move to next question or end game
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

// Function to end game
function endGame() {
    questionElement.textContent = '';
    choicesElement.textContent = '';
    submitButton.style.display = 'none';
    feedbackElement.textContent = `Quiz completed! Your score: ${score} out of ${questions.length}`;
}

// Load first question
loadQuestion();
