//Gets the computer's choice
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

//Gets the player's choice
function getHumanChoice() {
    let response = prompt("Rock, paper or scissors?");
        if (response === null) {
            alert ("Bye!");
        } else if (response.toLowerCase() === "rock") {
            return ("rock");
        } else if (response.toLowerCase() === "paper") {
            return ("paper");
        } else if (response.toLowerCase() === "scissors") {
            return ("scissors");
        } else {
            alert ("Incorrect response, try again!");
        }
}
   
//Function to play a game of 5 rounds
function playGame() {
     //Variables to keep the score
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    //Function to a play one round
    function playRound(humanChoice,computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors" 
            || humanChoice === "scissors" && computerChoice === "paper" 
            || humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            alert (`${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}! Your point!\n Your Score = ${humanScore} \n Computer Score = ${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "rock" 
            || humanChoice === "paper" && computerChoice === "scissors" 
            || humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            alert (`${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}! Computer\'s point!\n Your Score = ${humanScore} \n Computer Score = ${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "scissors" 
            || humanChoice === "paper" && computerChoice === "paper" 
            || humanChoice === "rock" && computerChoice === "rock") {
            alert (`Tie! You both chose ${humanChoice}! No points rewarded.\n Your Score = ${humanScore} \n Computer Score = ${computerScore}`);
        } else {
            alert (`Your Score = ${humanScore} \n Computer Score = ${computerScore}`);
        }

        console.log(computerChoice);
        console.log(humanChoice);
    

        //If valid choice??
        round++;

        if (round<5) { 
            getInput();
        } else {
            //End Game
            declareWinner();
        }
    }

    function getInput() {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    getInput();

    function declareWinner() {
        if (humanScore > computerScore) {
            alert (`The winner is ... YOU!! Congragulations!\n Your Score = ${humanScore} \n Computer Score = ${computerScore}`);
        } else if (humanScore < computerScore) {
            alert (`The winner is ... The Computer!\n Your Score = ${humanScore} \n Computer Score = ${computerScore}`);
        } else {
            alert (`No winner ... Its a tie!\n Your Score = ${humanScore} \n Computer Score = ${computerScore}`);
        }
    }
    //for (let i = 0; i < 5; i++) {
    //}
}

playGame();