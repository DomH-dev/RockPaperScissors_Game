function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1) {
    return "Rock";
  } else if (randomNumber == 2) {
    return "Paper";
  } else if (randomNumber == 3) {
    return "Scissors";
  } 
};

function getPlayerChoice() {
  let playerInput = prompt("Please make a choice! Rock, Paper or Scissors?")
  // Statement below will sanitise the inputs
  playerInput = playerInput.toLowerCase();

  if (playerInput != "rock") || (playerInput != "paper") || (playerInput != "scissors")
}

