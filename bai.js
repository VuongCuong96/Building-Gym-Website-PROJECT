const urlImg =
  "https://img.icons8.com/?size=100&id=EZHhDJt1WECM&format=png&color=000000";
const container = document.getElementById("container");

for (let i = 0; i <= 150; i++) {
  const newDiv = document.createElement("div");
  const parentDiv = container.appendChild(newDiv);
  const img = document.createElement("img");
  img.src = `${urlImg}${i}`;
  parentDiv.appendChild(img);
  const span = document.createElement("span");
  span.innerText = `#${i}`;
  parentDiv.appendChild(span);
}

//  --------------------------------------------------

const button = document.getElementById("btn");
//
function chageColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
//
button.addEventListener("click", function () {
  document.body.style.backgroundColor = chageColor();
});
// add va remove bang JS
const panels = document.querySelectorAll("list_panel");
const addAction = panels.forEach((item) => {
  removeAction();
  item.addEventListener("click", () => {
    item.classList.add("action");
  });
});

function removeAction() {
  panels.forEach((item) => {
    item.classList.remove("action");
  });
}
// -------------      --------------
