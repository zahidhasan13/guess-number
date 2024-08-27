"use strict";

const playBtn = document.querySelector(".play-btn");
const playGame = document.querySelector(".play-game");
const modals = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Functions to display modal and overlay
const displayModal = () => {
  modals.style.opacity = 1;
  modals.style.visibility = "visible";
};
const displayOverlay = () => {
  overlay.style.opacity = 1;
  overlay.style.visibility = "visible";
};

// Start Game
playGame.addEventListener("click", () => {
  displayModal();
  displayOverlay();
  playBtn.style.display = "none";
});

// Guessing Game
const secretNumber = document.querySelector(".secret-number");
const input = document.querySelector(".input");
const check = document.querySelector(".check");
const gameStatus = document.querySelector(".game-status");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");

// Special Variables
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;
score.textContent = SCORE;
highScore.textContent = HIGH_SCORE;

// Function to update game status
const gameState = (text) => {
  gameStatus.textContent = text;
};

check.addEventListener("click", () => {
  const guess = Number(input.value);

  if (!guess) {
    gameState("No number entered!");
  } else if (guess === SECRET_NUMBER) {
    secretNumber.textContent = SECRET_NUMBER;
    gameState("Correct Answer!");
    modals.style.backgroundColor = "teal";
    secretNumber.style.backgroundColor = "chartreuse";

    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  } else if (guess !== SECRET_NUMBER) {
    if (SCORE > 1) {
      gameState(guess > SECRET_NUMBER ? "Too High!" : "Too Low!");
      SCORE--;
      score.textContent = SCORE;
    } else {
      gameState("Game Over");
      SCORE = 0;
      score.textContent = SCORE;
    }
  }
});

// Play Again
playAgain.addEventListener("click", () => {
  SCORE = 20;
  SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
  secretNumber.textContent = "?";
  input.value = "";
  score.textContent = SCORE;
  gameStatus.textContent = "Start Guessing...";
  modals.style.backgroundColor = "chartreuse";
  secretNumber.style.backgroundColor = "teal";
});
