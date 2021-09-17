//GLOBAL VARI's
let x;
let y;
let deg = 270;
let speed = 3;
let theColors;
let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  x = width / 2;
  y = height / 1.2;
}

function draw() {
  background(0);
  rect(200, 200, 100, 150);
    circle(mouseX, mouseY, 100);

    hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
  

    stroke(hit ? color('red') : 0);
  displayMain();
  moveMain();
} 

//targetcode
theColors = ["white", "red"];
  ellipse(200, 200, 400-40*i, 400-40*i);     
   
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

