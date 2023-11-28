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

function singleRound(computerSelection, playerSelection){

    if (computerSelection == playerSelection){
            return `It's a draw! You both picked ${computerSelection}!`;
    } 
    else if ((computerSelection == "rock" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "scissor") ||
            (computerSelection == "scissor" && playerSelection == "rock")){
                
                // ++gameCounter;
                return `You win! comp: ${computerSelection}, player: ${playerSelection}`;

            }
    
    else if ((playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "rock")){
        
        // ++gameCounter;
        return `You lose! comp: ${computerSelection}, player: ${playerSelection}`;


    }


}

       


function game(){
    let gameCounter = 0;
    const gameChoices = ["rock", "paper", "scissors"];

    // while(gameCounter < 5){
        let player = prompt("Rock, paper, scissors,...SHOOT!");
        
        // Player doesn't choose one of the options
        while(!gameChoices.includes(player.toLowerCase())){
            player = prompt("Please choose either Rock, Paper, or Scissors!");
            if (gameChoices.includes(player.toLowerCase())){break;}
        }

        return console.log(singleRound(gameChoices[Math.floor(Math.random() * 3)], player));
    // }
    
}

// singleRound();
game();

// (gameCounter > 5) ? console.log("GAME OVER") : singleRound()