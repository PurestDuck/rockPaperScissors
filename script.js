function computerPlay(){
    let moveNumber = Math.floor(Math.random()*3)+1;
    return moveNumber;
}
console.log(computerPlay());