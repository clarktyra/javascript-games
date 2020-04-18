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
  },
  {
    question: "what is the capital of New Jersey?",
    options: ["Trenton", "Newark", "Jersey City", "Atlantic City"],
    answer: "Trenton"
  },
  {
    question: "what is the capital of New York?",
    options: ["Rochester", "Buffalo", "New York City", "Albany"],
    answer: "Albany"
  },
  {
    question: "what is the capital of Connecticut?",
    options: ["Milford", "Stamford", "New Haven", "Hartford"],
    answer: "Hartford"
  }, {
    question: "what is the capital of Rhode Island?",
    options: ["Warwick", "Newport", "Providence", "Cranston"],
    answer: "Providence"
  },
  {
    question: "what is the capital of Maine?",
    options: ["Portland", "Augusta", "Bangor", "Harpswell"],
    answer: "Augusta"
  },
  {
    question: "what is the capital of New Hampshire?",
    options: ["Concord", "Manchester", "Portsmouth", "Bedford"],
    answer: "Concord"
  },
  {
    question: "what is the capital of Vermont?",
    options: ["Middlebury", "Bennington", "Burlington", "Montpelier"],
    answer: "Montpelier"
  }
];

var startButton = document.getElementById("start");
var time        = document.getElementById("time");
var questionArea = document.getElementById("questions");
var choices     = document.getElementById("choices");
var submit      = document.getElementById("submit");
var feedback    = document.getElementById("feedback");
var initials    = document.getElementById("initials");
var endScreen = document.getElementById("end-screen");

var seconds = 30;
var score ;
var userChoices;
var questionNumber;

function startTimer(){
    event.preventDefault();
    seconds = 30;
    score = 0;
    questionNumber = 0
    userChoices = [];
    endScreen.setAttribute("class", "hide");
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
    endScreen.removeAttribute("class", "hide");
    var finalScore = document.getElementById("final-score");
    getScore();
    finalScore.textContent = score;
}

function showQuestion() {
  var questionTitle = document.getElementById("question-title");
  questionTitle.textContent = questions[questionNumber].question;
  // show button options
  choices.innerHTML = "";
    for (let i = 0; i < questions[questionNumber].options.length; i++) {
      var choicesButton = document.createElement("button");
      choicesButton.textContent = questions[questionNumber].options[i];
      choicesButton.setAttribute("value", questions[questionNumber].options[i])
      choicesButton.onclick = questionSubmit;
      choices.appendChild(choicesButton);
    }
}

function questionSubmit(){
  questionNumber++;
  userChoices.push(this.value)
  if(questionNumber < questions.length){
    showQuestion()
  } else {
    quizOver()
  }
}

function getScore(){
  var answers = questions.map(piece => piece.answer);
  console.log(answers)
  console.log(userChoices)
  for(let a = 0; a < answers.length; a++){
    if(answers[a]===userChoices[a]){
      score++
    }
  }

}

startButton.addEventListener("click", startTimer);

