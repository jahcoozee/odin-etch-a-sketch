const container = document.querySelector(".container");

// Build canvas to populate with pixel divs
const canvas = new DocumentFragment();

// Populate canvas with pixels based on grid size
for (i = 0; i < 4096; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  canvas.append(pixel);
}

// Change color of pixels in grid
let pixels = canvas.querySelectorAll(".pixel");
pixels.forEach(pixel => pixel.addEventListener("mouseenter", () => {
  pixel.classList.add("paint");
}));

// Call last to draw
container.append(canvas);