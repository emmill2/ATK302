var westernStyle;
var myTimer = 0;
var gameScenes = ["Bunko", "Fjord", "Gorf", "Prince","Frogardiers"];
var currentScene = 0;
var characterDescriptions = ["not to be trusted... wanted for cheating in a high stakes game of poker",
"texas native, will break your heart -and your face-",
"dosn't know what he's wanted for",
"leader of the group, the glue that holds them all together",
"the world's mightiest heros -after the avengers-"

]
var img = [];
function preload() {
  westernStyle = loadFont("assets/nash.ttf");
  img.push(loadImage('assets/bunko.jpg'));
  img.push(loadImage('assets/fjord.jpg'));
  img.push(loadImage('assets/gorf.jpg'));
  img.push(loadImage('assets/prince.jpg'));
  img.push(loadImage('assets/gang.jpg'));
}
function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight)
  background('lightBlue')
  changeScene(currentScene)
}

function draw() {
  // put drawing code here
  textFont(westernStyle, 20);
    myTimer++;
    if (myTimer > 10) {
      text(characterDescriptions[currentScene],550,250);
      }
      if (currentScene > 4) {
        currentScene = 0;
        changeScene(0);
      }
}

function mousePressed(){
  // for (var i = 0; i < gameScenes.length; i++) {
  //   console.log(gameScenes[i]);}
++currentScene;
  changeScene(currentScene)
}


//my functions :)
function changeScene(newScene){
  switch (newScene) {
      case 0:
      myTimer = 0;
      background('lightBlue');
      textFont(westernStyle, 50);
      text(gameScenes[newScene],550,50);
      image(img[newScene], 0, 0);
        break;
      case 1:
      myTimer = 0;
      background('lightBlue');
      textFont(westernStyle, 50);
      text(gameScenes[newScene],550,50);
      image(img[newScene], 0, 0);
        break;
      case 2:
      myTimer = 0;
      background('lightBlue');
      textFont(westernStyle, 50);
      text(gameScenes[newScene],550,50);
      image(img[newScene], 0, 0);
        break;
      case 3:
      myTimer = 0;
      background('lightBlue');
      textFont(westernStyle, 50);
      text(gameScenes[newScene],550,50);
      image(img[newScene], 0, 0);
        break;
      case 4:
      myTimer = 0;
      background('lightBlue');
      textFont(westernStyle, 50);
      text(gameScenes[newScene],650,50);
      image(img[newScene], 0, 0);

        break;
    default:

  }
}
