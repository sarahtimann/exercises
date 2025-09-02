// const array = []; // Opretter et tomt array som indeholder de tilfældige tal, som bliver til højden på søjlerne
// const list = document.querySelector("ul");

// setInterval(genererSoejl, 1000); // Sætter interval med at kører en ny søjle per sekund

// function genererSoejl() {
//   // Starter funktionen
//   console.log("søjle"); // Tjekker at den er gået igennem
//   array.push(Math.floor(Math.random() * 101)); // Genererer et tilfældigt tal mellem 0-100
//   // arr.push lægger tallet ind i arrayet
//   if (array.length === 20) {
//     // Tjekker om arr er 20 tal langt
//     array.shift(); // Bruger shift til at fjerne gamle søjler, når der kommer nye ind
//   }

//   list.innerHTML = ""; // Rydder ul elementet, så gamle søjler fjernes før der genereres nye
//   array.forEach((num) => {
//     // Går gennem alle værdier i arrayet, num er et random tal mellem 0-100
//     const li = document.createElement("li"); // Laver et nyt li i DOM'en
//     li.style.setProperty("--height", num); // Tilføjer li til værdien num
//     list.appendChild(li); // Indsætter det nye li element i ul listen
//   });
//   console.log(array); // Viser hele arrayet i konsollen, så jeg får indblik i hvilke tal, der bruges til at lave søjlerne
// }

const list = document.querySelector("ul");

const barArr = [];

setInterval(generateBars, 500);

function generateBars() {
  barArr.push(Math.round(Math.random() * 100));
  if (barArr.length > 6) {
    barArr.shift();
  }
  render();
}

function render() {
  document.querySelectorAll("li").forEach((elm, i) => {
    console.log("i", i);
    elm.style.setProperty("--height", barArr[i]);
  });
}
