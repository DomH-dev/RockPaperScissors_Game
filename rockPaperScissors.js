function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1); 
    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else if (randomNumber == 3) {
        return "Scissors";
    }
}

function getPlayerChoice() {
    let validAnswer = 0; //
    // loop below will keep prompting the user until the correct input is made.
    while (validAnswer === 0) {
        let playerInput = prompt("Please make a choice! Rock, Paper or Scissors?");
        playerInput = playerInput.toLowerCase();
        playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
        console.log(playerInput);
        if (
            playerInput != "Rock" &&
            playerInput != "Paper" &&
            playerInput != "Scissors"
        ) {
            alert("Your input is invalid, please choose either Rock, Paper or Scissors.");
            validAnswer = 0;
            break;
        } else if (playerInput === "Rock") {
            validAnswer = 1;
            playerChoice = playerInput;
        } else if (playerInput === "Paper") {
            validAnswer = 1;
            playerChoice = playerInput;
        } else if (playerInput === "Scissors") {
            validAnswer = 1;
            playerChoice = playerInput;
        }
    }
    return playerChoice;
}


  if (playerInput != "rock") || (playerInput != "paper") || (playerInput != "scissors")
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    console.log("It's a draw!");
    return result = "draw";
  }
  if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
    console.log("You win! Rock beats Scissors");
    result = "win"; 
  } else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
    console.log("You lose! Rock loses to Scissors");
    result = "lose";
  } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
    console.log("You win! Paper beats Rock");
    result = "win";
  } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
    console.log("You lose! Paper loses to Scissors");
    result = "lose"; 
  } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
    console.log("You win! Scissors beats Paper");
    result = "win";
  } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
    console.log("You lose! Scissors loses to Rock");
    result = "lose";
  } 
  return result;
}

