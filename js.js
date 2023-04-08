const container = document.getElementById("pixelated");

for (let i = 0; i < 8192; i++) {
const pixel = document.createElement("div");
pixel.classList.add("pixel");
container.appendChild(pixel);
}

function animateNoise() {
const pixels = document.querySelectorAll(".pixel");

pixels.forEach(pixel => {
const random = Math.floor(Math.random() * 20);
if (random < 8) {
pixel.style.backgroundColor = "black";
} else if (random < 16) {
pixel.style.backgroundColor = "white";
} else {
pixel.style.backgroundColor = "black";
}
});
}

setInterval(animateNoise, 150);