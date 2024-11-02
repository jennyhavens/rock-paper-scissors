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
    const boardName = document.createElement('p');
        boardName.textContent = "Scoreboard";
        boardName.style.textDecoration = "underline";
        boardName.style.fontSize = "35px";
        container.appendChild(scoreBoard);
        scoreBoard.appendChild(boardName);
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
const humanChoiceMade = document.createElement('p');
    humanChoiceMade.style.color = "rgb(238, 15, 130)";
const compChoiceMade = document.createElement('p');
    compChoiceMade.style.color = "rgb(246, 140, 41)";
    declare.appendChild(humanChoiceMade);
    declare.appendChild(compChoiceMade);
//const winner = document.querySelector('.winner');
//const nameWinner = document.createElement('div');
    //winner.appendChild(nameWinner);
const intro = document.querySelector('.intro');


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors" 
            || humanChoice === "scissors" && computerChoice === "paper" 
            || humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            humanChoiceMade.textContent = `You chose: ${humanChoice}`;
            compChoiceMade.textContent = `Computer chose: ${computerChoice}`;
            roundWinner.textContent = `${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}! Your point!`;
            roundWinner.style.color = "rgb(238, 15, 130)";
            playerScore.textContent = `Player: ${humanScore}`;
            computScore.textContent = `Computer: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "rock" 
            || humanChoice === "paper" && computerChoice === "scissors" 
            || humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            humanChoiceMade.textContent = `You chose: ${humanChoice}`;
            compChoiceMade.textContent = `Computer chose: ${computerChoice}`;
            roundWinner.textContent = `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}! Computer\'s point!`;
            roundWinner.style.color = "rgb(246, 140, 41)";
            playerScore.textContent = `Player: ${humanScore}`;
            computScore.textContent = `Computer: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "scissors" 
            || humanChoice === "paper" && computerChoice === "paper" 
            || humanChoice === "rock" && computerChoice === "rock") {
            humanChoiceMade.textContent = `You chose: ${humanChoice}`;
            compChoiceMade.textContent = `Computer chose: ${computerChoice}`;
            roundWinner.textContent = `Tie! You both chose ${humanChoice}! No points rewarded.`;
            roundWinner.style.color = "white";
            playerScore.textContent = `Player: ${humanScore}`;
            computScore.textContent = `Computer: ${computerScore}`;
        }
    

        if (humanScore === 5 || computerScore === 5) {
            document.body.innerHTML = '';
            
            const winnerBox = document.createElement('div');
                if (humanScore > computerScore) {
                    winnerBox.textContent = "The winner is ... YOU!! Congratulations!";
                    winnerBox.style.color = "rgb(238, 15, 130)";
                    winnerBox.style.textShadow = "3px 3px 5px black";
                    winnerBox.style.fontFamily = "PT Sans";
                    winnerBox.style.fontSize = "60px";
                    winnerBox.style.display = "flex";
                    winnerBox.style.flexWrap = "wrap";
                    winnerBox.style.justifyContent = "center";
                    winnerBox.style.alignItems = "center";
                    winnerBox.style.textAlign = "center";
                } else if (humanScore < computerScore) {
                    winnerBox.textContent ="The winner is ... The Computer!";
                    winnerBox.style.color = "rgb(246, 140, 41)";
                    winnerBox.style.textShadow = "3px 3px 5px black";
                    winnerBox.style.fontFamily = "PT Sans";
                    winnerBox.style.fontSize = "60px";
                    winnerBox.style.display = "flex";
                    winnerBox.style.flexWrap = "wrap";
                    winnerBox.style.justifyContent = "center";
                    winnerBox.style.alignItems = "center";
                    winnerBox.style.textAlign = "center";
                }
            document.body.appendChild(winnerBox);
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