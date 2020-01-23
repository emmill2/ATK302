function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

  function draw(){
  background(88,131,232,91);
  noStroke();

  fill('green');
  rect(0, 350, 720, 63);
// tree 1//
  fill('brown');
  rect(35, 325, 25, 55);

  fill('darkgreen');
  triangle(48, 8, 15, 330, 84, 330);

  fill(60,128,54);
  triangle(48, 8, 18, 190, 81, 190);

// tree 2//
  fill('brown');
  rect(135, 335, 25, 55);

  fill('darkgreen');
  triangle(148, 18, 115, 340, 184, 340);

  fill(60,128,54);
  triangle(148, 18, 118, 200, 181, 200);

  fill(255,219,0);
  ellipse(690, 25, 72, 72);

  fill('brown');
  arc(565, 365, 280, 280, PI, TWO_PI);

  fill('black');
  arc(565, 365, 120, 150, PI, TWO_PI);

  fill('white');
  ellipse(465, 126, 72, 72);
  fill('white');
  ellipse(415, 126, 72, 72);
  fill('white');
  ellipse(360, 125, 72, 72);
  fill('white');
  ellipse(415, 95, 72, 72);

  // fill(0);
  // textSize(40);
  // text(mouseX + ", " + mouseY, 100, 100) ;
}
