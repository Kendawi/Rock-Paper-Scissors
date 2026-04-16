


function getHumanChoice() {
    let humanChoice = prompt("please select a choice 1- Rock, 2- Paper, 3- Scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice
}
// this function return a random number from 1 to 3

function getComputerChoice (min = 1, max = 3) {
    let computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    computerChoice =  (computerChoice === 1) ? "rock" : (computerChoice === 2) ? "paper" : "scissors";
    return computerChoice;
}

function playRound(humanChoice,computerChoice) {
   
    let result = "draw";

    if (humanChoice === computerChoice) {
        return result;
    }

    if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper"))
    {
        result = "win";
        return result;
    }

     result = "lose";
        return result;
    

}

function playGame () {


console.log("Welcome to Rock Paper Scissors Game..");


let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;

let result = "";

for (let i = 1; i <= 5;i++) {

    console.log("Round " + i + " :");

     humanChoice = getHumanChoice();
     computerChoice = getComputerChoice();

    result = playRound(humanChoice,computerChoice);

    if (result === "draw") {
        console.log("It's draw this round!");
        alert("It's draw this round!");
    }
    else if (result === "win") {
        humanScore++;
        console.log("You win this round :)");
        alert("You win this round :)");
    }
    else {
        computerScore++;
        console.log("You lose this round :'(");
        alert("You lose this round :'(");
    }
}

console.log("GAME OVER!");
console.log("You score : " + humanScore + " rounds");
console.log("Computer score : " + computerScore + " rounds");

alert(`GAME OVER!\n
    You score : ${humanScore} round(s)\n
    Computer score : ${computerScore} round(s)`);

if (humanScore === computerScore) {
    console.log("It's draw");
}
else if (humanScore >= computerScore) {
    console.log("You win the game");
}
else{
    console.log("You lose the game");
}


}

playGame();



