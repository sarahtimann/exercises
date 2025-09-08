"use strict";

const themeSwitcher = document.getElementById("theme-switcher");
const p = document.querySelector("p");

themeSwitcher.addEventListener("change", (event) => {
  document.body.dataset.filter = event.target.value;
  p.dataset.filter = event.target.value; // Denne linje er kun nødvendig for at vise p's datafilter ændring
});
