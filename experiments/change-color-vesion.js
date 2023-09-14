let r = 200;
let lineColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  lineColor = color(25, 25, 112);
}

function draw() {
  let x0 = windowWidth / 2;
  let y0 = windowHeight / 2;

  let a1 = random(360);
  let a2 = random(360);

  let x1 = x0 + r * Math.cos((a1 * Math.PI) / 180);
  let y1 = y0 + r * Math.sin((a1 * Math.PI) / 180);

  let x2 = x0 + r * Math.cos((a2 * Math.PI) / 180);
  let y2 = y0 + r * Math.sin((a2 * Math.PI) / 180);

  strokeWeight(0.18);

  push();
  fill(lineColor);
  stroke(lineColor);
  line(x1, y1, x2, y2);
  pop();
}

function keyPressed() {
  if (keyIsDown(32)) {
    lineColor = color(random(255), random(255), random(255));
  }
}
