function setup() {
  createCanvas(windowWidth, windowHeight);
  background(176, 196, 222);
}

function draw() {
  let x0 = windowWidth / 2;
  let y0 = windowHeight / 2;

  // Randomly choose the number of circles to draw
  let numCircles = int(random(3, 10));

  for (let i = 0; i < numCircles; i++) {
    // Randomly determine the radius and color of each circle
    let circleRadius = random(50, 200);
    let circleColor = color(random(255), random(255), random(255), 0);

    fill(circleColor);
    noStroke();

    // Draw a circle at the center
    ellipse(x0, y0, circleRadius * 2);

    // Randomly choose the number of lines for each circle
    let numLines = int(random(5, 20));

    for (let j = 0; j < numLines; j++) {
      let angle = random(360);
      let lineLength = random(circleRadius);

      // Calculate the endpoint of the line
      let x1 = x0 + lineLength * cos(angle);
      let y1 = y0 + lineLength * sin(angle);

      let lineColor = color(random(255), random(255), random(255), 100);

      stroke(lineColor);
      strokeWeight(1);

      line(x0, y0, x1, y1);
    }
  }
}
