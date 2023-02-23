// Build canvas to populate with pixel divs
const container = document.querySelector(".container");

// Populate canvas with a default grid size of 16x16
for (i = 0; i < 256; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  container.appendChild(pixel);
}

// Change color of pixels in grid
let pixels = container.querySelectorAll(".pixel");
pixels.forEach(pixel => pixel.addEventListener("mouseenter", () => {
  pixel.classList.add("paint");
}));

// Allow user to input grid size and remake the canvas
const gridSizeButton = document.querySelector(".grid-size");
gridSizeButton.addEventListener("click", setGridSize);

function setGridSize() {
  buildNewCanvas();

  // Request new grid size from user
  let size = prompt("Select a new grid size (between 1-100):");

  // Populate new canvas based on user input
  for (i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);
  }

  // Adjust number of columns based on user input
  const gridColumns = document.querySelector(".container");
  gridColumns.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  // Change color of pixels in grid
  let pixels = container.querySelectorAll(".pixel");
  pixels.forEach(pixel => pixel.addEventListener("mouseenter", () => {
    pixel.classList.add("paint");
  }));
}

// Clear default grid size of 16x16
function buildNewCanvas() {
  const pixel = document.createElement("div");
  container.replaceChildren();
}