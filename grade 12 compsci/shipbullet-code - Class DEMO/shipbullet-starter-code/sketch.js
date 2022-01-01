// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let moveW = false;
let moveS = false;
let moveA = false;
let moveD = false;
let speed = 5;
let bulletArray = [];
let bulletWidth = 15;
let bulletHeight = 40;
let shipWidth = 100;
let shipHeight = 250;
let shootSound, bgMusic;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
  shootSound = loadSound("assets/laser1.mp3");
  bgMusic = loadSound("assets/Sci-fifreakout.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage, shipWidth, shipHeight);
  bgMusic.loop();
}

function draw() {
  background(0);
  enterprise.update();
  enterprise.display();
  for (let bullets of bulletArray) {
    bullets.update();
    bullets.display();
  }
}

function keyPressed() {
  enterprise.handleKeyPress();
}

function keyReleased() {
  enterprise.handleKeyRelease();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage, w, h) {
    // define the variables needed for this ship
    this.x = x;
    this.y = y;
    this.image = theImage;
    this.w = w;
    this.h = h;
  }

  handleKeyPress() {
    // handle WASD key presses -- you will likely want to change booleans here
    if(key === "w") {
      moveW = true;
    }
    if(key === "s") {
      moveS = true;
    }
    if(key === "a") {
      moveA = true;
    }
    if(key === "d") {
      moveD = true;
    }
    if(key === " ") {
      shootSound.play();
      let bullet = new Bullet(this.x + 0.5*this.w - bulletWidth/2, this.y, 0, 10, bulletImage, bulletWidth, bulletHeight);
      bulletArray.push(bullet);
    }
  }

  handleKeyRelease() {
    // handle WASD key release -- you will likely want to change booleans here
    if(key === "w") {
      moveW = false;
    }
    if(key === "s") {
      moveS = false;
    }
    if(key === "a") {
      moveA = false;
    }
    if(key === "d") {
      moveD = false;
    }
  }

  update() {
    // move ship
    if(moveW) {
      this.y-=speed;
    }
    if(moveS) {
      this.y+=speed;
    }
    if(moveA) {
      this.x-=speed;
    }
    if(moveD) {
      this.x+=speed;
    }
    
    // if doing extra for experts, show bullet(s)
  }

  display() {
    // show the ship
    image(this.image, this.x, this.y, this.w, this.h);
  }

}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage, w, h) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.img = theImage;
    this.onScreen = true;
    this.w = w;
    this.h = h;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.y -= this.dy;
    this.isOnScreen();
    if(this.onScreen === false) {
      bulletArray.shift();
    }
  }

  display() {
    // show the bullet
    image(this.img, this.x, this.y, this.w, this.h);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    if(this.y < 0) {
      this.onScreen = false;
    }
  }
}

