// Ball Scene
//Perlin Noise whatever that is

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let index = 0; index <10; index++) {
    spawnBall();
  }

  //ball every 0.5s
  window.setInterval(spawnBall, 500);
}

function draw() {
  background(220);

  checkIfBallTouchMouse();
  moveBall();
  displayBall();
}

function mousePressed() {
  spawnBall();
  ballArray[ballArray.length-1].x = mouseX;
  ballArray[ballArray.length-1].y = mouseY;
}
function checkIfBallTouchMouse() {
  for (let i =ballArray.length-1; i>=0; i--) {
    let howFar = dist(ballArray[i].x, ballArray[i].y, mouseX, mouseY);
    if (howFar < ballArray[i].radius) {
      ballArray.splice(i,1);
    }
  }
}

function spawnBall() {
  let newBall = {
    x: random(width),
    y: random(height),
    radius: random(10, 30),
    ballColor: color(random (255), random (255), random (255), random (255)),
    dx: random(5,10),
    dy: random(5,10),
    xTime: random(1000),
    yTime: random(1000),
    timeChange: random(0.001, 0.1),
  }; 
  ballArray.push(newBall);
}


function moveBall() {
  for (let theBall of ballArray) {
    // theBall.x += theBall.dx;
    // theBall.y += theBall.dy; 
    // theBall.dx = random(-5, 5);
    // theBall.dy = random(-5, 5);
    
    theBall.x = noise(theBall.xTime) * width;
    theBall.y = noise(theBall.yTime) * height;
    theBall.xTime += 0.01;
    theBall.yTime += 0.01;
  }
}

function displayBall() {
  for (let ball of ballArray) {
    noStroke();
    fill(ball.ballColor);
    circle(ball.x, ball.y, ball.radius*2);

  }
}
