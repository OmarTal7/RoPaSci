// Check game counter <5 -- if not, GAME OVER 
// set up list of options: rock, paper, or scissors
// let comp pick one
// prompt user to pick on
// check user input:
//      if it doesn't match any of the 3 options, return error
//      if it matches, go on to game logic
//          if choices match, its a draw.
//          if rock/paper: user wins, +1 counter
//          if paper/rock: comp wins, +1 counter
//          if scissor/paper: comp wins, +1 counter
//          if paper/scissor: user wins, +1 counter
//          if rock/scissor: comp wins, +1 counter
//          if scissor/rock: user wins, +1 counter

let gameCounter = 0;
const gameChoices = ["Rock", "Paper", "Scissors"];

// Gets random choice from gameChoices array
function getComputerChoice(){
    return (gameChoices[Math.floor(Math.random() * 4)])
}

function singleRound (computerSelection, playerSelection){
    //One round
    //Don't forget to increment counter
}



if (gameCounter > 5){
    console.log("GAME OVER");
}

else{
    //Game logic-function goes here
}