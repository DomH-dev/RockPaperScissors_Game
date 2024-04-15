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
 * @param {string} playerSelection this is set by which button you press
 */
function playRound(playerSelection) {
    computerChoice = getComputerChoice();
    switch (true) {
        case playerSelection === computerChoice:
            result = "draw";
            roundComment.textContent = `It's a draw!`;
            break;
        case playerSelection === "Rock" && computerChoice === "Scissors":
        case playerSelection === "Paper" && computerChoice === "Rock":
        case playerSelection === "Scissors" && computerChoice === "Paper":
            result = "win";
            playerWins++;
            scoreBoard.textContent = `${playerWins} - ${computerWins}`;
            roundComment.textContent = `Congratulations! you've won this round, only ${
                5 - playerWins
            } more wins to go!`;
            break;
        default:
            result = "lose";
            computerWins++;
            scoreBoard.textContent = `${playerWins} - ${computerWins}`;
            roundComment.textContent = `You lose, maybe you'll do better next round!`;
            break;
    }

    if (checkWinCondition(result)) {
        popUpBox.style.display = "flex";
    }
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    popUpBox.style.display = "none";
    scoreBoard.textContent = `${playerWins} - ${computerWins}`;
    roundComment.textContent = `Make your choice!`;
}

function checkWinCondition() {
    if (playerWins === 5) {
        popupEndText.textContent =
            "Congratulations on your win! Press the button below to restart";
        return true;
    } else if (computerWins === 5) {
        popupEndText.textContent =
            "You've lost this game! Press the button below to restart";
        return true;
    }
    return false;
}

let computerChoice = "";
let playerChoice = "";
let result = "";
let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");
const resetButton = document.querySelector("#resetButton");
const popUpBox = document.querySelector(".popup");
const popupEndText = document.querySelector(".popupEndText");
const scoreBoard = document.querySelector(".score_board");
const roundComment = document.querySelector(".round_comment");

rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorButton.addEventListener("click", () => playRound("Scissors"));
resetButton.addEventListener("click", () => resetGame());
