window.addEventListener("load", sidenVises); // Når siden er loadet, kald sidenVises

function sidenVises() {
  const progress = document.querySelector(".progress"); // Vælger progress baren
  progress.classList.add("animate"); // Tilføjer animation til progress baren

  progress.addEventListener("animationend", stopAnimation); // Når animationen er færdig, kald stopAnimation

  window.addEventListener(
    // Lytter efter musens bevægelse
    "mousemove", // Når musen bevæger sig
    () => {
      progress.style.animation = "none"; // Stopper animationen
      progress.style.width = "100%"; // Sætter bredden til 100%
      stopAnimation(); // Kalder stopAnimation
    },
    { once: true } // Kun kør én gang
  );
}

function stopAnimation() {
  // Funktion der kører når animationen er færdig eller musen bevæger sig
  document.body.style.backgroundColor = "#e50914"; // Ændrer baggrundsfarven til Netflix rød
}
