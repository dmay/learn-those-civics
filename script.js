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

const cardContainer = document.querySelector(".card-container");
cardContainer.addEventListener("click", () => {
    if (cardContainer.classList.contains("show-answer")) {
        nextQuestion();
    } else {
        cardContainer.classList.add("show-answer");
    }
});
