const container = document.getElementById("pixelated");

for (let i = 0; i < 8192; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  container.appendChild(pixel);
}

function animateNoise() {
  const pixels = document.querySelectorAll(".pixel");

  pixels.forEach(pixel => {
    const random = Math.floor(Math.random() * 2);
    pixel.style.backgroundColor = random ? "black" : "white";
  });
}

setInterval(animateNoise, 150);
