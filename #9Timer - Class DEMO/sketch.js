// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bGTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bGTimer = new Timer(3000);

}

function draw() {
  if (bGTimer.isDone()) {
    background("red");
  }
  else {
    background("black");
  }
}
function mousePressed() {
  bGTimer.reset();
}

class Timer {
  constructor(duration) {
    this.duration = duration;
    this.startTime = millis();

  }

  isDone() {
    return millis() > this.startTime + this.duration;
  }

  reset() {
    this.startTime = millis();
  }

  setDuration(duration) {
    this.duration = duration;
  }

}