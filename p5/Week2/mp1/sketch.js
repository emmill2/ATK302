function setup() {
  // put setup code here
  createCanvas(750, 750) ;
}

function draw() {
  // put drawing code here
  background('lightBlue') ;

//  fill('black');
//  textSize(40);
//  text(mouseX + ", " + mouseY, 100, 100)

if (mouseIsPressed) {
  //background
  fill('green');
  rect(0, 510, 775, 500);
//scales
fill('orange')
ellipse(315,255,30,30)
ellipse(292,278,30,30)
ellipse(269,300,30,30)

// dino
  fill('#2BC779');
  quad(360, 270, 335, 300, 362, 290, 400, 305);



  //leg 1
  fill('#2BC779');
  quad(240, 315, 310, 300, 273, 474, 232, 437);
  quad(232, 437, 280, 440, 313, 494, 297, 503);
  quad(296, 500, 312, 495, 265, 560, 247, 560);
  quad(250, 555, 240, 575, 305, 583, 305, 569);
  //body and tail
  fill('lightGreen');
  quad(333, 240,372, 244, 305, 395, 205, 365);
  fill('lightGreen');
  triangle(205, 365, 260, 312, 95, 300);
  fill('lightGreen');
  ellipse(360, 215, 75, 75);
  fill('white')
  ellipse(355, 210, 18, 25);
  ellipse(385, 210, 18, 25);
    fill('black')
    ellipse(355, 212, 10, 10);
    ellipse(385, 212, 10, 10);
  fill('lightGreen');
  ellipse(375, 235, 55, 45);
  //nose
  ellipse(365, 225, 5, 5);  ellipse(385, 225, 5, 5);

  //leg 2
  quad(255, 365, 325, 350, 288, 474, 247, 437);
  quad(247, 437, 295, 440, 328, 494, 312, 503);
  quad(311, 500, 327, 495, 280, 560, 262, 560);
  quad(265, 555, 255, 575, 320, 583, 320, 569);

  //arms
  fill('lightGreen');
  quad(350, 275, 325, 305, 352, 295, 390, 310);
  //mouth and face stuff
  fill(0, 11, 97, 200)
  quad(340, 197, 368, 200, 365, 216, 345, 220); quad(370, 200, 395, 195, 390, 216, 375, 216);
  noFill()
  curve(250, 250, 395, 240, 350, 240, 190, 190);
}

else {
//background
    fill('green');
    rect(0, 510, 775, 500);
//scales
fill('orange')
ellipse(315,355,30,30); ellipse(292,378,30,30); ellipse(269,400,30,30)
//dino
  fill('#2BC779');
  quad(360, 370, 335, 400, 362, 390, 400, 405);
  fill('lightGreen');
    ellipse(375, 325, 60, 55)
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
