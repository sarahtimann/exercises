const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
// showTheseVehicles(vehicles);

// Funktion for alle el drevne fartøjer
function isElektrisk(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}

const onlyElectricVehicles = vehicles.filter(isElektrisk);
console.log("onlyElectricVehicles:", onlyElectricVehicles);

showTheseVehicles(onlyElectricVehicles);

document.getElementById("electric").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(onlyElectricVehicles);
});

// Funktion for alle fartøjer med mere end 2 sæder
function hasMoreThanTwoSeats(vehicle) {
  return vehicle.passengers > 2;
}
const vehiclesWithMoreThanTwoSeats = vehicles.filter(hasMoreThanTwoSeats);
console.log("vehiclesWithMoreThanTwoSeats:", vehiclesWithMoreThanTwoSeats);

showTheseVehicles(vehiclesWithMoreThanTwoSeats);

document.getElementById("two-seats").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(vehiclesWithMoreThanTwoSeats);
});

// Funktion for alle fartøjer ejet af Jonas
function isElectricAndOwnedByJonas(vehicle) {
  return vehicle.isElectric && vehicle.ownedBy === "Jonas";
}

const electricVehiclesOwnedByJonas = vehicles.filter(isElectricAndOwnedByJonas);
console.log("electricVehiclesOwnedByJonas:", electricVehiclesOwnedByJonas);

showTheseVehicles(electricVehiclesOwnedByJonas);

document.getElementById("jonas").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(electricVehiclesOwnedByJonas);
});

// Funktion for rugbrødsfartøjer med plads til mere end en

function isRugbrødWithMoreThanOneSeat(vehicle) {
  return vehicle.fuel === "Rugbrød" && vehicle.passengers > 1;
}

const rugbrødVehiclesWithMoreThanOneSeat = vehicles.filter(isRugbrødWithMoreThanOneSeat);
console.log("rugbrødVehiclesWithMoreThanOneSeat:", rugbrødVehiclesWithMoreThanOneSeat);

showTheseVehicles(rugbrødVehiclesWithMoreThanOneSeat);

document.getElementById("rugbrod").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(rugbrødVehiclesWithMoreThanOneSeat);
});

document.getElementById("all-vehicles").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(vehicles);
});

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type ?? ""}</td>
  <td>${each.fuel ?? ""}</td>
  <td>${each.passengers ?? ""}</td> 
  <td>${each.stops ? each.stops.join(", ") : ""}</td>
  <td>${each.ownedBy ?? ""}</td>
  <td>${each.isElectric ? "Ja" : ""}</td>
  <td>${each.isTandem ? "Ja" : ""}</td>
</tr>`;
  });
}
