//Gets the computer's choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            return ("rock");
        } else if (randomNumber === 1) {
            return ("paper");
        } else {
            return ("scissors");
        }
}

function getHumanChoice() {
    const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
            });
        });
}

const container = document.querySelector('.scoreboard');
    const scoreBoard = document.createElement('div');
        scoreBoard.textContent = 'Scoreboard:';
        container.appendChild(scoreBoard);
    const playerScore = document.createElement('div');
        playerScore.textContent = "Player:";
        scoreBoard.appendChild(playerScore);
    const computScore = document.createElement('div');
        computScore.textContent = "Computer:";
        scoreBoard.appendChild(computScore);
    const para = document.querySelector('.roundWinner');
    const roundWinner = document.createElement('p');
        para.appendChild(roundWinner);
    const declare = document.querySelector('.choices');
    const compChoiceMade = document.createElement('p');
    const humanChoiceMade = document.createElement('p');
        declare.appendChild(compChoiceMade);
        declare.appendChild(humanChoiceMade);
    const winner = document.querySelector('.winner');
    const nameWinner = document.createElement('div');
        winner.appendChild(nameWinner);

   
//Function to play a game of 5 rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    //Rules
//    alert ("Welcome to a game of rock, paper, scissors!");
//    alert ("You have 5 rounds to beat the computer!\n\n* rock beats scissors\n* scissors beat paper\n* and paper beats rock\n\nGood Luck!")

    //Function to play one round
    function playRound(humanChoice,computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors" 
            || humanChoice === "scissors" && computerChoice === "paper" 
            || humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            compChoiceMade.textContent = `Computer chose: ${computerChoice}`;
            humanChoiceMade.textContent = `You chose: ${humanChoice}`;
            roundWinner.textContent = `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}! Your point!`;
            playerScore.textContent = `Player: ${humanScore}`;
            computScore.textContent = `Computer: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "rock" 
            || humanChoice === "paper" && computerChoice === "scissors" 
            || humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            compChoiceMade.textContent = `Computer chose: ${computerChoice}`;
            humanChoiceMade.textContent = `You chose: ${humanChoice}`;
            roundWinner.textContent = `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}! Computer\'s point!`;
            playerScore.textContent = `Player: ${humanScore}`;
            computScore.textContent = `Computer: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "scissors" 
            || humanChoice === "paper" && computerChoice === "paper" 
            || humanChoice === "rock" && computerChoice === "rock") {
            compChoiceMade.textContent = `Computer chose: ${computerChoice}`;
            humanChoiceMade.textContent = `You chose: ${humanChoice}`;
            roundWinner.textContent = `Tie! You both chose ${humanChoice}! No points rewarded.`;
            playerScore.textContent = `Player: ${humanScore}`;
            computScore.textContent = `Computer: ${computerScore}`;
        }
    

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                nameWinner.textContent = `The winner is ... YOU!! Congratulations!\n\nYour Score = ${humanScore} \nComputer Score = ${computerScore}`;
            } else if (humanScore < computerScore) {
                nameWinner.textContent =`The winner is ... The Computer!\n\nYour Score = ${humanScore} \nComputer Score = ${computerScore}`;
            } else {
                nameWinner.textContent = `No winner ... Its a tie!\n\nYour Score = ${humanScore} \nComputer Score = ${computerScore}`;
            }
        }
    }

    function getInput() {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    getInput();


    const rock = document.getElementById("rock");
    rock.addEventListener('click', () => {
        playRound('rock' , getComputerChoice());
    });

    const paper = document.getElementById("paper");
    paper.addEventListener('click', () => {
        playRound('paper' , getComputerChoice());
    });

    const scissors = document.getElementById("scissors");
    scissors.addEventListener('click', () => {
        playRound('scissors' , getComputerChoice());
    });
}

playGame();