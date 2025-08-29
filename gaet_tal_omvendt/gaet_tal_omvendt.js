"use strict";

console.log("Hello");

const startGame = document.querySelector("#start-button");
const guessLow = document.querySelector("#guess-low");
const guessHigh = document.querySelector("#guess-high");
const guessCorrect = document.querySelector("#guess-correct");

let computerChoice;
let min = 0;
let max = 100;

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

  // nulstil intervallet
  min = 0;
  max = 100;

  computerNumber();
}

hideButtons();

function computerNumber() {
  // i stedet for tilfældigt tal → gæt midten af intervallet
  computerChoice = Math.floor((min + max) / 2);
  title.textContent = `Computerens gæt er: ${computerChoice}`;
  console.log("Computerens gæt er", computerChoice);
}

function clickWrong() {
  guessLow.addEventListener("click", () => {
    min = computerChoice + 1; // tallet er højere
    computerNumber();
  });

  guessHigh.addEventListener("click", () => {
    max = computerChoice - 1; // tallet er lavere
    computerNumber();
  });
}

function clickCorrect() {
  guessCorrect.addEventListener("click", () => {
    title.textContent = `Yes! Computeren gættede rigtigt: ${computerChoice}`;
    hideButtons();
  });
}

clickWrong();
clickCorrect();
