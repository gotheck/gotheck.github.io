

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

//10x10 2D Array filled with 0's
let emptyArray =[];
for (let y=0; y<10; y++) {
  emptyArray.push([]);
  for (let x=0; x<10; x++) {
    emptyArray[y].push(0);
  }
}

function create2dArray(cols, rows) {
  let emptyArray = [];
  for (let y=0; y<cols; y++) {
    emptyArray.push([]);
    for (let x=0; x<rows; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}
let myArray = create2dArray(20, 20);