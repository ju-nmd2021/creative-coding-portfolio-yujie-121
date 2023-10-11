let circleCount;
let tileWidth = 600;
let endSize;
let enOffset = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255, 255, 0);
  strokeWeight(5);
}

//single color version
// function draw() {
//   background(0, 0, 214);

//   endSize = map(mouseX, 0, max(width, mouseX), tileWidth / 2, 0);
//   endOffset = map(mouseY, 0, max(height, mouseY), 0, (tileWidth - endSize) / 2);
//   circleCount = mouseX / 40 + 1;

//   translate(width / 2, height / 2);
//   for (let i = 0; i < circleCount; i++) {
//     let diameter = map(i, 0, circleCount, tileWidth, endSize);
//     let offiset = map(i, 0, circleCount, 0, endOffset);
//     ellipse(offiset, 0, diameter, diameter);
//   }
// }

// color change version
function draw() {
  background(0, 0, 214);

  endSize = map(mouseX, 0, max(width, mouseX), tileWidth / 2, 0);
  endOffset = map(mouseY, 0, max(height, mouseY), 0, (tileWidth - endSize) / 2);
  circleCount = mouseX / 40 + 1;

  translate(width / 2, height / 2);
  for (let i = 0; i < circleCount; i++) {
    let diameter = map(i, 0, circleCount, tileWidth, endSize);
    let offset = map(i, 0, circleCount, 0, endOffset);

    // Calculate color based on mouse position
    let r = map(mouseX, 0, width, 0, 255);
    let g = map(mouseY, 0, height, 0, 255);
    let b = 255 - r; // Inverse color

    fill(r, g, b); // Set circle fill color
    ellipse(offset, 0, diameter, diameter);
  }
}
//code was learned from this source:
//https://www.bilibili.com/video/BV1fg4y1x74H/?spm_id_from=333.788.recommend_more_video.-1&vd_source=108732e66ea4d2cef361d78ab79d1795
