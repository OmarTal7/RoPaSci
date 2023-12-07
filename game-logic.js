const buttons = document.querySelector('.user-Choice-Buttons');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;

buttons.addEventListener('click', (e) => {
        
    let target = e.target;

    switch(target.value){
        case 'rock':
            console.log('rock was clicked');
            playerChoice = "rock";
            game();
            updateScores()
            checkGameEnd();
            break;
        
        case 'paper':
            console.log('paper was clicked');
            playerChoice = "paper";
            game();
            updateScores()
            checkGameEnd();
            break;
        
        case 'scissors':
            console.log('scissors was clicked');
            playerChoice = "scissors";
            game();
            updateScores()
            checkGameEnd();
            break;
    }

});


//Functions below

function updateScores(){
    score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
};


function checkGameEnd(){
    if ((playerScore == 5) || (computerScore == 5)){
        const allButtons = document.querySelectorAll('button');
        allButtons.forEach((button) => {button.disabled = true;}); 
        alert("GAME OVER");
    }
};

function getComputerChoice(){
    const gameChoices = ["rock", "paper", "scissors"];
    let computerChoice = gameChoices[Math.floor(Math.random() * 3)]
    return computerChoice;
};



function addRoundResult(result){
    const roundItem = document.createElement('li');
    roundItem.textContent = result;
    results.appendChild(roundItem);
}

// Run a full game of RPC
function game(){
    
    let resultMessage = "";
    let result = singleRound(getComputerChoice(), playerChoice);

    //Checks the result to determine who won and how to increment the counter
    if (result == 'win'){
        resultMessage = "Great life choices! You win!";
        playerScore += 1;
        addRoundResult(resultMessage);
   
    } else if (result == 'lose'){
        resultMessage = "Terrible life choices... You lose!";
        computerScore += 1;
        addRoundResult(resultMessage);

    } else {
        resultMessage = "Your life choices got you nowhere new";
        addRoundResult(resultMessage);
    }

    
}



// Given two selections, function determines winner of a RPC round
function singleRound(computerSelection, playerSelection){

    if (computerSelection == playerSelection){
            return 'tie';
    } 
    else if ((computerSelection == "rock" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "scissors") ||
            (computerSelection == "scissors" && playerSelection == "rock")){
                
                return 'win';

            }
    
    else if ((playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")){
        
                return `lose`;

    }
}


