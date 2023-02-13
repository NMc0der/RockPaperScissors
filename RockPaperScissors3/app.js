// let rock = 'ROCK';
// let paper = 'PAPER';
// let scissors = 'SCISSORS';

// let choices2 = [rock, paper, scissors];

const buttons = document.querySelectorAll('.button');
const rock = document.querySelector('.ROCK');
const paper = document.querySelector('.PAPER');
const scissors = document.querySelector('.SCISSORS');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const body = document.querySelector('.body');




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
        you.innerText = 'hi'
    }
    else {
        return `You Lose ${computerSelection} beats ${selection}!`;
    }
}


// function game() {
//     let you = 0;
//     let com = 0;
//     let round = 0;
//     for (let i = 0; i < 3; i++) {
//         let selection = prompt("Enter Selection").toUpperCase()
//         while (selection != "ROCK" && selection != "PAPER" && selection != "SCISSORS") {
//             selection = prompt("Please Enter Valid Selection (Rock, Paper or Scissors").toUpperCase()
//         }

//         let result = playRound(selection);
//         if (result[4] == 'W') {
//             you += 1;
//             round += 1;
//             console.log(result)
//             console.log(`Round: ${round}`)
//         }
//         else if (result[4] == 'L') {
//             com += 1;
//             round += 1;
//             console.log(result)
//             console.log(`Round: ${round}`)
//         }
//         else {
//             round += 1;
//             console.log(result)
//             console.log(`Round: ${round}`)
//         }
//     }
//     if (you > com) {
//         return `You are the Winner of the game! ${you} vs ${com}`
//     }
//     else if (com > you) {
//         return `You lose! ${you} vs ${com}`
//     }
//     else {
//         return `Tie game! ${you} vs ${com}`
//     }
// }

function game() {
    you.innerText = 0;
    let com = 0;
    let round = 0;
    for (let i = 0; i < 3; i++) {
        let selection = prompt("Enter Selection").toUpperCase()
        while (selection != "ROCK" && selection != "PAPER" && selection != "SCISSORS") {
            selection = prompt("Please Enter Valid Selection (Rock, Paper or Scissors").toUpperCase()
        }

        let result = playRound(selection);
        if (result[4] == 'W') {
            player.innerText += 1;
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
            console.log(result);
            console.log(`Round: ${round}`);
        }
    }
    if (you.innerText == 5 || com.innerText == 5) {
        if (you > com) {
            return `You are the Winner of the game! ${you} vs ${com}`;
        }
        else if (com > you) {
            return `You lose! ${you} vs ${com}`;
        }
        else {
            return `Tie game! ${you} vs ${com}`;
        }
    }


}
const winMessage = (winner) => {
    let text = document.createElement('p');
    text.classList.add('winMessage')
    text.append(winner)
    body.append(text)
}

let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => button.addEventListener('click', (e) => {



    let result = playRound(button.classList[0], getComputerChoice());
    if (result[4] == 'W') {
        playerScore += 1;
        player.innerText = `${playerScore}`;

        console.log(result)
        // console.log(`Round: ${round}`)
    }
    else if (result[4] == 'L') {
        computerScore += 1;
        computer.innerText = `${computerScore}`
        console.log(result)
        // console.log(`Round: ${round}`)
    }
    else {

        console.log(result)
        // console.log(`Round: `)
    }

    if (player.innerText == 5 || computer.innerText == 5) {
        if (player.innerText > computer.innerText) {
            // return `You are the Winner of the game! ${player.innerText} vs ${computer.innerText}`;
            winMessage('Congragulations You are the Winner!!!')
        }
        else if (computer.innerText > player.innerText) {
            // return `You lose! ${player.innerText} vs ${computer.innerText}`;
            winMessage('You Lose!!!')
        }
        rock.disabled = true;
        paper.disabled = true;
        return scissors.disabled = true;
    }

}))


reset.addEventListener('click', () => {
    rock.disabled = !true;
    paper.disabled = !true;
    scissors.disabled = !true;
    player.innerText = 0;
    computer.innerText = 0;
    playerScore = 0;
    computerScore = 0;
    if (body.lastElementChild.tagName == 'P') {
        body.lastElementChild.remove()
    }
})
