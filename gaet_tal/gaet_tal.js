// Øvelse lavet i undervisningen //

"use strict";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

const computerNum = Math.floor(Math.random() * 100) + 1; // Man kunne også skrive 101 istedet for, at bruge det sidste + 1, da 100 kun er til 99, derfor man har brug for det sidste + 1, for at tillade gæt helt op til 100
// let brugerGuess;

btn.addEventListener("click", klik_btn);
function klik_btn() {
  const brugerGuess = input.value;

  //   console.log("computerNum", computerNum);
  //   console.log("brugerGuess", brugerGuess);
  let feedbackText;
  if (brugerGuess < computerNum) {
    feedbackText = "Det er for lavt, prøv igen";
  } else if (brugerGuess > computerNum) {
    feedbackText = "Det er for højt, prøv";
  } else {
    feedbackText = "Du har gættet rigtigt! 🎉";
  }
  h2.textContent = feedbackText;
  console.log(feedbackText);
}

// Øvelse lavet af mig selv //

// console.log("Tilfældigt tal " + Math.floor(Math.random() * 100));

// const num = (secretNumber = Math.floor(Math.random() * 100));

// document.getElementById("guess-button").addEventListener("click", function () {
//   const guess = parseInt(document.getElementById("guess-input").value);

//   const messageEl = document.getElementById("message");

//   if (guess === secretNumber) {
//     messageEl.innerHTML = "Du gættede korrekt! 🎉 Tallet var " + secretNumber;
//     messageEl.classList.add("correct");
//   } else if (guess > secretNumber) {
//     messageEl.innerHTML = "Dit gæt er for højt!";
//   } else {
//     messageEl.innerHTML = "Dit gæt er for lavt!";
//   }
// });

// Lille øvelse fra 1. video nedenfor //
// const bool = true;
// const num = 41;
// const str = "Peter";
// const obj = {
//   cats: 2,
//   cars: 1,
// };
// const nothing = null;
// let undf;
// const sym = Symbol("symbol");

// console.log("typeof num:", typeof num);

// "use strict";
// num = 17;

// Lille øvelse fra 2. video nedenfor //
// let myString = "45";
// console.log("typof 1", typeof myString);
// myString = Number(myString);
// console.log("typof 2", typeof myString);

// let myString = "45";
// console.log("typof 1", typeof myString);
// myString = parseInt(myString);
// console.log("typof 2", typeof myString);

// console.log("Test af plus"); //
// const n1 = 1;
// const n2 = 2;

// const s1 = "1";
// const s2 = "2";
// console.log(s1 + n2);

// n1 + n2;
// s1 + s2;

// n1 + s2;
// s1 + n2;

// console.log(undefined + 1);

// const value = true;

// if (" ") {
//   console.log("Value is truthy");
// } else {
//   console.log("Value is falsy");
// }

// console.log("0" == []);
