// Min løsning til opgaven
"use strict";

// const container = document.getElementById("container"); // Finder min div id "container"

// container.addEventListener("mousemove", function (event) {
//   // Lytter efter musens bevægelser
//   const x = event.clientX; // Sørger for at musens X-position bliver gemt i en variabel
//   const y = event.clientY; // Sørger for at musens Y-position bliver gemt i en variabel

//   const width = container.offsetWidth; // Finder bredden på containeren
//   const height = container.offsetHeight; // Finder højden på containeren

//   const hue = Math.floor((x / width) * 360); // Regner musens X-position om til en værdi mellem 0 og 360
//   const saturation = Math.floor((y / height) * 100); // Regner musens Y-position om til en værdi mellem 0 og 100
//   const lightness = 70; // Sætter lightness til 70%, bestemmer hvor lys farven skal være

//   const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`; // Laver en hsl farve ud fra de tre værdier

//   container.style.backgroundColor = color; // Ændrer baggrundsfarven på containeren til den nye farve
// });

// Klaus' løsning til opgaven

console.log("Hey");
const bgPointer = document.querySelector("body");
bgPointer.addEventListener("mousemove", mouseMove);

function mouseMove(event) {
  const procenter = ((event.clientX / window.innerWidth) * 100).toFixed(2);
  console.log("procenter", procenter);
  bgPointer.style.setProperty("--pointerX", procenter);
}
