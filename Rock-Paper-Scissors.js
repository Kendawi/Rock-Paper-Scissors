

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

let humanScore = 0;
let computerScore = 0;

let computerChoice;
let result = "";

const container = document.createElement("div");

const rockBtn = document.createElement("button");
rockBtn.textContent = "rock";

const paperBtn = document.createElement("button");
paperBtn.textContent = "paper";

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "scissors";


container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);


const gameResult = document.createElement("div");
const roundResult = document.createElement("p");
const finalResult = document.createElement("p");

document.body.appendChild(container);
document.body.appendChild(gameResult);


const restartButton = document.createElement("button");
restartButton.textContent = "Restart";


function roundResultUi (result) {

     if (result === "draw") {
            roundResult.textContent = "It's draw this round!";
    }
    else if (result === "win") {
        roundResult.textContent = "You win this round :)";
    }
    else {
        roundResult.textContent = "You lose this round :'(";
    }

    gameResult.appendChild(roundResult);
}


function GameResultUi () {

        finalResult.textContent = `GAME OVER!\n
    You score : ${humanScore} round(s)\n
    Computer score : ${computerScore} round(s)`; 

        gameResult.appendChild(finalResult);
        gameResult.appendChild(restartButton);
        container.removeEventListener("click",handleClick);
   
}


function handleClick (e) {

    if (e.target.tagName === "BUTTON") {

    computerChoice = getComputerChoice();
        result = playRound(e.target.textContent,computerChoice);

        if (result === "win")
            humanScore++;       
        else if (result === "lose")
        computerScore++;
     

        roundResultUi(result);
    }
         

    if (humanScore === 5 || computerScore === 5) {
        GameResultUi();
    }
}


container.addEventListener('click',handleClick);

gameResult.addEventListener('click',(e) => {
    if (e.target === restartButton)
        location.reload();
})
}

playGame();



