"use strict";
// let myVar = "Finn";
// console.log(myVar);

let myVarGlob;
upDateFinn("Finn");

function upDateFinn(name) {
  let myVar = name;
  myVarGlob = myVar;
  myVar += " er flink";
}
console.log(myVarGlob);
