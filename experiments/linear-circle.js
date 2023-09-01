// let r = 200;
// let linesCreated = 0;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(176, 196, 222);
//   frameRate(10); // Set a lower frame rate (10 frames per second)
//   //get help from chatGTP to slow down the speed of drawing circle
// }

// function draw() {
//   if (linesCreated <= 500) {
//     let x0 = windowWidth / 2;
//     let y0 = windowHeight / 2;

//     let a1 = random(360);
//     let a2 = random(360);

//     let x1 = x0 + r * Math.cos((a1 * Math.PI) / 180);
//     let y1 = y0 + r * Math.sin((a1 * Math.PI) / 180);

//     let x2 = x0 + r * Math.cos((a2 * Math.PI) / 180);
//     let y2 = y0 + r * Math.sin((a2 * Math.PI) / 180);

//     strokeWeight(0.18);

//     push();
//     fill(25, 25, 112);
//     line(x1, y1, x2, y2);
//     pop();

//     linesCreated++;
//     // this idea was get inspired from Garrit, then I added if statment to stop create new line when it <= 500
//   }
// }

// and also, Garrit said that I can use noloop() to solve this, the code below is the vision with noloop()
// let r = 200;
// let linesCreated = 0;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(176, 196, 222);
//   noLoop(); // Stops the draw() function after 500 lines are drawn.
// }

// function draw() {
//   let x0 = windowWidth / 2;
//   let y0 = windowHeight / 2;

//   for (let i = 0; i < 1000; i++) {
//     let a1 = random(360);
//     let a2 = random(360);

//     let x1 = x0 + r * Math.cos((a1 * Math.PI) / 180);
//     let y1 = y0 + r * Math.sin((a1 * Math.PI) / 180);

//     let x2 = x0 + r * Math.cos((a2 * Math.PI) / 180);
//     let y2 = y0 + r * Math.sin((a2 * Math.PI) / 180);

//     strokeWeight(0.18);

//     push();
//     fill(25, 25, 112);
//     line(x1, y1, x2, y2);
//     pop();

//     linesCreated++;
//   }
// } // but this vesion we can just get the linear circle for once
// // but we can't see the process of creating this circle

let r = 200;
let linesCreated = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(176, 196, 222);
}

function draw() {
  let x0 = windowWidth / 2;
  let y0 = windowHeight / 2;

  if (linesCreated < 500) {
    let a1 = random(360);
    let a2 = random(360);

    let x1 = x0 + r * Math.cos((a1 * Math.PI) / 180);
    let y1 = y0 + r * Math.sin((a1 * Math.PI) / 180);

    let x2 = x0 + r * Math.cos((a2 * Math.PI) / 180);
    let y2 = y0 + r * Math.sin((a2 * Math.PI) / 180);

    strokeWeight(0.18);

    push();
    fill(25, 25, 112);
    line(x1, y1, x2, y2);
    pop();

    linesCreated++;
  } else {
    noLoop(); // Stops the draw() function when 500 lines are created.
  }
} // now we can combined those to solve problems with noloop() and if statement!

// the idea of this from this vedio:
// https://www.bilibili.com/video/BV14Y4y1m7jw/?spm_id_from=333.337.search-card.all.click&vd_source=108732e66ea4d2cef361d78ab79d1795
