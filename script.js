const container = document.querySelector(".container");
const canvas = new DocumentFragment();

for (i = 0; i < 256; i++) {
  const pixel = document.createElement("div");
  canvas.append(pixel);
}

container.append(canvas);