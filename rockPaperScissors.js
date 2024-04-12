/**
 * 
 * @param {string} string can be any string without special characters
 * @returns 
 */
function inputCapitalise(string) {
  string = string.toLowerCase();
  string = string.charAt(0).toUpperCase() + string.slice(1);
  return string;
}

/**
 * 
 * @returns a random choice of Rock, Paper or Scissors.
 */
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

/**
 * This function prompts the user for a choice out of Rock, Paper or Scissors and sanitises the result.
 * @returns the players choice for use in the Rock, Paper Scissors game.
 */
function getPlayerChoice() {
    let validAnswer = 0; //
    // loop below will keep prompting the user until the correct input is made.
    while (validAnswer === 0) {
        let playerInput = inputCapitalise(prompt("Please make a choice! Rock, Paper or Scissors?"));
        if (
            playerInput != "Rock" &&
            playerInput != "Paper" &&
            playerInput != "Scissors"
        ) {
            alert("Your input is invalid, please choose either Rock, Paper or Scissors.");
            validAnswer = 0;
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

/**
 * This function is used to play a single round of Rock Paper Scissors.
 * @param {string} playerSelection this should call the function that prompts the user for an input
 * @param {string} computerSelection this should call the function to generate a random choice for the computer
 * @returns 
 */
function playRound(playerSelection, computerSelection) {

  switch (true) {
    case (playerSelection === computerSelection):
      console.log("It's a draw!");
      result = "draw";
      break;
    case (playerSelection === "Rock" && computerSelection === "Scissors"):
    case (playerSelection === "Paper" && computerSelection === "Rock"):
    case (playerSelection === "Scissors" && computerSelection === "Paper"):
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
      result = "win";
      break;
    default:
      console.log(`You lose this round! ${computerSelection} beats ${playerSelection}.`);
      result = "lose";
      break;
  }
  return result;
}

function checkWinCondition(playerWins, computerWins) {
  if (playerWins > computerWins) {
    console.log(`You have won the game! Congratulations!`);
  } else if (computerWins > playerWins) {
    console.log(`You have lost the game! Sorry to hear that!`);
  } else {
    console.log(`It's a draw, please refresh the browser if you wish to try again.`)
  }
}


/**
 * This function can be called to play a 5 round game of rock paper scissors.
 */
function playGame() {

  let playerWins = 0;
  let computerWins = 0;
  let roundCounter = 1;

  while (roundCounter < 6) {

    console.log(`Round ${roundCounter}!`)
    let result = playRound(getPlayerChoice(), getComputerChoice());

    if (result === "lose") {
      computerWins++;
    } else if (result === "win") {
      playerWins++;
    }

    console.log(`You have won ${playerWins} rounds total. The computer has won ${computerWins} rounds total.`);
    roundCounter++;
  }

  checkWinCondition(playerWins, computerWins);
}

//initialise the variables for use wihin the functions.
let computerChoice = "";
let playerChoice = "";
let result = "";

playGame();