"use strict";

const theName = "vAldeMAR";
const threeCapitalised1 = theName.substring(0, 2).toLowerCase();
const threeCapitalised2 = theName.substring(2, 3).toUpperCase();
const threeCapitalised3 = theName.substring(3).toLowerCase();

console.log(threeCapitalised1 + threeCapitalised2 + threeCapitalised3); // haNse

// let name = "Peter";
// let newName = "peTer";

// // Lav om til små bogstaver
// console.log(newName.toLowerCase()); // peter

// // Lav om til store bogstaver
// console.log(newName.toUpperCase()); // PETER

// // Første bogstav lille, næste to store, resten små
// console.log(
//   newName.substring(0, 1).toLowerCase() + // p
//     newName.substring(1, 3).toUpperCase() + // ET
//     newName.substring(3).toLowerCase() // er
// ); // pETer

// // De to første bogstaver store, resten små
// console.log(
//   newName.substring(0, 2).toUpperCase() + // PE
//     newName.substring(2).toLowerCase() // ter
// ); // PEter

// // Kun sidste bogstav stort, resten små
// console.log(
//   newName.slice(0, -1).toLowerCase() + // pete
//     newName.slice(-1).toUpperCase() // R
// ); // peteR

// console.log(
//   newName.substring(0, 2).toUpperCase() + // PE
//     newName.substring(2, 3).toLowerCase() + // t
//     newName.substring(3).toUpperCase() // ER
// ); // PEtER
