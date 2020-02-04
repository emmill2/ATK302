var ninja ;
var skink ;
var band ;
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
ninja = loadImage("assets/minininja.jpg");
skink = loadImage("assets/skinkbabey.jpg");
band  = loadImage("assets/rubberband.jpg");
}

function draw() {
  // put drawing code here
  //image(imagename, x, y, width, height)
  image(ninja, 0, 0, 50, 50);
  image(skink, 50, 50, 50, 50);
  image(band, 100, 100, 50, 50);
}
