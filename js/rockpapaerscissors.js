var choice;
var computerChoice;

function printComChoice(){
    var choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * 3)]
     document.getElementById("choiceArea").innerHTML = computerChoice;
    winner();
}

function userChoice(a){
    choice = a
}

function setAreaBlank(){
    document.getElementById("choiceArea").innerHTML = "";
}

function winner(){
    if (choice === computerChoice){
        document.getElementById("winnerArea").innerHTML = "<h1>Draw</h1>";
    } else if (choice === "rock" && computerChoice === "scissors" || choice === "scissors" && computerChoice === "paper" || choice === "paper" && computerChoice === "rock" ){
        document.getElementById("winnerArea").innerHTML = "<h1>You Win!</h1>";
    } else {
        document.getElementById("winnerArea").innerHTML = "<h1>You Lose</h1>";
    }

    
    
}


$("#rock").on("click", function() {
    userChoice("rock");
    setAreaBlank();
    printComChoice();
    
  });
$("#paper").on("click", function() {
    userChoice("paper");
    setAreaBlank();
    printComChoice()
    
  });
$("#scissors").on("click", function() {
    userChoice("scissors");
    setAreaBlank();
    printComChoice();
    
  });

