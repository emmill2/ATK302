
var mic;
var vol;
var x = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(100);
  

ellipse(x, 200, 100, 100) ;
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 5) {
    // do something
    x++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
