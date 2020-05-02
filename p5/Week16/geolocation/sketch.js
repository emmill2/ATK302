var locationData;

function preload(){
    locationData =  getCurrentPosition();
}

function setup() {
  background("lightblue")
	createCanvas(500, 500) ;

}

function draw() {
	fill('black') ;
	textSize(12) ;
	text("This is your current location! Crazy, right?", 20, 20) ;
    text(locationData.latitude, 40, 40) ;
    text(locationData.longitude, 40, 60) ;
    text(locationData.accuracy, 40, 80) ;
  text(locationData.altitude, 40, 100) ;

    text(locationData.altitudeAccuracy, 40, 120) ;
    text(locationData.heading, 40, 140) ;
    text(locationData.speed, 40, 160) ;

}
