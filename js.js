const container = document.getElementById("pixelated");

for (let i = 0; i < 8192; i++) {
const pixel = document.createElement("div");
pixel.classList.add("pixel");
container.appendChild(pixel);
}

const BLACK_FADEOUT_RATE = 0.5;

function animateNoise() {
const pixels = document.querySelectorAll(".pixel");
const blackPixels = [];

// Randomly select a few pixels to fill with black pixels
while (blackPixels.length < 50) {
const randomIndex = Math.floor(Math.random() * 8192);
if (blackPixels.indexOf(randomIndex) === -1) {
blackPixels.push(randomIndex);
}
}

// Fill the surrounding pixels of each black pixel with black pixels too
blackPixels.forEach(index => {
const pixel = pixels[index];
if (pixel.style.backgroundColor !== "black") {
pixel.style.backgroundColor = "black";
pixel.fadeout = 1;
}

const x = index % 128;
const y = Math.floor(index / 128);

for (let i = -1; i <= 1; i++) {
  for (let j = -1; j <= 1; j++) {
    if (i === 0 && j === 0) continue;
    const neighborX = x + i;
    const neighborY = y + j;
    if (neighborX >= 0 && neighborX < 128 && neighborY >= 0 && neighborY < 64) {
      const neighborPixel = pixels[neighborY * 128 + neighborX];
      if (neighborPixel.style.backgroundColor !== "black") {
        neighborPixel.style.backgroundColor = "black";
        neighborPixel.fadeout = 1;
      }
    }
  }
}
});

// Fade out black pixels over time
pixels.forEach(pixel => {
if (pixel.style.backgroundColor === "black") {
pixel.fadeout = Math.max(0, pixel.fadeout - BLACK_FADEOUT_RATE);
pixel.style.opacity = pixel.fadeout;
} else {
pixel.fadeout = 0;
}
});
}

setInterval(animateNoise, 150);