"use strict";
let userChoice;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

addEventListenersToButtons();
function addEventListenersToButtons() {
  rockBtn.addEventListener("click", rockClick);
  paperBtn.addEventListener("click", paperClick);
  scissorsBtn.addEventListener("click", scissorsClick);
}

function rockClick() {
  //   console.log("ROCK");
  userChoice = "rock";
  computerGuess();
}

function paperClick() {
  //   console.log("PAPER");
  userChoice = "paper";
  computerGuess();
}

function scissorsClick() {
  //   console.log("SCISSORS");
  userChoice = "scissors";
  computerGuess();
}

function computerGuess() {
  const choice_arr = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choice_arr[randomNum];
  console.log("randomNum", randomNum);
  console.log(userChoice);
  //   computerChoice = "paper";
  animationStart();
  //   animationEnd();
}

function animationStart() {
  player1.classList.add("shake"); // Tilføjer classen "shake" til begge spillere
  player2.classList.add("shake");

  // Lytter hvornår animationen er slut for hver spiller, når den er færdig kaldes funktionen animationEnd
  player1.addEventListener("animationend", animationEnd);
  player2.addEventListener("animationend", animationEnd);
}

function animationEnd() {
  player1.classList.remove("shake"); // Fjerner "shake" fra begge spillere
  player2.classList.remove("shake");

  // Fjerner tidligere valg fra begge spillere
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  // Tilføjer spillerens og computerens valg med userChoice og computerChoice
  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);

  // Undersøger hvem der vandt med getResult
  const result = getResult(userChoice, computerChoice);

  showResultScreen(result); // Viser resultatet på skærmen
}

// Funktionen nedenfor afgør hvilken slutskærm der skal vises
function getResult() {
  if (userChoice === computerChoice) {
    return "draw"; // Hvis spiller og computer vælger det samme = uafgjort
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    return "win"; // Hvis spilleren vinder
  }
  return "lose"; // Hvis spilleren taber
}

// Funktionen som sørger for at vise det rigtige resultat på skærmen
function showResultScreen(result) {
  document.querySelector("#win").classList.add("hidden"); // Skjuler alle skærme fra start
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  // Nedenfor sørger for kun det resultat der matcher #win eller #draw vises
  document.querySelector(`#${result}`).classList.remove("hidden");
}

// function removeResultScreen() {
//   console.log("Fjern skærme");
//   document.querySelector("#win").classList.add("hidden");
//   document.querySelector("#lose").classList.add("hidden");
//   document.querySelector("#draw").classList.add("hidden");
// }
