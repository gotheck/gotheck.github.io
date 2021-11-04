//button


let bgColor = "white";
let buttonOne, buttonTwo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonOne = new Button(300, 200, 400, 100);
  buttonTwo = new Button(300, 400, 400, 100);
  buttonTwo.notHoveredColor = "#DBFE87"; 
  buttonTwo.hovercolor = "#FFE381"; 
}

function draw() {
  background(bgColor);
  buttonOne.display();
  buttonTwo.display();
}

function mousePressed() {
  if (buttonOne.checkIfInside(mouseX, mouseY)) {
    bgColor= "yellow";
  }
  else if (buttonTwo.checkIfInside(mouseX, mouseY)) {
    bgColor = "black";
  }
}

class Button {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.hoverColor = "green";
    this.notHoveredColor = "purple";
  }

  display() {
    if(this.checkIfInside(mouseX, mouseY)) {
      fill(this.hoverColor);
    }
    else {
      fill(this.notHoveredColor);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  checkIfInside(x, y) {
    return x >= this.x && x <= this.x + this.width &&
           y >= this.y && y <= this.y + this.height;
  }
}