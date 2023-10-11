let yoff = 0; // Offset for Perlin noise

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0, 50, 100); // Ocean blue background

  fill(255); // White fill for the waves

  beginShape();
  let xoff = 0; // Start xoff at 0 for each wave
  for (let x = 0; x <= width; x += 10) {
    // Calculate y-coordinate using Perlin noise
    let y = map(noise(xoff, yoff), 0, 1, 100, 300);
    vertex(x, y);
    xoff += 0.1; // Increment xoff for the next point
  }
  yoff += 0.01; // Increment yoff for the next frame
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  // Play wave sound
  if (frameCount % 60 == 0) {
    playWaveSound(); // You'll need to implement the playWaveSound function
  }
}

// Function to simulate a wave sound effect (you can replace this with an actual sound library)
function playWaveSound() {
  // Implement your sound playback logic here
  // For example, you can use the p5.sound library or another audio library to play a wave sound
  // For simplicity, we'll just log a message here
  console.log("Wave sound played!");
}
