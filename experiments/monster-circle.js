function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  stroke(255, 0, 160);
}

function draw() {
  background(0, 0, 214);

  let scope = int(map(mouseY, 0, height, 2, 80));
  let radius = mouseX - width / 2;
  let angle = TWO_PI / scope;

  for (let x = 120; x < width; x += 300) {
    for (let y = 120; y < height; y += 300) {
      // Fix: Use 'y' as the loop variable condition
      push();
      translate(x, y);
      for (let i = 0; i <= scope; i++) {
        let dx = cos(angle * i) * radius;
        let dy = sin(angle * i) * radius;

        // Remove the unnecessary 'rotate' call
        line(0, 0, dx, dy);
      }
      pop();
    }
  }
}
//learned from this source:
//https://www.bilibili.com/video/BV16v4y1G7Kf/?spm_id_from=333.788.recommend_more_video.0&vd_source=108732e66ea4d2cef361d78ab79d1795
