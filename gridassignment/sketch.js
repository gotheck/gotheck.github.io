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
    createCanvas(windowWidth, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowHeight);
  }
  grid = makeRanArray(gridDimensions);
  cellSize = width / gridDimensions;
}

function draw() {
  background(0);
  displayGrid();
}

function displayGrid() {
  for (let y=0; y<gridDimensions; y++) {
    for (let x=0; x<gridDimensions; x++){
    }
    rect(x*cellSize,y*cellSize,cellSize, cellSize);
}

function makeRanArray(whatSize) {
  let aArray = [];
  for (let y=0; y<whatSize; y++) {
    aArray.push([]);
    for (let x=0; x<whatSize; x++) {
      if (random(0,100)> 30) {
        aArray[y].push(0);
      }
    }
  }
  return aArray;

}

