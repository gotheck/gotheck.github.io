// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//let myBall;
let ballArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  let myBall = new Ball(width/2, height/2);
  ballArray.push(myBall);
}

function draw() {
  background(0);

  for (let i=0; i < ballArray.length; i++) {
    for (let j=0; j < ballArray.length; j++) {
      if (i !== j) { //dont check if hit self
        ballArray[i].checkCollisionWith(ballArray[j]);
      }
    }
    ballArray[i].move();
    ballArray[i].display();
  }
}

function mousePressed() {
  let myBall = new Ball(mouseX, mouseY);
  ballArray.push(myBall);
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(30, 60);
    this.theColor = color(random(255),random(255),random(255),random(255));
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
  }

  display() {
    noStroke();
    fill(this.theColor);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    //edge check
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.dx *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.dy *= -1;
    }
  }

  checkCollisionWith(otherBall) {
    let distanceBetween = dist(this.x, this.y, otherBall.x, otherBall.y);
    let radiiSum = this.radius + otherBall.radius;
    if (distanceBetween < radiiSum) {
      //hit!
      this.theColor = "red";
      otherBall.theColor = "red";

      //crap col dectect
      let tempDx = this.dx;
      let tempDy = this.dy;


      this.dx = otherBall.dx;
      this.dy = otherBall.dy;

      otherBall.dx = tempDx;
      otherBall.dy = tempDy;
    }
  }
}
