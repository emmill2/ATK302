var x = 0

function setup() {
  // put setup code here
  createCanvas(750, 750) ;
}

function draw() {
  background('blue');
ellipse(x,100,100,100);
x+=5
if (x > width + 50){
  x = 0;
}
}
