//GLOBAL VARI's
let x;
let y;
let deg = 270;
let speed = 3;
let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  x = width / 2;
  y = height / 1.2;
}

function draw() {
  background(255);
  displayTarget();
  displayMain();
  // push();
  // translate(x,y);
  // fill("red");
  // circle(2, 2, 300, 50, 50);
  // pop();
  moveMain();
} 


function moveMain() {
  if (keyIsDown(RIGHT_ARROW)) {
    deg += 4;
  }
  if (keyIsDown(LEFT_ARROW)) {
    deg -= 4;
  }
  if (keyIsDown(UP_ARROW)) {
    x += cos(deg) * speed;
    y += sin(deg) * speed;
  }
}
function displayMain() {
  push();
  translate(x, y);
  rotate(deg);
  fill("green");
  triangle(20, 0, -20, 20, -20, -20);
  pop();
}
function displayTarget() {
  push();
  // translate(x,y);
  noFill();
  stroke(64);
  circle(mouseX, mouseY, 300);
  circle(windowWidth/2, windowHeight/2, 300, 50, 50);
  rect(200, 200, 100, 150);
  pop();
}

