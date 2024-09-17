function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
        if (randomNumber === 0) {
            return("rock");
        } else if (randomNumber === 1) {
            return("paper");
        } else {
            return("scissors");
        }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let answer = prompt("Rock, paper or scissors?");
        if (answer) {
            return(answer);
        } else {
            return("Bye");
        }
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

console.log(computerScore);


