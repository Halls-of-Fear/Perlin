const container = document.getElementById("pixelated");

for (let i = 0; i < 8192; i++) {
const pixel = document.createElement("div");
pixel.classList.add("pixel");
container.appendChild(pixel);
}

function animateNoise() {
const pixels = document.querySelectorAll(".pixel");
const subgrids = [];

// Divide the grid into 16 sub-grids (8x8 pixels each)
for (let i = 0; i < 16; i++) {
const subgrid = [];
for (let j = 0; j < 64; j++) {
for (let k = 0; k < 8; k++) {
subgrid.push(pixels[(i * 8 + k) * 64 + j]);
}
}
subgrids.push(subgrid);
}

// Randomly select a few sub-grids to fill with black pixels
const blackSubgrids = [];
while (blackSubgrids.length < 5) {
const randomSubgrid = subgrids[Math.floor(Math.random() * 16)];
if (blackSubgrids.indexOf(randomSubgrid) === -1) {
randomSubgrid.forEach(pixel => {
pixel.style.backgroundColor = "black";
});
blackSubgrids.push(randomSubgrid);
}
}

// Fill the remaining sub-grids with white pixels
subgrids.forEach(subgrid => {
if (blackSubgrids.indexOf(subgrid) === -1) {
subgrid.forEach(pixel => {
pixel.style.backgroundColor = "white";
});
}
});
}

setInterval(animateNoise, 150);