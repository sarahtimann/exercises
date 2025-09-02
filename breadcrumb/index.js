const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", klik);

function klik() {
  let str = "";
  bc.forEach((elm, i) => {
    // str += `<li><a href="${elm.link}">${elm.name}</a></li>`;
    // Tilføj separator hvis det ikke er sidste element
    if (i < bc.length - 1) {
      str += `<li><a href="${elm.link}">${elm.name}</a></li>`;
      str += " / ";
    } else {
      str += `<li>${elm.name}</li>`;
    }
  });
  document.querySelector("ul").innerHTML = str;
}
