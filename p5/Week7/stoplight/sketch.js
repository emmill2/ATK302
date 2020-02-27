var myTimer = 0;
var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('black');

  // fill('white');
  // textSize(40);
  // text(mouseX + ", " + mouseY, 600, 100) ;

  fill('grey');
  rect(0, 150, 525, 50);
  rect(325, 150, 50, 525);
  rect(250, 250, 200, 400);
  ellipse(350,345,110,110)
  ellipse(350,458,110,110)
  ellipse(350,570,110,110)


  switch (myState) {
    case 0:
    fill('lightgreen')
    ellipse(350,570,100,100)
    fill('darkred')
    ellipse(350,345,100,100)
  fill(138,129,34);
    ellipse(350,458,100,100);
      myTimer++;
      if (myTimer > 200) {
              myState = 1 ;
              myTimer = 0 ;
        }
      break;
    case 1:
      fill('Yellow');
      ellipse(350,458,100,100);
      fill('darkred')
      ellipse(350,345,100,100)
      fill('green')
      ellipse(350,570,100,100)
      myTimer++;
      if (myTimer > 125) {
              myState= 2 ;
              myTimer = 0 ;
        }


      break;
      case 2:
      fill('red')
      ellipse(350,345,100,100)
      fill(138,129,34);
      ellipse(350,458,100,100);
      fill('green')
      ellipse(350,570,100,100)
        myTimer++;
        if (myTimer > 200) {
                myState= 0 ;
                myTimer = 0 ;
          }


        break;
  }
}
