const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const winnerText = document.querySelector('#announcement h1');
const playerScoreText = document.querySelector('#player .score');
const compScoreText = document.querySelector('#comp .score');
const playerImg = document.querySelector('#player img');
let playerScore = 0;
let compScore = 0;

rockBtn.addEventListener('click', ()=>{
    winnerText.innerText = declareRoundWinner("rock",computerPlay());
    setScore();
    declareMatchWinner();
});
paperBtn.addEventListener('click', ()=>{
    winnerText.innerText = declareRoundWinner("paper",computerPlay());
    setScore();
    declareMatchWinner();
});
scissorsBtn.addEventListener('click', ()=>{
    winnerText.innerText = declareRoundWinner("scissors",computerPlay());
    setScore();
    declareMatchWinner();
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
function declareRoundWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case ("rock"):
            changeHandPic("rock");
            if (computerSelection === "rock") {
                return "Tie! Enemy chose rock";
            } else if (computerSelection === "scissors") {
                playerScore++;
                return "Winner! Enemy chose scissors";
            } else {
                compScore++;
                return "Lose! Enemy chose paper";
            }
        case ("scissors"):
            changeHandPic("scissors");
            if (computerSelection === "scissors") {
                return "Tie! Enemy chose scissors";
            } else if (computerSelection === "paper") {
                playerScore++;
                return "Winner! Enemy chose paper";
            } else {
                compScore++;
                return "Lose! Enemy chose rock";
            }
        case ("paper"):
            changeHandPic("paper");
            if (computerSelection === "paper") {
                return "Tie! Enemy chose paper";
            } else if (computerSelection === "rock") {
                playerScore++;
                return "Winner! Enemy chose rock";
            } else {
                compScore++;
                return "Lose! Enemy chose scissors";
            }
        default:
            console.log("Invalid input!");
            break;
    }
}
function declareMatchWinner(){
    if(playerScore >= 5){
        winnerText.innerText = "Player Win";
    } else if(compScore >= 5){
        winnerText.innerText = "Computer Wins";
    }
}
function setScore(){
    playerScoreText.innerText = `Score: ${playerScore}`;
    compScoreText.innerText = `Score: ${compScore}`;
}
function changeHandPic(move){
    switch(move){
        case("rock"):
            playerImg.src="images/rock.png";
            break;
        case("paper"):
            playerImg.src="images/paper.png";
            break;
        case('scissors'):
            playerImg.src="images/scissors.png";
            break;
    }
}
