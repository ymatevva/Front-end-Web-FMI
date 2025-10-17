const maxChoiceExclusively = 3;
 let humanScore = 0;
 let computerScore = 0;
 let roundsCount = 0;

function getComputerChoice() {

    const choice = Math.floor(Math.random() * maxChoiceExclusively);

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
    }
}

// function getUserChoice() {
//     let input = prompt("Please, enter your choice (Rock, Scissors or Paper): ");
//     return input.toLowerCase();
// }

function playRound(userChoice, opponentChoice) {

    if (userChoice === opponentChoice) {
        return 0;
    }

    return (userChoice === "paper")
        ? (opponentChoice === "scissors" ? -1 : 1)
        : (userChoice === "scissors") ? (opponentChoice === "paper" ? 1 : -1) : (opponentChoice === "paper" ? -1 : 1);
}

function playGame(userInput) {

    const computerChoice = getComputerChoice();
    const displayA = document.getElementById("display");

    const roundResult = playRound(userInput, computerChoice);

        switch (roundResult) {
            case 1:
                displayA.textContent = "Congrats! You won this round. Your opponent chose " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase() + ".";
                humanScore++;
                break;
            case -1:
                displayA.textContent = ("Sorry. You lost this round. Your opponent chose " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase() + ".");
                computerScore++;
                break;
            case 0:
                displayA.textContent = ("No point for no one. You are equal.");
                break;
        }

    roundsCount++;
    if(roundsCount == 5) {
        
    if (humanScore == computerScore) {
        displayA.textContent = ("Nobody wins. You are equal.");
    }
    else if (humanScore > computerScore) {
        displayA.textContent = ("Congrats! You won!");
    }
    else {
        displayA.textContent = ("Sorry. The opponent won.");
    }

    displayA.textContent = "New Game Ahead!";
     humanScore = 0;
    computerScore = 0;
    roundsCount = 0;
  }
}


alert("Welcome to the ROCK, PAPER, SCISSORS game!");

const displayArea = document.createElement("div");
displayArea.id = "display";
document.body.append(displayArea);

const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
buttonRock.addEventListener("click", () => {
  playGame("rock");
});

const buttonScissors = document.createElement("button");
buttonScissors.textContent = "Scissors";
buttonScissors.addEventListener("click", () => {
  playGame("scissors");
});

const buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";
buttonPaper.addEventListener("click", () => {
  playGame("paper");
});


document.body.append(buttonRock);
document.body.append(buttonScissors);
document.body.append(buttonPaper);
