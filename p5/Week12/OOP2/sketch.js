var cars = [];
var frogPos ;
var myState = 0;
var timer = 20 * 60;

function setup() {
  createCanvas(windowWidth, windowHeight)
  for (var i = 0; i < 10; i++) {
      cars.push(new Car());
  }
  frogPos = createVector(width/2, height-100)
}

function draw() {
  switch (myState) {
    case 0:
      background('lightBlue');
      textSize(24);
      text("Use WASD or the Arrow Keys to catch all the squares!", 200, 200);
      text("press any key to begin", 200, 300)
      break;

    case 1:
      game();
      timer--;
      if (timer <= 0){
        myState = 3; //oof
      }
      break;

    case 2:
      background('lightBlue');
      textSize(24);
      text("Winner Winner Chicken Dinner", 200, 200)
      text("press any key to continue", 200, 300)
      break;

    case 3:
      background('lightBlue');
      textSize(24);
      text("oof too bad", 200, 200)
      text("press any key to try again", 200, 300)

      break;

  }

}

function keyPressed(){
  switch (myState) {
    case 0:
    myState = 1 ;
    break;
    case 2:
    location.reload();
    break;
    case 3:
    location.reload();
    break;

  }
}


function game(){
  background('lightBlue');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

  if  (cars[i].pos.dist(frogPos) < 50) {
    cars.splice(i, 1) ;
    }
    //if no cars you winnnn
  if (cars.length == 0) {
    myState = 2;
    }

  }
  //frog
  fill('white');
  ellipse(frogPos.x, frogPos.y, 100, 100);
  checkForKeys();
}




function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)||keyIsDown(keyCode = 65)) frogPos.x -=5;
  if (keyIsDown(RIGHT_ARROW)||keyIsDown(keyCode = 68)) frogPos.x +=5;
  if (keyIsDown(UP_ARROW)||keyIsDown(keyCode = 87)) frogPos.y -=5;
  if (keyIsDown(DOWN_ARROW)||keyIsDown(keyCode = 83)) frogPos.y +=5;
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
  rect(this.pos.x,this.pos.y,50,50);
}
this.drive = function(){
  this.pos.add(this.vel);
  if(this.pos.x > width) this.pos.x = 0;
  if(this.pos.x < 0) this.pos.x = width;
  if(this.pos.y > height) this.pos.y = 0;
  if(this.pos.y < 0) this.pos.y = height;
  }

}
