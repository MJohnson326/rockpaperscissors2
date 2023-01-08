/* 

//computer selection
function getComputerSelection() {
    let getComputerSelection= Math.floor(Math.random() * 3)
    switch (getComputerSelection) {
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
*/

function getComputerSelection() {
    let getComputerSelection= Math.floor(Math.random()*3)
    switch (getComputerSelection) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
}
}


let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection){
        return `It\s a draw! Try again! Score: Player ${playerScore} to computer ${computerScore}`
    } else if ((playerSelection ==='rock' && computerSelection==='scissors')||
    (playerSelection ==='paper' && computerSelection ==='rock')||
    (playerSelection ==='scissors' && computerSelection === 'paper')){
        playerScore++
        return `${playerSelection} beats ${computerSelection}. Score: Player ${playerScore} to computer ${computerScore}.`
    } else if((playerSelection ==='rock' && computerSelection === 'paper')||
    (playerSelection==='paper' && computerSelection ==='scissors')||
    (playerSelection === 'scissors' && computerSelection === 'rock')){
        computerScore++ 
        return `${computerSelection} beats ${playerSelection}. Score: Player ${playerScore} to computer ${computerScore}.`

    }
}
    
function game(){
    for( let i = 0; i < 5; i++){
        let input =prompt('Rock, Paper, or Scissors')
        let playerSelection = input.toLowerCase()
        console.log(`Player chooses ${playerSelection}`)
        let computerSelection = getComputerSelection()
        console.log(`Computer chooses ${computerSelection}`)
        console.log(playRound(playerSelection,computerSelection))
    } 
    if (playerScore > computerScore) {
        console.log(`You're the winner! Final Score:Player ${playerScore} to computer ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You're the loser. Final Score: Player ${playerScore} to computer ${computerScore}`);
    } else
        console.log(`You tied. Final Score: Player ${playerScore} to computer ${computerScore}`);
}
game()