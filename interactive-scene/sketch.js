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

  moveSight();
} 


function moveSight() {
  noFill();
  stroke(64);
  circle(mouseX, mouseY, 35);
  cursor(CROSS, [mouseX], [mouseY]);
 


  // if (keyIsDown(RIGHT_ARROW)) {
  //   deg += 4;
  // }
  // if (keyIsDown(LEFT_ARROW)) {
  //   deg -= 4;
  // }
  // if (keyIsDown(UP_ARROW)) {
  //   x += cos(deg) * speed;
  //   y += sin(deg) * speed;
  // }
}

function displayTarget() {
  push();
  circle(windowWidth/2, windowHeight/2, 75, 50, 50);
  circle(windowWidth/2, windowHeight/2, 125, 50, 50);
  circle(windowWidth/2, windowHeight/2, 175, 50, 50);
  circle(windowWidth/2, windowHeight/2, 225, 50, 50);
  rect(200, 200, 100, 150);
  rect(1200, 200, 100, 150);
  rect(50, 200, 80, -130);
  rect(1005, 200, 100, 150);
  pop();
}

