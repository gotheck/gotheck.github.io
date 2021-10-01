// BPD black and white 
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let gridDimensions = 10;
let cellSize;
let level1;
let playerX = 0;
let playerY = 0;

function preload() {
  level1 = loadJSON("assets/level1.json");
}

function setup() {
  if (windowHeight < windowWidth) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  //grid = createRandArray(gridDimensions);

  grid = level1;

  cellSize = width / gridDimensions;
  //place player

  grid[playerY][playerX] = 9;

}

function draw() {
  background(220);

  displayGrid();
}
function mousePressed() {
  let cellX = Math.floor(mouseX/cellSize);
  let cellY = Math.floor(mouseY/cellSize);

  swap(cellX, cellY);


}

function keyPressed() {
  if (key === "s") {
    tryMoveTo(playerX, playerY+1);
  }
  else if (key === "w") {
    tryMoveTo(playerX, playerY-1);
  }
  else if (key === "d") {
    tryMoveTo(playerX+1, playerY);
  }
  else if (key === "a") {
    tryMoveTo(playerX-1, playerY);
  }
}



function tryMoveTo(newX, newY) {
  //check if on grid
  if (newX >= 0 && newY >= 0 && newX < gridDimensions && newY < gridDimensions) {
    //check if empty.
    if (grid[newY][newX] === 0) {
      //reset current spot to empty
      grid[playerY][playerX]= 0;
      

      //move player
      playerX = newX;
      playerY = newY;

      //place player on grid
      grid[newY][newX] = 9;
    }
  }

}


function swap(x,y) {
  if (x >= 0 && x < gridDimensions&&y>=0 && gridDimensions) {
    if (grid[y][x]===0) {
      grid[y][x] = 1;
    }
    else if(grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}
function displayGrid() {
  for (let y=0; y<gridDimensions; y++) {
    for (let x=0; x<gridDimensions; x++){
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      } 
      else if (grid[y][x] === 9) {
        fill("red");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
      
    }
  }
}



function createRandArray(howLarge) {
  let newArray = [];
  for (let y=0; y< howLarge; y++) {
    newArray.push([]);
    for (let x=0; x<howLarge; x++) {
      if (random(0,100) > 50) {
        newArray[y].push(0);
      }
      else {
        newArray[y].push(1);
      }
    }
  }
  return newArray;
}