let player;
let oscillator;
let analyser;
let isPlaying = false;
let yoff = 0; // Initialize yoff for Perlin noise

window.addEventListener("load", () => {
  player = new Tone.Player("assets/wave-sound.mp3");
  oscillator = new Tone.Oscillator(440, "sine").toDestination();

  analyser = new Tone.Analyser("fft", 4096);

  oscillator.connect(analyser);
  oscillator.toDestination();
  player.connect(analyser);
  player.toDestination();
});

window.addEventListener("click", () => {
  player.start();
  isPlaying = true;
  // oscillator.start();
});

function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke();
}

function draw() {
  if (isPlaying) {
    background(0, 50, 100);
    fill(255);

    beginShape();
    let xoff = 0; // Start xoff at 0 for each wave
    for (let x = 0; x <= width; x += 10) {
      // Calculate y-coordinate using Perlin noise
      let y = map(noise(xoff, yoff), 0, 1, height / 3, height);
      vertex(x, y);
      xoff += 0.1; // Increment xoff for the next point
    }
    yoff += 0.01; // Increment yoff for the next frame
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  } else {
    background(0, 50, 100); // Clear the screen when there's no sound
  }
}
//help from ChatGTP to learning the Perlin noise
