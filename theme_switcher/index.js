"use strict";

const storedTheme = localStorage.getItem("storedTheme");
console.log("storedTheme", storedTheme);

if (storedTheme === null) {
  localStorage.setItem("storedTheme", "light");
} else {
  document.body.dataset.filter = storedTheme;
  const p = document.querySelector("p");
  p.dataset.filter = storedTheme;
}

const themeSwitcher = document.getElementById("theme-switcher");
const p = document.querySelector("p");

// // Default tema når siden åbnes for første gang
// document.body.dataset.filter = "light";
// p.dataset.filter = "light";
// themeSwitcher.value = "light"; // Sæt select til light

themeSwitcher.addEventListener("change", (event) => {
  console.log("themeSwitcher", themeSwitcher);
  localStorage.setItem("storedTheme", event.target.value);
  document.body.dataset.filter = event.target.value;
  p.dataset.filter = event.target.value;
});
