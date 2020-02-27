var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('black');
  fill('white');

  switch (myState) {
    case 0:
      text("Why was the pebble sad?", 100, 100);
      break;
    case 1:
      text("Because he wished he was a little boulder", 100, 100);
      break;
  }
}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 1) {
    myState = 0;
  }
}
