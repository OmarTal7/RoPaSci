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

// Gets random choice from gameChoices array
// function getComputerChoice(){
//     return (gameChoices[Math.floor(Math.random() * 3)])
// }

// Given two selections, function determines winner of a RPC round
function singleRound(computerSelection, playerSelection){

    if (computerSelection == playerSelection){
            return 't';
    } 
    else if ((computerSelection == "rock" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "rock")){
                
                return 'w';

            }
    
    else if ((playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")){
        
                return `l`;


    }


}

// Run a full game of RPC
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let gameCounter = 0;
    const gameChoices = ["rock", "paper", "scissors"];
    let resultMessage = "";

    while(playerScore < 5 && computerScore < 5){
        let player = prompt("Rock, paper, scissors,...SHOOT!");
        
        // Player doesn't choose one of the options
        while(!gameChoices.includes(player)){
            player = prompt("Please choose either Rock, Paper, or Scissors!");
            if (gameChoices.includes(player)){break;}
        }

        //Generates random computer choice
        computer = gameChoices[Math.floor(Math.random() * 3)]

        //Gets result of singleRound with given computer and player choices        
        let result = singleRound(computer, player);

        //Checks the result to determine who won and how to increment the counter
        if (result == 'w'){
            playerScore = playerScore + 1;
            gameCounter = gameCounter + 1;
            console.log(`player: ${player}, computer: ${computer}`)
   
        } else if (result == 'l'){
            computerScore = computerScore + 1;
            gameCounter = gameCounter + 1;
            console.log(`player: ${player}, computer: ${computer}`)

        } else {console.log('Its a tie!');}
    }

    //Output final scores
    return console.log(`player: ${playerScore}, computer: ${computerScore}, games player: ${gameCounter}`); 
}

game();

