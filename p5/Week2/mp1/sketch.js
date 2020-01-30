function setup() {
  // put setup code here
  createCanvas(1550, 750) ;
}

function draw() {
  // put drawing code here
  background('lightBlue') ;


  textSize(40);
  text(mouseX + ", " + mouseY, 100, 100)

if (mouseIsPressed) {
  //background
  fill('green');
  rect(0, 510, 775, 500);


// dino
  fill('blue');
  ellipse(360, 215, 75, 75)

  //leg 1
  fill('blue');
  quad(240, 365, 290, 395, 273, 524, 230, 535);
  fill('blue');
  quad( 230, 535, 273, 524, 313, 544, 297, 553);
  fill('blue');
  quad(313, 544, 312, 560, 240, 575, 250, 565);
  fill('blue');
  quad(250, 565, 240, 575, 305, 583, 305, 569);
  //body and tail
  fill('blue');
  quad(333, 240,372, 244, 305, 395, 205, 365);
  fill('blue');
  triangle(205, 365, 260, 312, 95, 300);

  //leg 2
  fill('blue');
  quad( 255, 365, 325, 350, 288, 524, 245, 535);
  fill('blue');
  quad(245, 535, 288, 524, 328, 544,312, 553);
  fill('blue');
  quad(328, 544, 327, 560, 255, 575, 265, 565);
  fill('blue');
  quad(265, 565, 255, 575, 320, 583, 320, 569);

  //arms
  fill('blue');
  quad(335, 295, 325, 305, 400, 313, 400, 299);

}
else {
//background
    fill('green');
    rect(0, 510, 775, 500);
//dino
    ellipse(360, 315, 75, 75)
    //leg 1
    quad( 240, 465, 290, 495, 273, 524, 230, 535)
    quad( 230, 535, 273, 524, 313, 544, 297, 553)
    quad(313, 544, 312, 560, 240, 575, 250, 565)
    quad(250, 565, 240, 575, 305, 583, 305, 569)
    //body and tail
    quad(333, 340,372, 344, 305, 495, 205, 465)
    triangle(205, 465, 260, 412, 95, 400)
    //leg 2
    quad( 255, 465, 325, 450, 288, 524, 245, 535)
    quad( 245, 535, 288, 524, 328, 544,312, 553)
    quad(328, 544, 327, 560, 255, 575, 265, 565)
    quad(265, 565, 255, 575, 320, 583, 320, 569)
    //arms
    quad(335, 395, 325, 405, 400, 413, 400, 399)
  }
}
