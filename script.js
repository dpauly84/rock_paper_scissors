const options = ["rock", "paper", "scissors"];
let computerSelection = "";
let playerSelection = "paper";
// let playerSelection = prompt(`Choose 'rock' 'paper' or 'scissors'`, "rock");
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection = "paper", computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) return "tie";
  if (playerSelection === "paper" && computerSelection === "rock") return "win";
  if (playerSelection === "rock" && computerSelection === "scissors")
    return "win";
  if (playerSelection === "scissors" && computerSelection === "paper")
    return "win";
  return "lose";
}

function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    determineResult(result);
  }
  console.log(
    `Final Result: player won: ${playerWins}, computer won ${computerWins}`
  );
}

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function determineResult(result) {
  let display = `You ${result}!`;
  let message = "";
  if (result === "tie") {
    message = `${display} You both chose ${playerSelection}`;
  } else if (result === "win") {
    playerWins++;
    message = `${display} ${playerSelection} beats ${computerSelection}`;
  } else {
    // "lose"
    computerWins++;
    message = `${display} ${computerSelection} beats ${playerSelection}`;
  }
  console.log(message);
}

game();
