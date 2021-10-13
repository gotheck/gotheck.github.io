// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backgroundTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundTimer = new Timer()
}

function draw() {
  background(220);
}

class Timer {
  constructor(duration) {
    this.duration = duration;
    this.startTimer = millis();
  }

  isDone() {
    return millis() > this.startTimer + this.duration;
  }

  reset(){
    this.startTimer = millis();
  }

  setDuration() {
    
  }
}