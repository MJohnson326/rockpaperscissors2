//computer selection
function getComputerSelection() {
    let getComputerChoice = Math.floor(Math.random() * 3)
    switch (getComputerChoice) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
return getComputerSelection()
}
const computerSelection = getComputerSelection()
console.log(`Computer selects ${computerSelection}`)//prints computer selection


//player selection
function getPlayerSelection() {
    let input = prompt('Choose your weapon')//gives a prompt to player
    let getPlayerSelection = input.toLowerCase()
    switch (getPlayerSelection) {
        case 'rock':
            return 'rock'
        case 'paper':
            return 'paper'
        case 'scissors':
            return 'scissors'
    }
   return getPlayerSelection() 
}
const playerSelection = getPlayerSelection()

console.log(`Player selects ${playerSelection}.`)//prints player selection



//declare game result
function declareWin(){
    playerScore++
    console.log(`${playerSelection} beats ${computerSelection}. You win!`)
}
function declareLose(){
    computerScore++
    console.log(`${computerSelection} beats ${playerSelection}. You lose!`)
}
function declareTie(){
    console.log(`${playerSelection} versus ${computerSelection}.  It's a tie!`)
}

//round functions

let playerScore = 0;
let computerScore = 0;

function gamePlay() {
    if (playerSelection === computerSelection){
        declareTie()
    } else if ((playerSelection ==='rock' && computerSelection==='scissors')||
    (playerSelection ==='paper' && computerSelection ==='rock')||
    (playerSelection ==='scissors' && computerSelection === 'paper')){
        playerScore++
        declareWin()
    } else if((playerSelection ==='rock' && computerSelection === 'paper')||
    (playerSelection==='paper' && computerSelection ==='scissors')||
    (playerSelection === 'scissors' && computerSelection === 'rock')){
        computerScore++ 
        declareLose()
    }
    return playerScore,computerScore
}
console.log(`Player score: ${playerScore} Computer Score: ${computerScore}`)



function playRound() {
    getComputerSelection()
    getPlayerSelection()
    gamePlay()
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (playerScore > computerScore){
        console.log('you win!')
    }
    else if (computerScore> playerScore){
        console.log('you lose!')
    }
}
game()

