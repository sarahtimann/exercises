"use strict";

const fullName = "Peter Heronimous Lind";
const fullName2 = "Sarah Timann Olsen";

const firstSpace = fullName2.indexOf(" ");

const lastSpace = fullName2.lastIndexOf(" ");

const firstName = fullName2.substring(0, firstSpace);
const middleName = fullName2.substring(firstSpace + 1, lastSpace);
const lastName = fullName2.substring(lastSpace + 1);

console.log("firstName", firstName);
console.log("middleName", middleName);
console.log("lastName", lastName);
