function setup() {
  // put setup code here
  createCanvas(1550, 750) ;
}

function draw() {
  // put drawing code here
  background('lightBlue') ;

  fill('black');
  textSize(40);
  text(mouseX + ", " + mouseY, 100, 100)

if (mouseIsPressed) {
  //background
  fill('green');
  rect(0, 510, 775, 500);


// dino
fill('#2BC779');
quad(360, 270, 335, 300, 362, 290, 400, 305);
  fill('lightGreen');
  ellipse(360, 215, 75, 75)

  //leg 1
  fill('#2BC779');
  quad(240, 365, 290, 395, 273, 524, 230, 535);
  fill('#2BC779');
  quad( 230, 535, 273, 524, 313, 544, 297, 553);
  fill('#2BC779');
  quad(313, 544, 312, 560, 240, 575, 250, 565);
  fill('#2BC779');
  quad(250, 565, 240, 575, 305, 583, 305, 569);
  //body and tail
  fill('lightGreen');
  quad(333, 240,372, 244, 305, 395, 205, 365);
  fill('lightGreen');
  triangle(205, 365, 260, 312, 95, 300);

  //leg 2
  fill('lightGreen');
  quad( 255, 365, 325, 350, 288, 524, 245, 535);
  fill('lightGreen');
  quad(245, 535, 288, 524, 328, 544,312, 553);
  fill('lightGreen');
  quad(328, 544, 327, 560, 255, 575, 265, 565);
  fill('lightGreen');
  quad(265, 565, 255, 575, 320, 583, 320, 569);

  //arms

  //arms
  fill('lightGreen');
  quad(350, 275, 325, 305, 352, 295, 390, 310);
}
else {
//background
    fill('green');
    rect(0, 510, 775, 500);
//dino
  fill('#2BC779');
  quad(360, 370, 335, 400, 362, 390, 400, 405);
  fill('lightGreen');
    ellipse(360, 315, 75, 75);
    //leg 1
    fill('#2BC779');
    quad( 240, 465, 290, 495, 273, 524, 230, 535);
    fill('#2BC779');
    quad( 230, 535, 273, 524, 313, 544, 298, 553);
    fill('#2BC779');
    quad(313, 544, 312, 560, 240, 575, 250, 565);
    fill('#2BC779');
    quad(250, 565, 240, 575, 305, 583, 305, 569);
    //body and tail
    fill('lightGreen');
    quad(333, 340,372, 344, 305, 495, 205, 465);
    fill('lightGreen');
    triangle(205, 465, 260, 412, 95, 400);
    //leg 2
    fill('lightGreen');
    quad( 255, 465, 325, 450, 288, 524, 245, 535);
    fill('lightGreen');
    quad( 245, 535, 288, 524, 328, 544,312, 553);
    fill('lightGreen');
    quad(328, 544, 327, 560, 255, 575, 265, 565);
    fill('lightGreen');
    quad(265, 565, 255, 575, 320, 583, 320, 569);
    //arms
    fill('lightGreen');
    quad(350, 375, 325, 405, 352, 395, 390, 410);
  }
}
