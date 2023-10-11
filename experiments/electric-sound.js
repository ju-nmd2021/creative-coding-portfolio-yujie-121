let player;
let oscillator;
let analyser;

window.addEventListener("load", () => {
  player = new Tone.Player("assets/sound.mp3");
  oscillator = new Tone.Oscillator(440, "sine").toDestination();

  analyser = new Tone.Analyser("fft", 4096);

  oscillator.connect(analyser);
  oscillator.toDestination();
  player.connect(analyser);
  player.toDestination();
});

window.addEventListener("click", () => {
  player.start();
  // oscillator.start();
});

function setup() {
  createCanvas(innerWidth, innerHeight);
  stroke(0);
}

function draw() {
  let value = analyser.getValue();

  if (player.state === "started" || oscillator.state === "started") {
    // If music is playing, draw the wave-like shape
    background(50, 50, 50);
    noFill();
    stroke(255);

    beginShape();
    for (let i = 0; i < value.length; i++) {
      let v = map(value[i], -100, 0, height / 2, -height / 2);
      let x = map(i, 0, value.length, 0, width);
      let y = height / 2 + v * sin(map(i, 0, value.length, 0, TWO_PI));
      vertex(x, y);
    }
    endShape();
  } else {
    // If there's no sound, clear the screen
    background(50, 50, 50);
  }
}
