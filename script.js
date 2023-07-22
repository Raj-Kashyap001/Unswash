const gridContainer = document.querySelector(".grid");
const loadBtn = document.querySelector(".load-more");

function load() {
  if (gridContainer.style.height > "100%") {
    gridContainer.style.height = "100%";
  } else {
    gridContainer.style.height = "300vh";
  }
}
