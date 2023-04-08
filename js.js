<script src="https://rawgit.com/josephg/noisejs/master/perlin.js"></script>
// Get the canvas element
var canvas = document.getElementById("perlin-canvas");
var ctx = canvas.getContext("2d");

// Generate perlin noise data
var noise = new Noise(Math.random());
var data = new Uint8ClampedArray(240 * 320 * 4);
for (var x = 0; x < 240; x++) {
  for (var y = 0; y < 320; y++) {
    var value = noise.perlin2(x / 240, y / 320) * 128 + 128;
    var index = (x + y * 240) * 4;
    data[index] = value;
    data[index + 1] = value;
    data[index + 2] = value;
    data[index + 3] = 255;
  }
}

// Create a new ImageData object with the data array
var imageData = new ImageData(data, 240, 320);

// Draw the ImageData on the canvas
ctx.putImageData(imageData, 0, 0);