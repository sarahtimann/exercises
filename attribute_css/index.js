document.querySelector("button").addEventListener("click", klik);

function klik(event) {
  console.log(document.querySelector("h1").dataset.filter);
  if (document.querySelector("h1").dataset.filter === "bat") {
    document.querySelector("h1").dataset.filter = "fox";
  } else {
    document.querySelector("h1").dataset.filter = "bat";
  }
}
