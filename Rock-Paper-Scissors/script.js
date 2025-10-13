const maxChoiceExclusively = 3;

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

function getUserChoice() {
    let input = prompt("Please, enter your choice (Rock, Scissors or Paper): ");
    return input.toLowerCase();
}

function playRound(userChoice, opponentChoice) {

    if (userChoice === opponentChoice) {
        return 0;
    }

    return (userChoice === "paper")
        ? (opponentChoice === "scissors" ? -1 : 1)
        : (userChoice === "scissors") ? (opponentChoice === "paper" ? 1 : -1) : (opponentChoice === "paper" ? -1 : 1);
}

function playGame(roundsChoice) {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < roundsChoice; i++) {

        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();

        const roundResult = playRound(userChoice, computerChoice);

        switch (roundResult) {
            case 1:
                alert("Congrats! You won this round. Your opponent chose " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase() + ".");
                humanScore++;
                break;
            case -1:
                alert("Sorry. You lost this round. Your opponent chose " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase() + ".");
                computerScore++;
                break;
            case 0:
                alert("No point for no one. You are equal.");
                break;
        }
    }

    if (humanScore == computerScore) {
        alert("Nobody wins. You are equal.");
    }
    else if (humanScore > computerScore) {
        alert("Congrats! You won!");
    }
    else {
        alert("Sorry. The opponent won.");
    }
}



alert("Welcome to the ROCK, PAPER, SCISSORS game!");
let roundsChoice = Number(prompt("Please, enter how many rounds you want to play: "));
playGame(roundsChoice);