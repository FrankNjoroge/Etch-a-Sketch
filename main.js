const container = document.querySelector(".container");
const colors = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.querySelector("button");

let sizeofGrid;

function makeGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    let size2 = size * size;
    div.setAttribute("style", `height:${Math.sqrt((400 * 400) / size2)}px`);
    div.setAttribute("style", `width:${Math.sqrt((400 * 400) / size2)}px`);
  }
}

function setGridColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 16);
    color += colors[num];
  }
  return color;
}

btn.addEventListener("click", () => {
  if (container.children.length > 0) {
    container.innerHTML = "";
  }
  sizeofGrid = Number(
    prompt(
      "Enter desired number of grid squares and move your mouse over the grid area for some MAGIC!!"
    )
  );
  makeGrid(sizeofGrid);
  const divs = document.querySelectorAll(".container div");

  divs.forEach((div) =>
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = setGridColor();
    })
  );
});
