let btn = document.querySelector('#btn');
let gameText = document.querySelector('#game');
btn.addEventListener("click", game);
let radioButtons = document.querySelectorAll('input[name="choice"]');
let computerChoice = '';
let playerChoice = '';
let computerChoiceConverted = '';
let playerChoiceConverted = '';
let gameCount = 0;
let playerScore = 0;
let computerScore = 0;

//the score result html creation
let score = document.createElement('div');
document.body.appendChild(score);
score.setAttribute('id', 'score');
let playerScoreText= document.createElement('p');
playerScoreText.setAttribute('id', 'playerScore')
document.getElementById('score').appendChild(playerScoreText);
let computerScoreText = document.createElement('p');
playerScoreText.setAttribute('id', 'computerScore');
document.getElementById('score').appendChild(computerScoreText);


// old one
// let playerScoreText = document.querySelector('p#playerScore');
// let computerScoreText = document.querySelector('p#computerScore');

let win = '<p style="background: green">';
let lose = '<p style="background: red">';
let draw = '<p style="background: yellow">';

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) {
        return computerChoiceConverted = 'Rock'
    }
    else if (computerChoice == 2) {
        return computerChoiceConverted = 'Paper'
    }
    else if (computerChoice == 3) {
        return computerChoiceConverted = 'Scissors'
    }
}

function getPlayerChoice() {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            playerChoice = radioButton.value;
            break;
        }
    }
    if (playerChoice == 1) {
        return playerChoiceConverted = 'Rock'
    }
    else if (playerChoice == 2) {
        return playerChoiceConverted = 'Paper'
    }
    else if (playerChoice == 3) {
        return playerChoiceConverted = 'Scissors'
    }
}

function playRound() {
    getComputerChoice()
    console.log(`The robot randomly chose ${computerChoiceConverted}`)
    
    getPlayerChoice()
    console.log(`You selected ${playerChoiceConverted}`)

    if (playerChoice == computerChoice) {
        gameText.innerHTML += draw + 'Drawn! +1 point for each one ';
        computerScore++
        playerScore++
    }
    else if (playerChoice == 1) {
        if (computerChoice == 2) {
            gameText.innerHTML += lose + `You lose! ${computerChoiceConverted} beats ${playerChoiceConverted}! <br>`
            computerScore++
        }
        else {
            gameText.innerHTML += win + `You win! ${playerChoiceConverted} beats ${computerChoiceConverted}! <br>` 
        playerScore++
        }
    }
    else if (playerChoice == 2) {
        if (computerChoice == 1) {
            gameText.innerHTML += win + `You win! ${playerChoiceConverted} beats ${computerChoiceConverted}! <br>`
            playerScore++
        }
        else {
            gameText.innerHTML += lose + `You lose! ${computerChoiceConverted} beats ${playerChoiceConverted}! <br>`
        computerScore++ 
        }
    }
    else if (playerChoice == 3) {
        if (computerChoice == 1) {
            gameText.innerHTML += lose + `You lose! ${computerChoiceConverted} beats ${playerChoiceConverted}! <br>`
            computerScore++
        }
        else {
            gameText.innerHTML += win + `You win! ${playerChoiceConverted} beats ${computerChoiceConverted}! <br>`
        playerScore++ 
        }
    }
}

function game() {
    if (gameCount < 4) {
    ++gameCount;
    playRound();
    console.log(gameCount);
    console.log(playerScore);
    console.log(computerScore);
    playerScoreText.innerHTML = `${playerScore}`;
    computerScoreText.innerHTML = `${computerScore}`;
    
    }
    else if (gameCount == 4) {
    btn.innerHTML = `New match!`;
    ++gameCount;
    playRound();
    console.log(gameCount);
    console.log(playerScore);
    console.log(computerScore);
        if (playerScore>computerScore) {
            score.innerHTML = 'YOU WIN! Flawless Victory';
        }
        else if (computerScore>playerScore) {
            score.innerHTML = 'YOU LOSE! Try again...';
        }
        else {
            score.innerHTML = 'DRAW!'
        }
        }
    else {
    btn.innerHTML = `Play!`;
    gameCount = 0;
    playerScore = 0;
    computerScore = 0;
    gameText.innerHTML = ''
    score.innerHTML = ''
    playerScoreText= document.createElement('p');
    playerScoreText.setAttribute('id', 'playerScore')
    document.getElementById('score').appendChild(playerScoreText);
    computerScoreText = document.createElement('p');
    playerScoreText.setAttribute('id', 'computerScore');
    document.getElementById('score').appendChild(computerScoreText);
    playerScoreText.innerHTML = `${playerScore}`;
    computerScoreText.innerHTML = `${computerScore}`;
    }
}