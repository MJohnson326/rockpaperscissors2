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
let input = prompt('Choose your weapon')//gives a prompt to player
let playerSelection =  input.toLowerCase()
console.log(`Player selects ${playerSelection}.`)//prints player selection


//round functions
function playRound(playerSelection,computerSelection){
    
}
