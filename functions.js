//computer selection
function getComputerChoice(){
    let getComputerChoice = Math.floor(Math.random() * 3)
    switch (getComputerChoice){
        case 0 :
        return 'rock'
        case 1 : 
        return 'paper'
        case 2 : 
        return 'scissors'
    }

}
const computerSelection = getComputerChoice()
console.log (`Computer selects ${computerSelection}`)//prints computer selection

//player selection

function getPlayerSelection(){
    let input = prompt('Choose your weapon')//gives a prompt to player
    let getPlayerSelection =  input.toLowerCase()
    switch(getPlayerSelection){
        case 'rock':
            return 'rock'
        case 'paper':
            return 'paper'
        case 'scissors':
            return 'scissors'
        case '':
            return 'null'
    }

}
const playerSelection= getPlayerSelection()
console.log(`Player selects ${playerSelection}.`)//prints player selection



//declare game result

let declareWin = `${playerSelection} beats ${computerSelection}. You win!`
//declares playerSelection is winner

   let declareLose = `${computerSelection} beats ${playerSelection}. You lose!`

//declares player loss

   let declareTie = `${playerSelection} versus ${computerSelection}.  It's a tie!`

//declares tie



//round functions
function playRound(playerSelection,computerSelection){
    while (playerSelection === 'rock'){
        if (computerSelection ==='rock'){
            return declareTie
        } else if (computerSelection ==='paper'){
            return declareLose
        } else if(computerSelection ==='scissors'){
            return declareWin
        }
    }
    while (playerSelection === 'paper'){
        if(computerSelection ==='rock'){
            return declareWin
        } else if (computerSelection ==='paper'){
            return declareTie
        } else if (computerSelection === 'scissors'){
            return declareLose
        }
    }''
    while (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            return declareLose
        } else if (computerSelection === 'paper'){
            return declareWin
        } else if (computerSelction === 'scissors'){
            return declareTie
        }
    } 
}
console.log(playRound(playerSelection,computerSelection))


 