const result = document.querySelector("#result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const wins = document.querySelector("#wins");
const losses = document.querySelector("#losses");
const ties = document.querySelector("#ties");

const choices = ["Rock", "Paper", "Scissors"];

rock.addEventListener("click", function() {
  playGame("Rock");
});

paper.addEventListener("click", function() {
  playGame("Paper");
});

scissors.addEventListener("click", function() {
  playGame("Scissors");
});


function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  result.innerHTML = `Your choice: ${userChoice}<br>Computer's choice: ${computerChoice}<br>`;
  
  if (userChoice === computerChoice) {
    const tieSound = new Audio("audio/draw.mp3");
    tieSound.play();
    result.innerHTML += "It's a tie!";
    ties.innerHTML = parseInt(ties.innerHTML) + 1;
  } 
  else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    const winSound = new Audio("audio/win.mp3");
    winSound.play();
    result.innerHTML += "You win!";
    wins.innerHTML = parseInt(wins.innerHTML) + 1;
  } 
else {
    const loseSound = new Audio("audio/lose.mp3");
    loseSound.play();
    result.innerHTML += "You lose!";
    losses.innerHTML = parseInt(losses.innerHTML) + 1;
  }
}
