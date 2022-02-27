function computerPlay(){
    let moveNumber = Math.floor(Math.random()*3)+1;
    let computerChoice;
    if(moveNumber===1){
        computerChoice = "rock";
    }else if(moveNumber===2){
        computerChoice = "scissors";
    }else{
        computerChoice = "paper";
    }
    return computerChoice;
}
console.log(computerPlay());