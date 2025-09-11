const button = document.getElementById("netflix-button");
const timeSprite = document.getElementById("time_sprite");

document.addEventListener("DOMContentLoaded", () => {
  timeSprite.classList.add("tid"); // Start animation ved load
});

// Skift baggrundsfarve når animationen slutter
timeSprite.addEventListener("animationend", () => {
  document.body.style.backgroundColor = "darkred";
});

// Når musen bevæger sig, sæt animationen til at køre hurtigt til slut
document.addEventListener("mousemove", () => {
  // Sæt animationen til at køre hurtigt (fx 0.3s)
  timeSprite.style.animationDuration = "2s";
});
