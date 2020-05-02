
var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temp = 0;


function setup() {
  createCanvas(800, 600);
  background('lightblue')
  hot = loadImage('assets/hot.jpeg');
  cold = loadImage('assets/cold.png');

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61350,us&units=imperial&';
  var myIDString = 'appid=e1846d95919a0cac12e62c75e2c76ddb'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temp = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background('lightblue') ;
    fill('black')
    text("we have the weather babey!", 20, 20) ;
      text("Ottawa, IL", 20, 40) ;
    text("temperature:" + weather.main.temp, 20, 60) ;
    text("humidity:" + weather.main.humidity, 20, 80) ;
// parse the weather object and put some text or images using at least 3 different weather data!

fill('white');
noStroke();
ellipse(x+50, 200, 200, 100)
  fill('black')
  text("wind speed:" + weather.wind.speed + "mph", x, 200) ;
 x = x + ws/2;
 if (x > width) x = 0;

 fill('black')
 rect(width-75, height-40, 10, -250)
 fill('red')
 rect(width-100, height-40, 30, -temp/.5)

 image(cold, width-60, height-40, 50, 50);
 image(hot, width-60, height-300, 50, 50);
      break;

  }
}
