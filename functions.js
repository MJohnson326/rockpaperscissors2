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
console.log (computerSelection)