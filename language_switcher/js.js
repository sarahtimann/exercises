"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";
// const localeDe = "de";

// console.log(texts["de"]);

// const qsl = "header";
// document.querySelector(qsl).textContent = "Mona";

texts[locale].texts.forEach((obj) => {
  document.querySelector(obj.location).textContent = obj.text;
});

function switchLanguage(newLocale) {
  locale = newLocale;

  texts[locale].texts.forEach((obj) => {
    document.querySelector(obj.location).textContent = obj.text;
  });
}

document.getElementById("de").addEventListener("click", () => switchLanguage("de"));

// texts[localeDe].texts.forEach((obj) => {
//   document.querySelector(obj.location).textContent = obj.text;
// });

// const btnDa = document.querySelector(".da");
// const btnDe = document.querySelector(".de");

// selectElement.addEventListener("change", (event) => {
//   const selectedLanguage = event.target.value;
//   // Update the locale variable
//   locale = selectedLanguage;

//   // Update the text content based on the selected language
//   texts[locale].texts.forEach((obj) => {
//     document.querySelector(obj.location).textContent = obj.text;
//   });
// });
