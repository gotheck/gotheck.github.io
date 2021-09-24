// terrain generation
// kieran j
// 9/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let heights = [];
let numberOfRectangles = 10;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain(numberOfRectangles);
}

function draw() {
  background(220);
}

function displayTerrain() {
  let rectWidth = width/numberOfRectangles;
  for (let i = 0; i<heights.length; i++) {
    rect(i*rectWidth, height-height[i], rectWidth, heights[i]);
  }
}

function generateTerrain(howMany) {
  let time = 0;
  let dTime = 0.01;

  for(let i = 0; i<howMany; i++) {
    let currentHeight = noise(time)*height;
    heights.push(currentHeight);
    time += dTime;
  }

}