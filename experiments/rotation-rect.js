// const size = 80;
// const gap = 20;
// const amount = 5;

// function setup() {
//   createCanvas(innerWidth, innerHeight);
// }

// function draw() {
//   background(255, 255, 255);
//   noFill();
//   stroke(0, 0, 0);
//   strokeWeight(2);

//   let y = (height - size * amount - gap * (amount - 1)) / 2;
//   let rotation = 0;
//   for (let i = 0; i < amount; i++) {
//     let x = (width - size * amount - gap * (amount - 1)) / 2;
//     for (let k = 0; k < amount; k++) {
//       push();
//       translate(x, y);
//       rotate(rotation);
//       square(0, 0, size);
//       pop();
//       x += size + gap;
//       rotation += 0.02;
//     }
//     y += size + gap;
//   }

//   noLoop();
// }

const size = 80;
const gap = 20;
const amount = 5;

let rotation = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noFill();
  stroke(0);
  strokeWeight(2);
}

function draw() {
  background(255);

  let y = (height - size * amount - gap * (amount - 1)) / 2;

  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;

    for (let k = 0; k < amount; k++) {
      push();
      translate(x, y);

      if (mouseX > x && mouseX < x + size && mouseY > y && mouseY < y + size) {
        rotate(rotation);
      }

      square(0, 0, size);
      pop();

      x += size + gap;
    }
    y += size + gap;
  }

  rotation += 0.02;

  // to control this do not rotation like a cirle
  if (rotation >= PI / 4) {
    rotation = 0;
  }
}

function mouseMoved() {
  redraw();
}
