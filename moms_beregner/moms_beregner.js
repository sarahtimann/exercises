"use strict";

// const moms = 25;
// const beloeb = 300;

function momsBeregner(beloeb, moms = 25) {
  let resultat = beloeb * (1 + moms / 100);
  console.log(`Beløb inkl. moms er ${resultat}`);
}

momsBeregner(100); // default vil moms være 25, men hvis man sender et parameter mere med vil beregningen tilpasse sig til det
