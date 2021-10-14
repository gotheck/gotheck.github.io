// grid d d
// kieranj
// 9/28/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid;
let gridDimensions = 32;
let cellSize;
// let playerX = 0;
// let playerY = 0;
let mineX = [];
let mineY = [];
let mines;


function setup() {
  if (windowHeight<windowWidth) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = makeRanArray(gridDimensions);
  cellSize = width / gridDimensions;
  //place player
  // grid[playerY][playerX] = 9;
}

function draw() {
  background(0);
  displayGrid();

  // for (let i=0; i === gridDimensions; i++) {
  //   for (let j=0; j === gridDimensions; j++) {

  //   }
  // }
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

// function keyPressed() {
//   if (key === "s") {
//     tryMoveTo(playerX, playerY +1);
//   }
//   else if (key === "w") {
//     tryMoveTo(playerX, playerY -1);
//   }
//   else if (key === "d") {
//     tryMoveTo(playerX +1, playerY);
//   }
//   else if (key === "a") {
//     tryMoveTo(playerX -1, playerY);
//   }
// }

// function tryMoveTo(newX, newY) {
//   //check if ON GRID
//   if (newX >= 0 && newY >= 0 && newX < gridDimensions && newY < gridDimensions) {
//     //check if SPACE IS EMPTY
//     if (grid[newY][newX] === 0) {
//       //RESET SPACE TO EMPTY
//       // grid[playerY][playerX] = 0;

//       // //PLAYER MOVEMENT
//       // playerX = newX;
//       // playerY = newY;

//       //PLAYER PLACEMENT ON GRID
//       grid[newY][newX] = 9;
//     }
//   }
// }

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
        fill("red");
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
