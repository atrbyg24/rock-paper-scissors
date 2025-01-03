// Function to simulate random choice by computer
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3)
    if (computerChoice == 0) {
        return "rock";
    }
    else if (computerChoice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

/*
// Function which prompts user for choice. Continues to prompt until valid answer received
function getHumanChoice() {
    let humanChoice = prompt("Choose between 'rock','paper' or 'scissors'")
    humanChoice = humanChoice.toLowerCase();
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Invalid choice. Please choose 'rock', 'paper', or 'scissors'")
        humanChoice = humanChoice.toLowerCase();
    }
    return humanChoice;
}
*/

// Global variables to keep track of scores
let humanScore = 0;
let computerScore = 0;
let humanSelection = '';

window.onload = () => {
    document.querySelector("#humanScore").textContent = humanScore;
    document.querySelector("#computerScore").textContent = computerScore;
}

// Function to play one round of RPS
function playRound(humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        return "It's a draw. Please choose again.";
         //humanChoice = getHumanChoice();
        //computerChoice = getComputerChoice();
        //return playRound(humanChoice,computerChoice);
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore+=1;
        document.querySelector("#computerScore").textContent = computerScore;
        if (computerScore == 5) {
            alert("You lost the match! First to five wins.");
            humanScore = 0;
            computerScore = 0;
            document.querySelector("#humanScore").textContent = humanScore;
            document.querySelector("#computerScore").textContent = computerScore;
        }
        return "You lose! Paper beats rock.";
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore+=1;
        document.querySelector("#computerScore").textContent = computerScore;
        if (computerScore == 5) {
            alert("You lost the match! First to five wins.");
            humanScore = 0;
            computerScore = 0;
            document.querySelector("#humanScore").textContent = humanScore;
            document.querySelector("#computerScore").textContent = computerScore;
        }
        return "You lose! Scissors beats paper.";
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore+=1;
        document.querySelector("#computerScore").textContent = computerScore;
        if (computerScore == 5) {
            alert("You lost the match! First to five wins.");
            humanScore = 0;
            computerScore = 0;
            document.querySelector("#humanScore").textContent = humanScore;
            document.querySelector("#computerScore").textContent = computerScore;
        }
        return "You lose! Rock beats scissors.";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore+=1;
        document.querySelector("#humanScore").textContent = humanScore;
        if (humanScore == 5) {
            alert("You won the match! First to five wins.");
            humanScore = 0;
            computerScore = 0;
            document.querySelector("#humanScore").textContent = humanScore;
            document.querySelector("#computerScore").textContent = computerScore;
        }
        return "You win! Rock beats scissors.";
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore+=1;
        document.querySelector("#humanScore").textContent = humanScore;
        if (humanScore == 5) {
            alert("You won the match! First to five wins.");
            humanScore = 0;
            computerScore = 0;
            document.querySelector("#humanScore").textContent = humanScore;
            document.querySelector("#computerScore").textContent = computerScore;
        }
        return "You win! Paper beats rock.";
    }
    else {
        humanScore+=1;
        document.querySelector("#humanScore").textContent = humanScore;
        if (humanScore == 5) {
            alert("You won the match! First to five wins.");
            humanScore = 0;
            computerScore = 0;
            document.querySelector("#humanScore").textContent = humanScore;
            document.querySelector("#computerScore").textContent = computerScore;
        }
        return "You win! Scissors beats paper.";
    }
}

let btns = document.querySelector('body');

btns.addEventListener('click', (event) => {
    let target = event.target;
    if (target.id == 'rock') {
        humanSelection = 'rock';
        console.log('rock');
    }
    else if (target.id == 'paper') {
        humanSelection = 'paper'
        console.log('paper');
    }
    else if (target.id == 'scissors') {
        humanSelection = 'scissors';
        console.log('scissors');
    }
    else {
        if (humanSelection == '') {
            alert('Please choose either rock, paper or scissors before playing');
        }
        else {
            const computerSelection = getComputerChoice();
            let result = "";
            result = playRound(humanSelection,computerSelection);
            document.querySelector(".result").textContent = result;
        }
    }
});

/*
// Function to play a game of five rounds of RPS
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Score - Player: ${humanScore}, Computer: ${computerScore}`)

    if (humanScore > computerScore) {
        humanScore = 0
        computerScore = 0
        return "Congrats, you win!";
    }
    else {
        humanScore = 0
        computerScore = 0
        return "Sorry, you lose."
    }
}    
*/