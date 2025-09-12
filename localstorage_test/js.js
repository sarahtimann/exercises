"use strict";

const btnSet = document.querySelector(".btnSet");
const btnGet = document.querySelector(".btnGet");
const set = document.querySelector(".set");
const get = document.querySelector(".get");

btnSet.addEventListener("click", klikSet);
btnGet.addEventListener("click", klikGet);

function klikSet() {
  localStorage.setItem("myCat", set.value);
}

function klikGet() {
  get.value = localStorage.getItem("myCat");
}
