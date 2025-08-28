"use strict";

console.log("Hello");

const startGame = document.querySelector("#start-button");
const guessLow = document.querySelector("#guess-low");
const guessHigh = document.querySelector("#guess-high");
const guessCorrect = document.querySelector("#guess-correct");

let computerChoice;
const title = document.querySelector("h2");

addEventListenersToButtons();
function addEventListenersToButtons() {
  startGame.addEventListener("click", pressStart);
}

function hideButtons() {
  startGame.classList.remove("noclick");
  guessLow.classList.add("noclick");
  guessHigh.classList.add("noclick");
  guessCorrect.classList.add("noclick");
}

function pressStart() {
  startGame.classList.add("noclick");
  guessLow.classList.remove("noclick");
  guessHigh.classList.remove("noclick");
  guessCorrect.classList.remove("noclick");
  console.log("Spil startet");
  computerNumber();
}

hideButtons();

function computerNumber() {
  computerChoice = Math.floor(Math.random() * 100) + 1;
  title.textContent = `Computerens gæt er: ${computerChoice}`;
  console.log("Computerens gæt er", computerChoice);
  clickWrong();
  clickCorrect();
}

function clickWrong() {
  guessLow.addEventListener("click", computerNumber);
  guessHigh.addEventListener("click", computerNumber);
}

function clickCorrect() {
  guessCorrect.addEventListener("click", hideButtons);
}
