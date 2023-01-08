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
