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
  background(0);
  displayMain();
  moveMain();  
  displayTarget();
  moveSight();
  collide();

} 
function collide() {
  circle(mouseX, mouseY, 35);
  hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 35);
  if (hit) {
    stroke("red");
  }
}
function moveSight() {
  noFill();
  stroke(64);
  circle(mouseX, mouseY, 35);
  cursor(CROSS, [mouseX], [mouseY]);
}

function displayTarget() {
  push();
  // circle(windowWidth/2, windowHeight/2, 75, 50, 50);
  // circle(windowWidth/2, windowHeight/2, 125, 50, 50);
  // circle(windowWidth/2, windowHeight/2, 175, 50, 50);
  // circle(windowWidth/2, windowHeight/2, 225, 50, 50);
  rect(200, 200, 100, 150);
  // rect(1400, 200, 100, -150);
  // rect(50, 200, 100, -150);
  // rect(1250, 200, 100, 150);
  pop();
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


