function setup() {
  // put setup code here
  createCanvas(800,800) ;
}

function draw() {
  // put drawing code here
  background('yellow') ;


if (mouseIsPressed) {
  ellipse(50, 50, 50, 50);

} else {
    rect(25, 25, 50, 50);
  }
}

function mouseIsPressed() {
  console.log(mouseX + ", " + mouseY) ;
}
