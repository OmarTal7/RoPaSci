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

