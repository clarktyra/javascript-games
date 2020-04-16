var choice;
var computerChoice;

function printComChoice(){
    var choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * 3)]
    if(computerChoice === "rock"){
     document.getElementById("choiceArea").innerHTML = `<img style="width: 200px"  src="images/5a35c7b6db90f5.0034759615134739748994.png"/>`
    } else if(computerChoice === "paper"){
        document.getElementById("choiceArea").innerHTML = `<img style="width: 200px"  src="images/kisspng-post-it-note-paper-clip-art-post-it-note-png-5ab44be02d5f60.7688322515217653441859.png"/>`
    } else if(computerChoice === "scissors"){
        document.getElementById("choiceArea").innerHTML = `<img style="width: 200px"  src="images/kisspng-scissors-clip-art-scissors-5a80f8a6d8be97.1303518815184017028878.png"/>`
    }
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

