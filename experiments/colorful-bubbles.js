let circles = [];
let minRadius = 2;
let maxRadius = 90;
let totalCircles = 500;
let createCircleAttempts = 600;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();

  for (let i = 0; i < totalCircles; i++) {
    createCircle();
  }
}

function draw() {
  for (let i = 0; i < circles.length; i++) {
    let { x, y, radius, color } = circles[i];

    fill(color);
    noStroke();
    ellipse(x, y, radius * 2);
  }
}

// get random color value
function getRandomColor() {
  let r = random(0, 150);
  let g = random(100, 150);
  let b = random(90, 20);
  return color(r, g, b);
}

function createCircle() {
  let newCircle;
  let circlesToDraw = false;

  for (let drawCircle = 0; drawCircle < createCircleAttempts; drawCircle++) {
    newCircle = {
      x: random(width),
      y: random(height),
      radius: minRadius,
      color: getRandomColor(),
    };

    //check if already have circle in place
    if (doesCircleHavePosition(newCircle)) {
      continue;
    } else {
      circlesToDraw = true;
      break;
    }
  }

  if (!circlesToDraw) {
    return;
  }
  //If circlesToDraw is false, exit the current function or block of code.

  for (let radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
    newCircle.radius = radiusSize;
    if (doesCircleHavePosition(newCircle)) {
      newCircle.radius--;
      break;
    }
  }

  circles.push(newCircle);
}

function doesCircleHavePosition(circle) {
  for (let i = 0; i < circles.length; i++) {
    let otherCircle = circles[i];
    let a = circle.radius + otherCircle.radius;
    let x = circle.x - otherCircle.x;
    let y = circle.y - otherCircle.y;

    if (a >= sqrt(x * x + y * y)) {
      return true;
    }
    // The code checks if the sum of the radii (a) is greater than or equal to the distance between the centers of the two circles (calculated using the Pythagorean theorem).
    //If this condition is met for any circle in the circles array, it means there is an overlap, and the function returns true immediately.
    // this is get help from ChatGTP
  }

  return false;
} // this function checks if the given circle overlaps with any of the circles in the circles array by comparing the distances between their centers and their radius.
// If it finds an overlap, it returns true; otherwise, it returns false.

// This idea was gained inspirition from this website:https://generativeartistry.com/tutorials/circle-packing/
