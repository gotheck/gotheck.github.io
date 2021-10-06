//oop walker class demo
// kieran 
// Date

let runner;
let relay;
let carrier;


function setup() {
  createCanvas(windowWidth, windowHeight);
  runner = new Walker(width/2, height/2, "blue");
  relay = new Walker(200, 200, "red");
  carrier = new Walker(600, 600, "green");
  // relay.color = "red";
}

function draw() {
  relay.move();
  runner.move();
  carrier.move();

  runner.display();
  relay.display();
  carrier.display();
}

class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.speed = 4;
    this.radius = 1;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let theChoice = random(100);

    if (theChoice <25)  {//up
      this.y -= this.speed;
    }
    else if (theChoice <50 ) { //down
      this.y += this.speed;
    }
    else if (theChoice <75) {  //left
      this.x -= this.speed;
    }
    else {
      this.x += this.speed; // right
    }
  }
}