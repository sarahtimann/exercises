const btnSet = document.querySelector(".btnSet");
const btnGet = document.querySelector(".btnGet");
const set = document.querySelector(".set");
const get = document.querySelector(".get");

btnSet.addEventListener("click", klikSet);
btnGet.addEventListener("click", klikGet);

const etArray = [{ navn: "Jonny" }, { navn: "Thom" }];
console.log(etArray[1].navn);

function klikSet() {
  localStorage.setItem("myData", JSON.stringify(etArray));
}

let arrayFromLocalStorage;

function klikGet() {
  get.value = localStorage.getItem("myData");
  arrayFromLocalStorage = JSON.parse(get.value);
  console.log(arrayFromLocalStorage[1].navn);
}
