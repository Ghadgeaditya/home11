var path,pathImg;
var boy,boyImg;
var invisibleGround1,invisibleGround2;

function preload(){
  //pre-load images
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(450,500);
  //create sprites here
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

boy=createSprite(50,400);
boy.addAnimation("Img",boyImg);
boy.scale=0.1;


invisibleGround1 = createSprite(20,300,20,400);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(440,300,20,400);
  invisibleGround2.visible = false;
}

function draw() {
  background(0);
  //code to reset the background.
  if(path.y>400){
    path.y=height/2;
  }

  if(keyDown("left")){
    boy.x=boy.x-5;
  }

  if(keyDown("right")){
    boy.x=boy.x+5;
  }

  boy.collide(invisibleGround1);
  boy.collide(invisibleGround2);
drawSprites();
}
