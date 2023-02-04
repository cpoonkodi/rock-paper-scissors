let options = ["rock","paper","scissors"];

//Function to Select any one option by Computer
computerPlay = () => {
  return options[Math.floor(Math.random()*options.length)];
}

// Function to Select any one option by Player
playerPlay = () => {
  let playerInput;
  do {
    playerInput = prompt("Please enter any one of these - Rock, Paper, Scissors");
  }while ((playerInput.toLowerCase() != "rock") && (playerInput.toLowerCase() != "paper") && (playerInput.toLowerCase() != "scissors"));
  return playerInput;
}

// Function to Decide the Winner between Player and Computer
playRound = (playerSelection,computerSelection) => {
  if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
      (playerSelection === 'scissors' && computerSelection === 'paper') || 
      (playerSelection === 'rock' && computerSelection === 'paper')) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    return true;
  } else if ((computerSelection == 'rock' && playerSelection == 'paper') || 
             (computerSelection == 'scissors' && playerSelection == 'paper') || 
             (computerSelection == 'rock' && playerSelection == 'scissors')) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    return false
  } else if(playerSelection === computerSelection) {
      console.log(`Draw! You both chose ${playerSelection}!`);
      return;
    }
  }

winnerReport = (playerWins, computerWins) => {
  console.log("Player Wins : "+playerWins);
  console.log("Computer Wins : "+computerWins);
  if (playerWins > computerWins) {
    console.log( "\nCongrats! You have beaten the computer!");
  }else if (computerWins > playerWins) {
    console.log( "\nBetter luck next time! Computer have beaten you!");
  }else {
    console.log("\nThe computer and you have drawn!")
  }
}

// Funtion to Player's Five round scores and reports
function game() {
  let playerWins = 0;
  let computerWins = 0;
  
  for (round = 1; round <= 5; round++) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    console.log("Round : "+round);
    roundResult = playRound(playerSelection,computerSelection) 
    if (roundResult === true) {
      playerWins++;
    }else if (roundResult === false) {
      computerWins++;
    }  
  }
  winnerReport(playerWins, computerWins);
}

game();
    
