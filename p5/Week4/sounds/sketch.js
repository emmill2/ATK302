var song1;

function preload() {
  song1 = loadSound('assets/cowboys.wav');
}

function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
  song1.play();  // this is what starts the sound

}

function draw() {

}
