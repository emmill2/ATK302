function setup() {
  // put setup code here
  createCanvas(1550, 750) ;
}

function draw() {
  // put drawing code here
  background('yellow') ;


  textSize(40);
  text(mouseX + ", " + mouseY, 100, 100)

if (mouseIsPressed) {
  ellipse(50, 50, 50, 50);

} else {
    rect(25, 25, 50, 50);
    ellipse(360, 315, 75, 75)
    quad(333, 340,372, 344, 355, 495, 275, 465)
    ellipse(310, 490, 100, 75)

  }
}
