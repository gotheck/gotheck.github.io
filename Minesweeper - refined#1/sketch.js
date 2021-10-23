// grid d d
// kieranj
// 9/28/21

let grid;
let gridDimensions = 32;
let cellSize;
let mineX = [];
let mineY = [];
let mines;
let state = "game";
let gameOverButton;


function setup() {
  if (windowHeight<windowWidth) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = makeRanArray(gridDimensions);
  cellSize = width / gridDimensions;
  gameOverButton = createButton("Game Over");
  
  //place player
  // grid[playerY][playerX] = 9;
}

function draw() {
  if (state === "game") {
    displayGrid();
  }
  else if (state === "dead") {
    //show death screen
    // stateDead();
    console.log("dead now");
  }
}

function mousePressed() {
  if (mouseX <= width && mouseY <= height) {
    let cellX = Math.floor(mouseX/cellSize);
    let cellY = Math.floor(mouseY/cellSize);

    swap(cellX, cellY);
    swap(cellX-1, cellY-1);
    swap(cellX+1, cellY+1);
    swap(cellX-1, cellY+1);
    swap(cellX+1, cellY-1);
  }
}

function swap(x,y) {
  if (x >= 0 && x < gridDimensions && y >= 0 && gridDimensions) {
    if (grid[y][x]===0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 9) {
      grid[y][x] = 9;
      state = "dead";
    }
  }
}

function displayGrid() {
  for (let y=0; y<gridDimensions; y++) {
    for (let x=0; x<gridDimensions; x++){
      if (grid[y][x] === 0) {
        fill("black");
      }
      else if (grid[y][x] === 1) {
        fill("white");
      }
      else if (grid[y][x] === 9) {
      //   // fill("red"); //hide mines by filling in with 0 value color
        fill("black");
      }
      rect(x*cellSize,y*cellSize,cellSize, cellSize);
    }
  }
}

function makeRanArray(whatSize) {
  let aArray = [];
  for (let y=0; y<whatSize; y++) {
    aArray.push([]);
    for (let x=0; x<whatSize; x++) {
      if (random(0,80)>3) {
        aArray[y].push(0);
      }
      else {
        aArray[y].push(9);
      }
    }
  }
  return aArray;
}
