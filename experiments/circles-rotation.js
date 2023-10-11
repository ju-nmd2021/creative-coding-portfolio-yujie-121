let circleCount;
let tileWidth;
let tileHeight;

let endSize;
let enOffset = 200;

let tileCountX = 6;
let tileCountY = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noFill();
  stroke(255, 255, 0);
  strokeWeight(3);

  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
}

function draw() {
  background(0, 0, 214);

  randomSeed(0);
  translate(tileWidth / 2, tileHeight / 2);

  endSize = map(mouseX, 0, max(width, mouseX), tileWidth / 2, 0);
  endOffset = map(mouseY, 0, max(height, mouseY), 0, (tileWidth - endSize) / 2);
  circleCount = mouseX / 40 + 1;

  for (let gridX = 0; gridX <= tileCountX; gridX++) {
    for (let gridY = 0; gridY <= tileCountY; gridY++) {
      push();
      translate(tileWidth * gridX, tileHeight * gridY);
      scale(1, tileHeight / tileWidth);

      const angle = int(random(0, 4));

      if (angle === 0) rotate(-HALF_PI);
      if (angle === 1) rotate(0);
      if (angle === 2) rotate(HALF_PI);
      if (angle === 4) rotate(PI);

      for (let i = 0; i < circleCount; i++) {
        let diameter = map(i, 0, circleCount, tileWidth, endSize);
        let offiset = map(i, 0, circleCount, 0, endOffset);
        ellipse(offiset, 0, diameter, diameter);
      }
      pop();
    }
  }
}
//code was learned from this source:
//https://www.bilibili.com/video/BV1fg4y1x74H/?spm_id_from=333.788.recommend_more_video.-1&vd_source=108732e66ea4d2cef361d78ab79d1795
