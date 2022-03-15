
const RPS = ["ROCK", "PAPER", "SCISSORS"];
const NUMBEROFOPTIONS=3;

let playerSelection;
let computerSelection;
let playerScore =0;
let computerScore =0;


function computerPlay() {

    let randomValue=Math.floor(Math.random()* NUMBEROFOPTIONS)
    return RPS[randomValue];

}

function playOneRound(playerSelection, computerSelection) {

    playerSelection = prompt("Rock, Paper, Scissors?");
    playerSelection=playerSelection.toUpperCase();
    computerSelection=computerPlay();

    let result = "";



    if (playerSelection==computerSelection) {
        return result = "Draw!";
    }

    if (playerSelection=="ROCK" && computerSelection=="SCISSORS") {

        playerScore=playerScore+1;
        return result = "You win! Rock beats scissors.";
    }

    if (playerSelection=="PAPER" && computerSelection=="ROCK") {

        playerScore=playerScore+1;
        return result = "You win! Paper beats rock"
    }

    if (playerSelection=="SCISSORS" && computerSelection=="PAPER") {

        playerScore=playerScore+1;
        return result = "You win! Scissors beats paper."
    }

    if (playerSelection=="ROCK" && computerSelection=="PAPER") {

        computerScore=computerScore+1;
        return result = "You Lose! Paper beats rock"
    }

    if (playerSelection=="PAPER" && computerSelection=="SCISSORS") {

        computerScore=computerScore+1;
        return result = "You Lose! Scissors beats paper."
    }

    if (playerSelection=="SCISSORS" && computerSelection=="ROCK") {

        computerScore=computerScore+1;
        return result = "You Lose! Rock beats scissors."
    }


}


function game() {

    for(let i=0; i<5; i++) {
    console.log(playOneRound(playerSelection, computerSelection));

    }

}


game();

if (playerScore>computerScore) {

    const scores = `Final scores: Your Score is ${playerScore} and the computer score is ${computerScore}. You win!`;

    console.log(scores);

}

else if (playerScore<computerScore) {

    const scores = `Final scores: Your Score is ${playerScore} and the computer score is ${computerScore}. You lose.`;

    console.log(scores);

}

