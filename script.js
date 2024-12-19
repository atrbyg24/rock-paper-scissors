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


let humanScore;
let computerScore;

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a draw. Please choose again.");
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        return playRound(humanChoice,computerChoice);
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore+=1;
        return "You lose! Paper beats rock.";
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore+=1;
        return "You lose! Scissors beats paper.";
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore+=1;
        return "You lose! Rock beats scissors.";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore+=1;
        return "You win! Rock beats scissors.";
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore+=1;
        return "You win! Paper beats rock.";
    }
    else {
        humanScore+=1;
        return "You win! Scissors beats paper.";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);