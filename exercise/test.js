"use strict";

// sayHello("Sarah");
// function sayHello(myName) {
//   console.log(`Hello ${myName}`);
// }

// sayHello("Sarah");

// presentPet("Sarah", "dog", "Mona");
// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}.`);
// }

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// function lengthOfStr(str) {
//   return str.length;
// }
// console.log(lengthOfStr(greeting("Sarah")));

// const greetingToSarah = greeting("Sarah");

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// const result = greeting("");
// console.log(result);
// console.log(greeting("any name"));

// const textContent = `Greeting is ${greeting("a name")}`;

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}
const myRandomNum = getRandomNum(100);

console.log("myRandomNum fra 0 til 100 er", getRandomNum());
