const arr = []; // Opretter et tomt array som indeholder de tilfældige tal, som bliver til højden på søjlerne
const list = document.querySelector("ul");

setInterval(genererSoejl, 1000); // Sætter interval med at kører en ny søjle per sekund

function genererSoejl() {
  // Starter funktionen
  console.log("søjle"); // Tjekker at den er gået igennem
  arr.push(Math.floor(Math.random() * 101)); // Genererer et tilfældigt tal mellem 0-100
  // arr.push lægger tallet ind i arrayet
  if (arr.length === 20) {
    // Tjekker om arr er 20 tal langt
    arr.shift(); // Bruger shift til at fjerne gamle søjler, når der kommer nye ind
  }

  list.innerHTML = ""; // Rydder ul elementet, så gamle søjler fjernes før der genereres nye
  arr.forEach((num) => {
    // Går gennem alle værdier i arrayet, num er et random tal mellem 0-100
    const li = document.createElement("li"); // Laver et nyt li i DOM'en
    li.style.setProperty("--height", num); // Tilføjer li til værdien num
    list.appendChild(li); // Indsætter det nye li element i ul listen
  });
  console.log(arr); // Viser hele arrayet i konsollen, så jeg får indblik i hvilke tal, der bruges til at lave søjlerne
}
