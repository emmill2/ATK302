var myTimer = 0;
var myState = 0;

function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  // put drawing code here
  background('black');
  fill('white');

  switch (myState) {
    case 0:
      textSize(40);
      text("Why did the painting go to jail?", 100, 100);
      myTimer++;
      if (myTimer > 200) {
        myState = 1;
        myTimer = 0;
      }
      break;
    case 1:
      text("Because he was FRAMED", 100, 100);
      myTimer++;
      if (myTimer > 200) {
        myState = 0;
        myTimer = 0;
      }


      break;
  }
}
