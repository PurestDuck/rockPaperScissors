const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', ()=>{
    console.log(declareWinner("rock",computerPlay()));
});
paperBtn.addEventListener('click', ()=>{
    console.log(declareWinner("paper",computerPlay()));
});
scissorsBtn.addEventListener('click', ()=>{
    console.log(declareWinner("scissors",computerPlay()));
});

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
            if (computerSelection === "rock") {
                return "Tie! Enemy chose rock";
            } else if (computerSelection === "scissors") {
                return "Winner! Enemy chose scissors";
            } else {
                return "Lose! Enemy chose paper";
            }
        case ("scissors"):
            if (computerSelection === "scissors") {
                return "Tie! Enemy chose scissors";
            } else if (computerSelection === "paper") {
                return "Winner! Enemy chose paper";
            } else {
                return "Lose! Enemy chose rock";
            }
        case ("paper"):
            if (computerSelection === "paper") {
                return "Tie! Enemy chose paper";
            } else if (computerSelection === "rock") {
                return "Winner! Enemy chose rock";
            } else {
                return "Lose! Enemy chose scissors";
            }
        default:
            console.log("Invalid input!");
            break;
    }
}

// function submitRock(){
//     console.log("rock");
// }
// function submitPaper(){
//     console.log("paper");
// }
// function submitScissors(){
//     console.log("scissors");
// }
// function startGame(){
//     let playerAnswer;
//     for(i=0;i<5;i++){
//         playerAnswer= prompt("Choose: Rock, Paper, or Scissors:");
//         console.log(declareWinner(playerAnswer, computerPlay()));
//     }
// }


