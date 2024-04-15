/**
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
 * This function is used to play a single round of Rock Paper Scissors.
 * @param {string} playerSelection this should call the function that prompts the user for an input
 * @param {string} computerSelection this should call the function to generate a random choice for the computer
 * @returns
 */
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            console.log("It's a draw!");
            result = "draw";
            break;
        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Paper" && computerSelection === "Rock":
        case playerSelection === "Scissors" && computerSelection === "Paper":
            console.log(
                `You win! ${playerSelection} beats ${computerSelection}.`
            );
            result = "win";
            break;
        default:
            console.log(
                `You lose this round! ${computerSelection} beats ${playerSelection}.`
            );
            result = "lose";
            break;
    }
    return result;
}

function checkWinCondition(playerWins, computerWins) {
    if (playerWins === 5) {
        console.log(`You have won the game! Congratulations!`);
        return true;
    } else if (computerWins === 5) {
        console.log(`You have lost the game! Sorry to hear that!`);
        return true;
    }
    return false;
}

/**
 * This function can be called to play a first to 5 wins game of rock paper scissors.
 */
function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    let roundCounter = 1;

    const resultsTextBox = document.querySelector(".container_results");
    let result = playRound(getPlayerChoice(), getComputerChoice());
    if (result === "lose") {
        computerWins++;
    } else if (result === "win") {
        playerWins++;
    }
    roundCounter++;
    checkWinCondition(playerWins, computerWins);
}

let computerChoice = "";
let playerChoice = "";
let result = "";

playGame();
