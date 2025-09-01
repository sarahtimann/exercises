const arr = [];
const list = document.querySelector("ul");

setInterval(genererSoejl, 1000);

function genererSoejl() {
  console.log("søjle");
  arr.push(Math.floor(Math.random() * 101));
  if (arr.length === 20) {
    arr.shift();
  }

  list.innerHTML = "";
  arr.forEach((num) => {
    const li = document.createElement("li");
    li.style.setProperty("--height", num);
    list.appendChild(li);
  });
  console.log(arr);
}
