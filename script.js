function tC(str) {
    str = str.toLowerCase()
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str
}

function getComputerChoice() {
    let x = Math.random()
    x = Math.round(x * 10)
    if (x <= 1/3) {
        return "rock";
    } else if (x > 1/3 && x <= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What do you want to play? (Rock/Paper/Scissors)")
    const viable_list = ['rock', 'paper', 'scissors']
    choice = choice.toLowerCase()
    while (viable_list.indexOf(choice) < 0) {
        choice = prompt(`${choice} isn't Rock, Paper, or Scissors- Try again`)
    };
    return choice
}

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
    console.log(`You played ${tC(humanChoice)}`)
    console.log(`Computer played ${tC(computerChoice)}`)
    if (humanChoice == computerChoice){
        console.log(`You tied! ${tC(humanChoice)} ties ${tC(computerChoice)}`)
        return 0 // Tie case
    }
    else {
        const result = beats(humanChoice, computerChoice);
        console.log(`${result[0]} ${result[1]} beats ${result[2]}`)
        if (humanChoice == result[1]){
            return 1 // Human win case
        }
        else {
            return 2 // Computer win case
        }
    }
}


const computerChoice = getComputerChoice()
const humanChoice = getHumanChoice()
playRound(humanChoice, computerChoice)