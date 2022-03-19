
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

    
    playerSelection=playerSelection.toUpperCase();
    computerSelection=computerPlay();

    let result = "";

    if (playerScore==5 || computerScore==5) {
    
        const divContainer =document.querySelector(".content");
        let gameOver= document.createElement("p");
        gameOver.classList.add('gameOver');
        gameOver.textContent = `Game over!. Your final score is ${playerScore}. The computer score is ${computerScore}. Play Again?`;
        content.appendChild(gameOver);
        playerScore=0;
        computerScore=0;
    }


    if (playerSelection==computerSelection) {
        const divContainer =document.querySelector(".content");
        let result = document.createElement("p");
        result.classList.add('result');
        result.textContent = `Draw! Your current score is ${playerScore}. The computer score is ${computerScore}`;
        content.appendChild(result);
        return;
        
    }

    if (playerSelection=="ROCK" && computerSelection=="SCISSORS") {

        playerScore=playerScore+1;
        const divContainer =document.querySelector(".content");
        let result = document.createElement("p");
        result.classList.add('result');
        result.textContent = `You win! Rock beats scissors.Your current score is ${playerScore}. The computer score is ${computerScore}`;
        content.appendChild(result);
        return;

    }

    if (playerSelection=="PAPER" && computerSelection=="ROCK") {

        playerScore=playerScore+1;
        const divContainer =document.querySelector(".content");
        let result = document.createElement("p");
        result.classList.add('result');
        result.textContent = `You win! Paper beats rock.Your current score is ${playerScore}. The computer score is ${computerScore}`;
        content.appendChild(result);
        return;
    }

    if (playerSelection=="SCISSORS" && computerSelection=="PAPER") {

        playerScore=playerScore+1;
        const divContainer =document.querySelector(".content");
        let result = document.createElement("p");
        result.classList.add('result');
        result.textContent = `You win! Scissors beats paper.Your current score is ${playerScore}. The computer score is ${computerScore}`;
        content.appendChild(result);
        return;
    }

    if (playerSelection=="ROCK" && computerSelection=="PAPER") {

        computerScore=computerScore+1;
        const divContainer =document.querySelector(".content");
        let result = document.createElement("p");
        result.classList.add('result');
        result.textContent = `You Lose! Paper beats rock.Your current score is ${playerScore}. The computer score is ${computerScore}`;
        content.appendChild(result);
        return;
    }

    if (playerSelection=="PAPER" && computerSelection=="SCISSORS") {

        
        computerScore=computerScore+1;
        const divContainer =document.querySelector(".content");
        let result = document.createElement("p");
        result.classList.add('result');
        result.textContent = `You Lose! Scissors beats paper.Your current score is ${playerScore}. The computer score is ${computerScore}`;
        content.appendChild(result);
        return;
    }

    if (playerSelection=="SCISSORS" && computerSelection=="ROCK") {

        computerScore=computerScore+1;
        const divContainer =document.querySelector(".content");
        let result = document.createElement("p");
        result.classList.add('result');
        result.textContent = `You Lose! Rock beats scissors. Your current score is ${playerScore}. The computer score is ${computerScore}`;
        content.appendChild(result);
        return;
    }


}


/*function game() {

    for(let i=0; i<5; i++) {
    console.log(playOneRound(playerSelection, computerSelection));

    }
 
} */
const rockBtn =document.querySelector('#rockBtn');


rockBtn.addEventListener('click', function (e) {
    playOneRound("ROCK", computerSelection);
  });


const paperBtn = document.querySelector("#paperBtn");

paperBtn.addEventListener('click', function (e) {
    playOneRound("PAPER", computerSelection);
});

const scissorsBtn = document.querySelector("#scissorsBtn");

scissorsBtn.addEventListener('click', function (e) {
    playOneRound("SCISSORS", computerSelection);
});





const container = document.querySelector('#container');

let content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Start a new game by selecting rock, paper, or scissors!';

container.appendChild(content);
