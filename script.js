console.log("Starting Roshambo!")

function titleCase(str) {
    str = str.toLowerCase()
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str
}

function getComputerChoice() {
    let x = Math.random()
    x = Math.round(x * 10)
    if (x <= 3) {
        return "rock";
    } else if (x > 3 && x <= 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What do you want to play? (Rock/Paper/Scissors)")
    choice = choice.toLowerCase()
    return choice
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    console.log(`You played ${titleCase(humanChoice)}`)
    console.log(`Computer played ${titleCase(computerChoice)}`)
    if (humanChoice == computerChoice){
        console.log(`You tied! ${titleCase(humanChoice)} ties ${titleCase(computerChoice)}`)
    }
}

const computerChoice = getComputerChoice()
console.log(computerChoice)
const humanChoice = getHumanChoice()
playRound(humanChoice, computerChoice)