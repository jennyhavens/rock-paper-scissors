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
    let response = prompt("Rock, paper or scissors?");
        if (response === null) {
            return("Bye!");
        } else if (response === "") {
            return ("No response, refresh the page and try again!");
        } else {
            return(response.toLowerCase());
        }
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

//function playRound(humanChoice,computerChoice) {
  //  if (humanChoice === "rock" && computerChoice === "scissors") {
    //}
//}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

