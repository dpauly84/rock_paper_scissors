const options = ["rock", "paper", "scissors"];
const roundResults = document.querySelector("#round-results");
const gameResults = document.querySelector("#game-results");
const runningScore = document.querySelector("#running-score");
let computerSelection = "";
let playerSelection = "";
let playerWins = 0;
let computerWins = 0;
let ties = 0;

function playRound(choice) {
  playerSelection = choice.toLowerCase();
  computerSelection = getComputerChoice();
  let winner = determineWinner();
  updateResult(winner);
  displayRoundResult(winner);
}

function displayRoundResult(winner) {
  runningScore.innerText = `Player: ${playerWins} Computer: ${computerWins} Ties: ${ties}`;
  if (winner === "tie") {
    roundResults.innerText = `Tie! try again`;
  } else roundResults.innerText = `${winner} wins the round!`;
  if (playerWins + computerWins === 5) {
    roundResults.innerText = `${winner} has won the game!`;
  }
}

function updateResult(winner) {
  const roundsPlayed = playerWins + computerWins;
  if (roundsPlayed === 5) {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
  }
  if (winner === "player") {
    playerWins++;
  }
  if (winner === "computer") {
    computerWins++;
  }
  if (winner === "tie") {
    ties++;
  }
}

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function determineWinner() {
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) return "tie";
  if (playerSelection === "paper" && computerSelection === "rock")
    return "player";
  if (playerSelection === "rock" && computerSelection === "scissors")
    return "player";
  if (playerSelection === "scissors" && computerSelection === "paper")
    return "player";
  return "computer";
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

// DOM manipulation
const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener("click", (e) => {
  playRound(e.target.innerText);
});
