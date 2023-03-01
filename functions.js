

// //set scores to begin at 9
// let playerScore = 0;
// let computerScore = 0;

// //establish rules/function of rounds
// function playRound(playerSelection,computerSelection) {
//     if (playerSelection === computerSelection){
//         return `It\s a draw! Try again! Score: Player ${playerScore} to computer ${computerScore}`
//     } else if ((playerSelection ==='rock' && computerSelection==='scissors')||
//     (playerSelection ==='paper' && computerSelection ==='rock')||
//     (playerSelection ==='scissors' && computerSelection === 'paper')){
//         playerScore++
//         return `${playerSelection} beats ${computerSelection}. Score: Player ${playerScore} to computer ${computerScore}.`
//     } else if((playerSelection ==='rock' && computerSelection === 'paper')||
//     (playerSelection==='paper' && computerSelection ==='scissors')||
//     (playerSelection === 'scissors' && computerSelection === 'rock')){
//         computerScore++ 
//         return `${computerSelection} beats ${playerSelection}. Score: Player ${playerScore} to computer ${computerScore}.`

//     }
// }

// //game play -5 rounds and declares winner
// function game(){
//     // for( let i = 0; i < 5; i++)
//     {
//        // let input =prompt('Rock, Paper, or Scissors').toLowerCase()
//        let button = document.querySelectorAll(button)


//        let playerSelection = button // player selection needs to equal button push



//         //console.log(`Player chooses ${playerSelection}`)
//         let computerSelection = getComputerSelection()
//         //console.log(`Computer chooses ${computerSelection}`)
//         //console.log(playRound(playerSelection,computerSelection))
//     } 
//     if (playerScore > computerScore) {
//        // console.log(`You're the winner! Final Score:Player ${playerScore} to computer ${computerScore}`);
//     } else if (computerScore > playerScore) {
//         //console.log(`You're the loser. Final Score: Player ${playerScore} to computer ${computerScore}`);
//     } else
//         //console.log(`You tied. Final Score: Player ${playerScore} to computer ${computerScore}`);
// }




// game()
// const btn= document.querySelectorAll(".btn")


// function getPlayerSelection(){
//     btn.forEach(addEventListener('click',(e)=>{
//         btnPressed= e.target.classList[1];
//         console.log(btnPressed)
//         let playerSelection = btnPressed.substr(btnPressed.indexOf('-') + 1, btnPressed.length);
//         console.log(playerSelection);
//     }))
// }
//clickable images for player choice

function replacingImagePlayerRock() {
    document.getElementById("playerChoice").src = "images/playerrock.png"
    playerChoice.style.visibility = 'visible';

}

function replacingImagePlayerPaper() {
    document.getElementById("playerChoice").src = "images/playerpaper.png"
    playerChoice.style.visibility = 'visible';
}
function replacingImagePlayerScissors() {
    document.getElementById("playerChoice").src = "images/playerscissors.png"
    playerChoice.style.visibility = 'visible';
}

//randomize computer selection between rock, paper, or scissons
function getComputerSelection() {
    let getComputerSelection = (Math.floor(Math.random() * 3))
        if(getComputerSelection === 0){
            document.getElementById("cpuChoice").src = "images/playerrock.png"
            cpuChoice.style.visibility = "visible"
        }else if (getComputerSelection === 1 ){
            document.getElementById("cpuChoice").src = "images/playerpaper.png"
            cpuChoice.style.visibility = "visible"
        }else if (getComputerSelection === 2){
            document.getElementById("cpuChoice").src = "images/playerscissors.png"
            cpuChoice.style.visibility = "visible"}

    }

    getComputerSelection()


