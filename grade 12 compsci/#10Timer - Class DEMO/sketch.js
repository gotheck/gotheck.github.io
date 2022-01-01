// Project Title
// kieran


let backgroundTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundTimer = new Timer(3000);
}

function draw() {
  if (backgroundTimer.isDone()) {
    background("green"); 
  }
  else {
    background("black");
  }
}
function mousePressed() {
  backgroundTimer.reset();
}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTimer = millis();
  }

  isDone() {
    return millis() > this.startTimer + this.waitTime;
  }

  reset(){
    this.startTimer = millis();
  }

  setDuration(waitTime) {
    this.waitTime = waitTime;
  }
}