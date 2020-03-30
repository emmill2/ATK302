var cars = [];

function setup() {
  createCanvas(displayWidth, displayHeight)
  for (var i = 0; i < 20; i++) {
      cars.push(new Car());
  }
}

function draw() {
  background('red');
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
  }
}

//car class
function Car() {
// attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-6,6), random(-6,6));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

// methods
this.display = function() {
  fill(this.r, this.g, this.b);
  rect(this.pos.x,this.pos.y,100,100);
}
this.drive = function(){
  this.pos.add(this.vel);
  if(this.pos.x > width) this.pos.x = 0;
  if(this.pos.x < 0) this.pos.x = width;
  if(this.pos.y > height) this.pos.y = 0;
  if(this.pos.y < 0) this.pos.y = height;
  }

}
