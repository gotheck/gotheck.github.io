//GLOBAL VARI's
let x;
let y;

let speed = 3;
let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 1.2;
}

function draw() {
  background(0);
  displayTarget();
  moveSight();
  collide();

} 
function collide() {
  stroke("white");
  circle(mouseX, mouseY, 35);
 
  hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 35),  collidePointRect(1400, 200, 100, -150,mouseX, mouseY, 35);
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
  //stroke("green");
  circle(windowWidth/2, windowHeight/2, 75, 50, 50);
  circle(windowWidth/2, windowHeight/2, 125, 50, 50);
  circle(windowWidth/2, windowHeight/2, 175, 50, 50);
  circle(windowWidth/2, windowHeight/2, 225, 50, 50);
  rect(200, 200, 100, 150);
  rect(1400, 200, 100, -150);
  rect(50, 200, 100, -150);
  rect(1250, 200, 100, 150);
  pop();
}

