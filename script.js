function tC(str) {
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function getComputerChoice() {
    let x = Math.random();
    x = Math.round(x * 10);
    if (x <= 1 / 3) {
        return "rock";
    } else if (x > 1 / 3 && x <= 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What do you want to play? (Rock/Paper/Scissors)");
    const viable_list = ["rock", "paper", "scissors"];
    // Check if choice is null first
    while (choice == null || viable_list.indexOf(choice.toLowerCase()) < 0) {
        if (choice === "") {
            choice = prompt(
                "You need to enter either Rock, Paper, or Scissors"
            );
        } else if (choice == null) {
            return null;
        } else {
            choice = prompt(
                `${choice} isn't Rock, Paper, or Scissors- Try again`
            );
        }
    }
    return choice.toLowerCase();
}

function beats(humanChoice, computerChoice) {
    const beatList = [
        ["paper", "rock"],
        ["rock", "scissors"],
        ["scissors", "paper"],
    ];
    for (let element of beatList) {
        if (element[0] === humanChoice && element[1] === computerChoice) {
            console.log("You win");
            return ["YOU win!", tC(humanChoice), tC(computerChoice)];
        }
    }
    return ["The CPU wins!", tC(computerChoice), tC(humanChoice)];
}

function playRound(humanChoice, computerChoice) {
    console.log(`YOU played ${tC(humanChoice)}`);
    console.log(`CPU played ${tC(computerChoice)}`);
    if (humanChoice == computerChoice) {
        console.log(`You tied! ${tC(humanChoice)} ties ${tC(computerChoice)}`);
        return 0; // Tie case
    } else {
        let result = beats(humanChoice, computerChoice);
        console.log(`${result[0]} ${result[1]} beats ${result[2]}`);
        if (humanChoice == result[1]) {
            return 1; // Human win case
        } else {
            return 2; // Computer win case
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 1; i < 6; i++) {
        console.log(`===|ROUND ${i}|===`);
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log("==|GAME ENDED|==");
            console.log(
                `Final Score - YOU:${humanScore}, CPU:${computerScore}`
            );
            break;
        }
        let out = playRound(humanChoice, computerChoice);
        switch (out) {
            case 0:
                break;
            case 1:
                humanScore++;
                break;
            case 2:
                computerScore++;
                break;
        }
        if (i != 5) {
            answer = `Score for Round ${i} - HUMAN:${humanScore}, CPU:${computerScore}`;
        } else {
            answer = `Final Score - HUMAN:${humanScore}, CPU:${computerScore}`;
        }
        console.log(answer);
    }
    if (humanScore == computerScore) {
        console.log("YOU and the CPU tied!");
    } else if (humanScore > computerScore) {
        console.log("YOU beat the CPU!");
    } else {
        console.log("The CPU beat you!");
    }
}

playGame();
