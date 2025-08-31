console.log("hello from script.js file");

let playerChoice = "";
let computerChoice = "";
let computerScore = 0;
let playerScore = 0;

function rock() {
  playerChoice = document.getElementById("Rock").value;
  document.getElementById("result_div").innerText = playerChoice;
  console.log(playerChoice);
}

function paper() {
  playerChoice = document.getElementById("Paper").value;
  console.log(playerChoice);
}

function scissor() {
  playerChoice = document.getElementById("Scissor").value;
  console.log(playerChoice);
}
