// Serpinski Triangle DEMO --Recursion Visualization
// Kieran 
// 10/29/31

let triangleVertices = [
  {x:400, y:100},
  {x:100, y:700},
  {x:700, y:700}
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleVertices);
}


function sierpinski(points) {
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x,points[2].y);

}
function getMidPoint(point1, point2) {
  let xDiff = (point1.x + point2.x)/2;
  let yDiff = (point1.y + point2.y)/2;
  let midpoint = {x: xDiff, y: yDiff};
  return midpoint;
}
