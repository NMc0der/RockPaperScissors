// let rock = 'ROCK';
// let paper = 'PAPER';
// let scissors = 'SCISSORS';

// let choices2 = [rock, paper, scissors];

let choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    random = Math.floor(Math.random() * choices.length);
    return choices[random].toUpperCase()
}

function playRound(playerSelection, computerSelection) {
    selection = playerSelection.toUpperCase();
    computerSelection = getComputerChoice();
    console.log(selection, computerSelection)
    if (selection == computerSelection) {
        return "TIE";
    }
    else if (selection == 'SCISSORS' && computerSelection == "PAPER" || selection == 'ROCK' && computerSelection == "SCISSORS" || selection == 'PAPER' && computerSelection == "ROCK") {
        return `You Win ${selection} beats ${computerSelection}!`;
    }
    else {
        return `You Lose ${computerSelection} beats ${selection}!`;
    }
}


function game() {
    let you = 0;
    let com = 0;
    let round = 0;
    for (let i = 0; i < 3; i++) {
        let selection = prompt("Enter Selection").toUpperCase()
        while (selection != "ROCK" && selection != "PAPER" && selection != "SCISSORS") {
            selection = prompt("Please Enter Valid Selection (Rock, Paper or Scissors").toUpperCase()
        }
        // console.log()
        let result = playRound(selection);
        if (result[4] == 'W') {
            you += 1;
            round += 1;
            console.log(result)
            console.log(`Round: ${round}`)
        }
        else if (result[4] == 'L') {
            com += 1;
            round += 1;
            console.log(result)
            console.log(`Round: ${round}`)
        }
        else {
            round += 1;
            console.log(result)
            console.log(`Round: ${round}`)
        }
    }
    if (you > com) {
        return `You are the Winner of the game! ${you} vs ${com}`
    }
    else if (com > you) {
        return `You lose! ${you} vs ${com}`
    }
    else {
        return `Tie game! ${you} vs ${com}`
    }



}

