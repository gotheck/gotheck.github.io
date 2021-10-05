// grid d d
// kieranj
// 9/28/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid;
let gridDimensions = 20;
let cellSize;

function setup() {
  if (windowHeight<windowWidth) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = makeRanArray(gridDimensions);
  cellSize = width / gridDimensions;
}

function draw() {
  background(0);
  displayGrid();
}

// function mousePressed() {
//   if (mouseX <= width && mouseY <= height) {
//     let cellX = Math.floor(mouseX/cellSize);
//     let cellY = Math.floor(mouseY/cellSize);

//     swap(cellx)
// }

function displayGrid() {
  for (let y=0; y<gridDimensions; y++) {
    for (let x=0; x<gridDimensions; x++){
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
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
      if (random(0,100)> 30) {
        aArray[y].push(0);
      }
      else {
        aArray[y].push(1);
      }
    }
  }
  return aArray;
}