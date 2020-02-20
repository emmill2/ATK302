var gameScenes = ["titleMenu", "mainMenu", "gameplay"]
var currentScene = 0;

function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight)
  background('lightBlue')
  changeScene(currentScene)
}

function draw() {
  // put drawing code here
}

function mousePressed(){
  // for (var i = 0; i < gameScenes.length; i++) {
  //   console.log(gameScenes[i]);}
  console.log(gameScenes[++currentScene]);
  changeScene(currentScene)
}


//my functions :)
function changeScene(newScene){
  switch (newScene) {
      case 0:
      background('lightBlue');
      text(gameScenes[newScene],50,50);
        break;
      case 1:
      background('lightBlue');
      text(gameScenes[newScene],50,50);
        break;
      case 2:
      background('lightBlue');
      text(gameScenes[newScene],50,50);
      currentScene = -1;
        break;
    default:

  }
}
