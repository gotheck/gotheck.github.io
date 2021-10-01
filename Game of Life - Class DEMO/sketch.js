// BPD black and white 
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let gridDimensions = 30;
let cellSize;
let autoPlay = false;
let gun;


function preload(){
  gun = loadJSON("assets/gosper-gun.json");
}

function setup() {
  if (windowHeight < windowWidth) {
    createCanvas(windowWidth, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowHeight);
  }
  grid = createRandArray(gridDimensions);
  cellSize = width / gridDimensions;
}

function draw() {
  background(220);

  displayGrid();
  if (autoPlay && frameCount % 10 === 10) {
    update();
  }
}

function keyPressed() {
  if (key === "e") {
    grid = createEmptyArray(gridDimensions);
  }
  if (key === "r") {
    grid = createRandArray(gridDimensions);
  }
  if (key=== " ") {
    update();
  }
  if (key==="p") {
    autoPlay = !autoPlay;
  }
  if (key === "g") {
    grid = gun;
  }
}

function update() {
  //other array 
  let nextTurn = createEmptyArray(gridDimensions);
  for (let y=0; y<gridDimensions; y++) {
    for (let x=0; x<gridDimensions; x++) {
      let neighbors = 0;


      //check neighbour cell in 3x3 grid
      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          if (y+i>=0 && x+j>0 && y+i<gridDimensions && x+j<gridDimensions) {
            neighbors += grid[y+i][x+j];
          }
        }
      }
      //fix adding self
      neighbors -= grid[y][x];

      //apply rules
      if (grid[y][x] === 0) {     //dead
        if (neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] === 0;
        }
      }
      if (grid[y][x] === 1) { //alive
        if (neighbors === 2 || neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  grid = nextTurn;
}


function mousePressed() {
  if (mouseX <= width && mouseY <= height) {
    let cellX = Math.floor(mouseX/cellSize);
    let cellY = Math.floor(mouseY/cellSize);
  
    swap(cellX, cellY);
    
  }
}


function swap(x,y) {
  if (x >= 0 && x < gridDimensions && y >= 0 && y < gridDimensions) {
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
function createEmptyArray(howLarge) {
  let newArray = [];
  for (let y=0; y< howLarge; y++) {
    newArray.push([]);
    for (let x=0; x<howLarge; x++) {
      newArray[y].push(0);
    }
  }
  return newArray;
}