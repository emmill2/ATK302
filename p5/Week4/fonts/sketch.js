var bro;
function preload() {
   bro = loadFont("assets/nash.ttf");

}
function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  textFont(bro, 80);
  text("YEEHAW", 300, 300);
}
