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

const selectElement = document.getElementById("language-switcher");

let selectedLanguage = locale;

selectElement.addEventListener("change", (event) => {
  selectedLanguage = event.target.value;
  switchLanguage(selectedLanguage);
});
