var x = 0

function setup() {
  // put setup code here
  createCanvas(750, 750) ;
}

function draw() {
  background('black')
  push() ;
  translate(x,0) ;
  lizzy() ;
  pop() ;

  x = x + 3
  if (x > width){
    x = 0;
  }
}

function lizzy() {
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
