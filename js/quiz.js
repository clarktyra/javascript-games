var questions = [
  {
    question: "what is the capital of Maryland?",
    options: ["Baltimore", "Annapolis", "Potomac", "Cumberland"],
    answer: "Annapolis"
  },
  {
    question: "what is the capital of Virginia?",
    options: ["McClean", "Jamestown", "Richmond", "Williamsburg"],
    answer: "Richmond"
  },
  {
    question: "what is the capital of Pennsylvania?",
    options: ["Philidelphia", "Pittsburg", "Harrisburg", "Lancaster"],
    answer: "Philidelphia"
  }
];

var startButton = document.getElementById("start");
var time        = document.getElementById("time");
var questionArea   = document.getElementById("questions");
var choices     = document.getElementById("choices");
var submit      = document.getElementById("submit");
var feedback    = document.getElementById("feedback");
var initials    = document.getElementById("initials");

var seconds = 5;
var score = 0;

function startTimer(){
    event.preventDefault();
    timerId = setInterval(clockTick, 1000);
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide")
    questionArea.removeAttribute("class", "hide")
    showQuestion();
}

function clockTick() {
    seconds--;
    time.textContent = seconds;
    if (seconds <= 0) {
      quizOver();
    }
  }

function quizOver(){
    clearInterval(timerId)
    console.log("Quiz over")
    questionArea.setAttribute("class", "hide")
    var endScreen = document.getElementById("end-screen");
    endScreen.removeAttribute("class", "hide");
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = score;
}
var questionNumber = 0;
function showQuestion() {
  var questionTitle = document.getElementById("question-title");
  questionTitle.textContent = questions[questionNumber].question;
  // show button options
  choices.innerHTML = "";
    for (let i = 0; i < questions[questionNumber].options.length; i++) {
      var choicesButton = document.createElement("button");
      choicesButton.textContent = questions[questionNumber].options[i];
      choicesButton.onclick = questionSubmit;
      choices.appendChild(choicesButton);
    }
  
}

function questionSubmit(){
  questionNumber++;
  showQuestion()
}

startButton.addEventListener("click", startTimer);

console.log(questions.length)