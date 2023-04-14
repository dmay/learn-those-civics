let questions = [];
let currentQuestionIndex = -1;

fetch("questions.json")
    .then((response) => response.json())
    .then((data) => {
        questions = data;
        nextQuestion();
    });

function nextQuestion() {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.classList.remove("show-answer");

    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const question = questions[currentQuestionIndex].question;
    const answer = questions[currentQuestionIndex].answer;

    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");

    questionElement.textContent = question;
    answerElement.textContent = answer;
}
    

function showAnswer() {
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");

    questionElement.classList.add("card-flip");
    answerElement.classList.add("card-flip");
    answerElement.classList.remove("card-slide");
}

const cardContainer = document.querySelector(".card-container");
ccardContainer.addEventListener("click", () => {
    if (cardContainer.classList.contains("show-answer")) {
        nextQuestion();
    } else {
        cardContainer.classList.add("show-answer");
    }
});

