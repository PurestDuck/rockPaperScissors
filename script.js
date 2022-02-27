function computerPlay() {
    let moveNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (moveNumber === 1) {
        computerChoice = "rock";
    } else if (moveNumber === 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }
    return computerChoice;
}
function declareWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case ("rock"):
            console.log(computerSelection);
            if (computerSelection === "rock") {
                return "Tie!";
            } else if (computerSelection === "scissors") {
                return "Winner!";
            } else {
                return "Lose!";
            }
        case ("scissors"):
            console.log(computerSelection);
            if (computerSelection === "scissors") {
                return "Tie!";
            } else if (computerSelection === "paper") {
                return "Winner!";
            } else {
                return "Lose!";
            }
        case ("paper"):
            console.log(computerSelection);
            if (computerSelection === "paper") {
                return "Tie!";
            } else if (computerSelection === "rock") {
                return "Winner!";
            } else {
                return "Lose!";
            }
    }
}

console.log(declareWinner("roCk", computerPlay()));

