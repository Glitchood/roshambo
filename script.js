function tC(str) {
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

function beats(humanChoice, computerChoice) {
    const beatList = [["Paper", "Rock"], ["Rock", "Scissors"], ["Scissors", "Paper"]];
    for (let element of beatList) {
        if (element[0] === humanChoice && element[1] === computerChoice) {
          return ["You win!", tC(humanChoice), tC(computerChoice)];
        }
      }
      return ["The Computer wins!", tC(computerChoice), tC(humanChoice)];
    }

function playRound(humanChoice, computerChoice) {
    const viable_list = ['rock', 'paper', 'scissors']
    if (viable_list.indexOf(humanChoice) < 0) {
        console.log(`${humanChoice} isn't Rock, Paper, or Scissors- Try again`)
        return
    }
    console.log(`You played ${tC(humanChoice)}`)
    console.log(`Computer played ${tC(computerChoice)}`)
    if (humanChoice == computerChoice){
        console.log(`You tied! ${tC(humanChoice)} ties ${tC(computerChoice)}`)
    }
    else {
        const result = beats(humanChoice, computerChoice);
        console.log(`${result[0]} ${result[1]} beats ${result[2]}`)
    }
}

const computerChoice = getComputerChoice()
const humanChoice = getHumanChoice()
playRound(humanChoice, computerChoice)