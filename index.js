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
  }
  while ((playerInput.toLowerCase() != "rock") && (playerInput.toLowerCase() != "paper") && (playerInput.toLowerCase() != "scissors"));
  return playerInput;
}

// Function to Decide the Winner between Player and Computer
playRound = (playerSelection,computerSelection) => {
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == "rock") {
      console.log(`Draw! You both chose "Rock"!`);
      return;
    }
    else if (computerSelection == "paper") {
      console.log(`You lose! "Paper" beats "Rock"!`);
      return false;
    }
    else if (computerSelection == "scissors") {
      console.log(`You win! "Scissors" beats "Rock"!`);
      return true;
    }
  }
  if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == "paper") {
      console.log(`Draw! You both chose "Paper"!`);
      return;
    }
    else if (computerSelection == "rock") {
      console.log(`You win! "Paper" beats "Rock"!`);
      return true;
    }
    else if (computerSelection == "scissors") {
      console.log(`You lose! "Scissors" beats "Paper"!`);
      return false;
    }
  }
  if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection == "scissors") {
      console.log(`Draw! You both chose "Scissors"!`);
      return;
    }
    else if (computerSelection == "rock") {
      console.log(`You lose! "Rock" beats "Scissors"!`);
      return false;
    }
    else if (computerSelection == "paper") {
      console.log(`You win! "Scissors" beats "Paper"!`);
      return true;
    }
  }
}

// Funtion to Player's Five round scores and reports
function game() {
  let playerWins = 0;
  let computerWins = 0;
  let roundResult = false;

  for (round = 1; round <= 5; round++) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    console.log("Round : "+round)
    roundResult = playRound(playerSelection,computerSelection) 
    if (roundResult === true) {
      playerWins = playerWins + 1;
    }
    else if (roundResult === false) {
      computerWins = computerWins +1;
    }  
  }
  console.log("\n*****")
  console.log("SCORE");
  console.log("*****");
  console.log("Player Wins : "+playerWins);
  console.log("Computer Wins : "+computerWins);
  if (playerWins > computerWins) {
    console.log( "\nCongrats! You have beaten the computer!");
  }
  else if (computerWins > playerWins) {
    console.log( "\nBetter luck next time! Computer have beaten you!");
  }
  else {
    console.log("\nThe computer and you have drawn!")
  }
}

game();









    