"use strict";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const btn = document.getElementById("btn");
const textInput = document.getElementById("text");
const messageDiv = document.getElementById("message");

btn.addEventListener("click", () => {
  let text = textInput.innerHTML;
  let containsBadWord = false;

  curseWords.forEach(({ bad }) => {
    if (text.includes(bad)) {
      containsBadWord = true;
    }
  });

  if (containsBadWord) {
    // Ingenting skal ske her
  } else {
    messageDiv.textContent = "Det er allerede Safe to Work";
    messageDiv.style.display = "block";
  }

  curseWords.forEach(({ bad, good }) => {
    text = text.replace(bad, `<span class="good-word">${good}</span>`);
  });
  textInput.innerHTML = text;
});
