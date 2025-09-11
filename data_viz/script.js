"use strict";
let data; // Variabler oprettes
let lastValue; // Variabler oprettes

fetchData(); // Henter data første gang med det samme

async function fetchData() {
  // Funktion der henter data
  const response = await fetch("https://kea-alt-del.dk/kata-distortion/"); // Henter data fra URL
  data = await response.json(); // Laver data om til JSON
  console.log(data); // Tjekker at dataene er hentet og vises i konsollen
  const output = document.getElementById("data-output"); // Finder min div id "data-output"
  output.textContent = `Du er i kø som nummer: ${data.inQueue}`; // Viser teksten i div'en med data fra JSON

  // Bar visualisering
  const queueBar = document.getElementById("queue-bar"); // Finder min div id "queue-bar"
  const maxQueue = 30; // Sætter max kølængde til 30
  const queueValue = Math.min(Number(data.inQueue), maxQueue); // Sikrer at værdien ikke overstiger max kølængde
  const percent = (queueValue / maxQueue) * 100; // Regner procentdelen ud
  queueBar.style.width = percent + "%"; // Sætter bredden på baren til procentdelen
}

setInterval(fetchData, 10000); // Opdaterer data hvert 10. sekund (10000 ms)
