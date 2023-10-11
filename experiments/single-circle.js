let circleCount;
let tileWidth = 600;
let endSize;
let enOffset = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255, 0, 160);
  strokeWeight(5);
}

//single color version
function draw() {
  background(0, 0, 214);

  endSize = map(mouseX, 0, max(width, mouseX), tileWidth / 2, 0);
  endOffset = map(mouseY, 0, max(height, mouseY), 0, (tileWidth - endSize) / 2);
  circleCount = mouseX / 40 + 1;

  translate(width / 2, height / 2);
  for (let i = 0; i < circleCount; i++) {
    let diameter = map(i, 0, circleCount, tileWidth, endSize);
    let offiset = map(i, 0, circleCount, 0, endOffset);
    ellipse(offiset, 0, diameter, diameter);
  }
}
