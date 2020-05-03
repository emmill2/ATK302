  var namesArray = [];
  var leo = 0 ;
  var donnie = 0 ;
  var mikey = 0 ;
  var raph = 0 ;
  var shredd = 0 ;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1Dd3Umyxme8YhtfNcyKPh6xr7b_nRxGNnbA9llc_SncU';
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
//  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Tmnt(data[i].turtle));

    if(data[i].turtle == "Leonardo") leo++ ;
    if(data[i].turtle == "Donatello") donnie++ ;
    if(data[i].turtle == "Michelangelo") mikey++ ;
    if(data[i].turtle == "Raphael") raph++ ;
    if(data[i].turtle == "Shredder") shredd++ ;
  }

}


function draw() {
  background('blue');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();
  }

  //graphs
textSize(14) ;
    fill('white')
  rect(50, height-50, 20, -leo*10) ;
  text('Leonardo', 50, height-20) ;

  rect(150, height-50, 20, -donnie*10) ;
  text('Donatello', 150, height-20) ;

  rect(250, height-50, 20, -mikey*10) ;
  text('Michelangelo', 250, height-20) ;

  rect(350, height-50, 20, -raph*10) ;
  text('Raphael', 350, height-20) ;

  rect(450, height-50, 20, -shredd*10) ;
  text('Shredder', 450, height-20) ;

}


// my circle class
function Tmnt(myTurtle) {
  this.pos = createVector(random(width), random(height));
  this.turtle = myTurtle;
  this.vel = random(3);
  this.mySize = random(24, 60);


  this.display = function() {

    fill('black')
    textSize(this.mySize)

    text(this.turtle, this.pos.x, this.pos.y);
 // put an ellipse here
  }

  this.drive = function() {
    this.pos.x = this.pos.x + this.vel ;
    if (this.pos.x > width) this.pos.x = -20;
  }

}
