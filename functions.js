let result = document.querySelector('.result')//div to put round result
let resulttext = document.querySelector('.resulttext')
let pscore = document.querySelector('.pscore') //player score div
let cpuscore = document.querySelector('.cpuscore') //computer score div

// //set scores to begin at 0
let playerScore = 0;
let computerScore = 0;

//randomize computer selection between rock, paper, or scissons
function getComputerSelection() {
    let getComputerSelection = (Math.floor(Math.random() * 3))  //randomize number 
    if (getComputerSelection === 0) { //assign random number to computer selection
        return 'rock'
    } else if (getComputerSelection === 1) {//assign random number to computer selection
        return 'paper'
    } else if (getComputerSelection === 2) {//assign random number to computer selection
        return 'scissors'
    }
}


//establish rules/function of rounds
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        pscore.innerHTML = `Your Score: ${playerScore}`
        cpuscore.innerHTML = `Opponent Score: ${computerScore}`
        resulttext.innerHTML = `${playerSelection} vs.${computerSelection} -it's a tie!`
        return
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++
        pscore.innerHTML = `Your score: ${playerScore}`
        cpuscore.innerHTML = `Opponent score: ${computerScore}`
        resulttext.innerHTML = `${playerSelection} beats ${computerSelection}`
        return
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++
        pscore.innerHTML = `Your score: ${playerScore}`
        cpuscore.innerHTML = `Opponent score: ${computerScore}`
        resulttext.innerHTML = `${playerSelection} loses to ${computerSelection}`
        return
    }

}

function endGame() {
    if (playerScore < 10 && computerScore < 10) {
        console.log('nothing')
    } else {
        if ((playerScore === 10 || computerScore === 10) && (playerScore > computerScore)) {
            alert('You win! Hit refresh to play again!')
        } else if ((playerScore === 10 || computerScore === 10) && (playerScore < computerScore)) {
            alert('You lose! Hit refresh to play again!')
        }
        pscore.innerHTML = 'Your score: '
        cpuscore.innerHTML = 'Opponent score: '
    }
}



function gamePlay() {
    let btns = document.querySelectorAll('.btn')
    btns.forEach(btn => btn.addEventListener('click', (e) => {
        btnPressed = e.target.id;
        let playerSelection = btnPressed
        document.getElementById("playerChoice").src = `images/${playerSelection}.png`
        playerChoice.style.visibility = 'visible';

        getComputerSelection()
        let computerSelection = getComputerSelection()
        document.getElementById('cpuChoice').src = `images/${computerSelection}.png`
        cpuChoice.style.visibility = 'visible'

        playRound(playerSelection, computerSelection)
        endGame()


    }))

}


gamePlay()
