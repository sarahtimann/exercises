"use strict";

const themeSwitcher = document.getElementById("theme-switcher");
const p = document.querySelector("p");

// Default tema når siden åbnes for første gang
document.body.dataset.filter = "light";
p.dataset.filter = "light";

themeSwitcher.value = "light"; // Sæt select til light

themeSwitcher.addEventListener("change", (event) => {
  document.body.dataset.filter = event.target.value;
  p.dataset.filter = event.target.value;
});
