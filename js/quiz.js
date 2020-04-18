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
  //,
  // {
  //   question: "what is the capital of New Jersey?",
  //   options: ["Baltimore", "Annapolis", "Potomac", "Cumberland"],
  //   answer: "Annapolis"
  // },
  // {
  //   question: "what is the capital of New York?",
  //   options: ["McClean", "Jamestown", "Richmond", "Williamsburg"],
  //   answer: "Richmond"
  // },
  // {
  //   question: "what is the capital of Connecticut?",
  //   options: ["Philidelphia", "Pittsburg", "Harrisburg", "Lancaster"],
  //   answer: "Philidelphia"
  // }, {
  //   question: "what is the capital of Rhode Island?",
  //   options: ["Baltimore", "Annapolis", "Potomac", "Cumberland"],
  //   answer: "Annapolis"
  // },
  // {
  //   question: "what is the capital of Main?",
  //   options: ["McClean", "Jamestown", "Richmond", "Williamsburg"],
  //   answer: "Richmond"
  // },
  // {
  //   question: "what is the capital of New Hampshire?",
  //   options: ["Philidelphia", "Pittsburg", "Harrisburg", "Lancaster"],
  //   answer: "Philidelphia"
  // },
  // {
  //   question: "what is the capital of Vermont?",
  //   options: ["Philidelphia", "Pittsburg", "Harrisburg", "Lancaster"],
  //   answer: "Philidelphia"
  // }
];

var startButton = document.getElementById("start");
var time        = document.getElementById("time");
var questionArea = document.getElementById("questions");
var choices     = document.getElementById("choices");
var submit      = document.getElementById("submit");
var feedback    = document.getElementById("feedback");
var initials    = document.getElementById("initials");
var endScreen = document.getElementById("end-screen");

var seconds = 5;
var score = 0;
var userChoices = [];
var questionNumber = 0;

function startTimer(){
    event.preventDefault();
    seconds = 5;
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

