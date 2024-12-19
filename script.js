// Function to simulate random choice by computer
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*2)
    if (computerChoice == 0) {
        return "rock"
    }
    else if (computerChoice == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}