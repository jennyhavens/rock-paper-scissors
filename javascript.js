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
            alert ("Bye! Close the window or click okay to continue the game.");
        } else if (response.toLowerCase() === "rock") {
            return ("rock");
        } else if (response.toLowerCase() === "paper") {
            return ("paper");
        } else if (response.toLowerCase() === "scissors") {
            return ("scissors");
        } else {
            alert ("Incorrect response, try again in the next round!");
        }
}
   
//Function to play a game of 5 rounds
function playGame() {

     //Variables to keep the score
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    //Rules
    alert ("Welcome to a game of rock, paper, scissors!");
    alert ("You have 5 rounds to beat the computer!\n\n* rock beats scissors\n* scissors beat paper\n* and paper beats rock\n\nGood Luck!")

    //Function to a play one round
    function playRound(humanChoice,computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors" 
            || humanChoice === "scissors" && computerChoice === "paper" 
            || humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            alert (`${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}! Your point!\n\nYour Score = ${humanScore} \nComputer Score = ${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "rock" 
            || humanChoice === "paper" && computerChoice === "scissors" 
            || humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            alert (`${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}! Computer\'s point!\n\nYour Score = ${humanScore} \nComputer Score = ${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "scissors" 
            || humanChoice === "paper" && computerChoice === "paper" 
            || humanChoice === "rock" && computerChoice === "rock") {
            alert (`Tie! You both chose ${humanChoice}! No points rewarded.\n\nYour Score = ${humanScore} \nComputer Score = ${computerScore}`);
        } else {
            alert (`Your Score = ${humanScore} \n Computer Score = ${computerScore}`);
        }

        console.log(computerChoice);
        console.log(humanChoice);
    
        //5 rounds
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

    //Function to declare winner
    function declareWinner() {
        if (humanScore > computerScore) {
            alert (`The winner is ... YOU!! Congratulations!\n\nYour Score = ${humanScore} \nComputer Score = ${computerScore}`);
        } else if (humanScore < computerScore) {
            alert (`The winner is ... The Computer!\n\nYour Score = ${humanScore} \nComputer Score = ${computerScore}`);
        } else {
            alert (`No winner ... Its a tie!\n\nYour Score = ${humanScore} \nComputer Score = ${computerScore}`);
        }
    }
}

playGame();