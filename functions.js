

// //set scores to begin at 0
let playerScore = 0;
let computerScore = 0;


// //game play -5 rounds and declares winner
// function game(){
//     // for( let i = 0; i < 5; i++)
//     {
//        // let input =prompt('Rock, Paper, or Scissors').toLowerCase()
//       


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

//clickable images for player choice

function replacingImagePlayerRock() {
    document.getElementById("playerChoice").src = "images/playerrock.png"
    playerChoice.style.visibility = 'visible';
    getComputerSelection()
    
}

function replacingImagePlayerPaper() {
    document.getElementById("playerChoice").src ="images/playerpaper.png"
    playerChoice.style.visibility = 'visible';
    getComputerSelection()
}
   
function replacingImagePlayerScissors() {
    document.getElementById("playerChoice").src = "images/playerscissors.png"
    playerChoice.style.visibility = 'visible';
    getComputerSelection()
   
}




//randomize computer selection between rock, paper, or scissons
function getComputerSelection(){
    let getComputerSelection = (Math.floor(Math.random() * 3))  //randomize number 
        if(getComputerSelection === 0){ //assign random number to computer selection
            document.getElementById("cpuChoice").src = "images/playerrock.png" //insert rock image 
            return 'rock'
        }else if (getComputerSelection === 1 ){//assign random number to computer selection
            document.getElementById("cpuChoice").src = "images/playerpaper.png"//insert paper image
            return 'paper'
        }else if (getComputerSelection === 2){//assign random number to computer selection
            document.getElementById("cpuChoice").src = "images/playerscissors.png"// insert rock image
            return 'scissors'

    }
}

    let computerSelection= getComputerSelection()

   
function playerClick(clicked){
    document.getElementById('cpuChoice') 
    cpuChoice.style.visibility = "visible" // computer selection visible on click
   if (clicked ==='rock'){ //run function to input player selection images
    replacingImagePlayerRock()
    return 'rock'
   }else if (clicked === 'paper'){
    replacingImagePlayerPaper()
    return 'paper'
    }else if (clicked === 'scissors'){
        replacingImagePlayerScissors()
        return 'scissors'
    } 
   }

//establish rules/function of rounds
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
