"use strict";
// let myVar = "Finn";
// console.log(myVar);

// let myVarGlob;
// upDateFinn("Finn");

// function upDateFinn(name) {
//   let myVar = name;
//   myVarGlob = myVar;
//   myVar += " er flink";
// }
// console.log(myVarGlob);

// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

// console.log(letters[4]);

// let newarr = letters;
// newarr[4] = "*";

// console.log(letters[4]);

// let result;
// const people = ["Harry", "Ron", "Hermione"];
// let result = people.shift();

// result = people.push("Draco");
// console.log("result", result);
// console.log("people", people);

// result = people.pop();
// console.log("people", people);
// console.log("result", result);

// result = people.push("Neville");
// console.log("people", people);
// console.log("result", result);

// result = people.push("Luna");
// console.log("people", people);
// console.log("result", result);

// result = people.slice(0, 3);
// console.log("people", people);
// console.log("result", result);

// result = people.splice(1, 0, "Cho");
// console.log("people", people);
// console.log("result", result);

// people[1] = "Ginny";
// console.log("people", people);
// console.log("result", result);

// result = people.push("Fred", "Cho");
// console.log("people", people);
// console.log("result", result);

// result = people.indexOf("Fred");
// console.log("people", people);
// console.log("result", result);

// result = people.splice(result, 1);
// console.log("people", people);
// console.log("result", result);

// const str = "abcdefghijklmn";
// const arr1 = str.split(""); // Man kan splitte alfabetet ved at sætte fx. c ind i "", så vil c udgå fra alfabetet
// console.log(arr1);

// const str = "abcdefghijklmn";
// const arr2 = Array.from(str);
// console.log(arr2);

// const str = "abcdefghijklmn";
// const arr3 = [...str];
// console.log(arr3);

// const array = ["one", "two", "three"];
// const arrayCopy = [...array];
// array[1] = "twemty";
// console.log("array", array);
// console.log("arrayCopy", arrayCopy);

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.fired = false;
}

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};

function fireOrHire(action, person) {
  action(person);
}

console.log("person3", person3);
fireOrHire(hire, person3);
console.log("person3", person3);

// function conGreet(firstName) {
//   console.log(`Hello ${firstName}`);
// }

// setTimeout(conGreet, 1000, "Ron");

// const postUrl = "https://jsonplaceholder.typicode.com/posts";

// function loadJSON(url, callback) {
//   fetch(url)
//     .then((response) => response.json)
//     .then((jsonData) => callback(jsonData));
// }

// function prepareData(data) {
//   console.table(data);
//   data.forEach((element) => {
//     document.querySelector("body").innerHTML += `<h1>${element.title}</h1>`;
//   });
// }
