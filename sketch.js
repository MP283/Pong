
// declaring variables
var bat,ball,com,top_e,bottom_e;

//gameStates
var gameStates = "start";

function setup() {
  createCanvas(400,400);

  //Edges
  edges = createEdgeSprites();

  //creating key elements
  bat = createSprite(200,390,60,10);

  com = createSprite(200,10,60,10);

  ball = createSprite(200,200,12,12);

  top_e = createSprite(200,-10,400,20);

  bottom_e = createSprite(200,410,400,20);
  
}

function draw() {
  background(0)

  if(keyDown("R")) {

    ball.x = 200;
    ball.y = 200;
    com.x = 200;
    bat.x = 200;

    ball.velocityX= 0;
    ball.velocityY = 0;
    //com.velocityX = 0;

    gameStates ="start"
  }

  // start screen
  if(gameStates === "start") {

    fill("WHITE")
    textSize(20)
    text("Press SPACE to play",80,130);
    text("Press P to pause",100,170);
    text("Press R to reset",130,250)

    if(keyWentDown("SPACE")) {
      gameStates = "play";

      ball.velocityX= -7;
      ball.velocityY = 6;
      //com.velocityX = -7;
    }
  }

  if(gameStates === "play") {

    if(keyWentDown("p")) {
      gameStates = "start";

      ball.velocityX= 0;
      ball.velocityY = 0;
      //com.velocityX = 0;
    }

    com.x = ball.x

    //movement to bat
    if(keyDown("RIGHT_ARROW")) {
      bat.x = bat.x + 7
    }
  
    if(keyDown("LEFT_ARROW")) {
      bat.x = bat.x - 7
    }
  }

  if(ball.isTouching(bottom_e)) {
    gameStates = "over"
    ball.velocityX = 0;
    ball.velocityY = 0;
  }

  if(gameStates==="over") {
    fill("WHITE")
    textSize(20)

  bat.collide(edges)
  com.bounceOff(edges)
  ball.bounceOff(edges)
  ball.bounceOff(bat)
  ball.bounceOff(com)

  drawSprites();

  push()
  strokeWeight(2);
  stroke(255);
  fill("WHITE")
  line(0,200,400,200)
  ellipse(ball.x,ball.y,15)
  pop()

  //Score codes
  textSize(20)
  fill("WHITE")
}