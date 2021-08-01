const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, upperGround;
var player;

var box1;
var lift1, lift2;
var dot1, dot2, dot3, dot4, dot5;
var door1;
var button1, button2;
var line1, line2, line3;
var laser1, laser2, laser3, laser4, laser5, laser6, laser7, laser8, laser9, laser10, laser11, laser12, laser13, laser14, laser15;

var a=true;
var b=true;

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  player = createSprite(80, windowHeight/1.29, 30, 60);

 ground = createSprite(windowWidth/2, windowHeight/1.2, windowWidth, 10);
 upperGround = createSprite(windowWidth/2, windowHeight/4.5, windowWidth, 10);
  

  line1 = createSprite(200, 180, 10, 60);
  line2 = createSprite(200, 450, 10, 200);
  line3 = createSprite(40, 240, 100, 10);

  door1 = createSprite(200, 300, 10, 180);
  door2 = createSprite(1200, 450, 10, 200)

  button1 = createSprite(20, 200, 5, 5);
  button2 = createSprite(1300, 250, 10, 10)
  
  lift1 = createSprite(150, 500, 70, 10);
  lift1.velocityY = -1;

  lift2 = createSprite(250, 500, 70, 10);
  lift2.velocityY = -1;

  dot1 = createSprite(150, 260, 1, 1);
  dot2 = createSprite(150, 500, 1, 1);

  dot3 = createSprite(250, 260, 1, 1);
  dot4 = createSprite(250, 500, 1, 1);

  dot5 = createSprite(-800000, 100, 10, 10);
  dot5.velocityY=1;

  box1 = createSprite(850, 360, 1060, 50);

  laser1 = createSprite(350, 145, 20, 5);
  laser2 = createSprite(430, 145, 20, 5);
  laser3 = createSprite(510, 145, 20, 5);
  laser4 = createSprite(590, 145, 20, 5);
  laser5 = createSprite(670, 145, 20, 5);
  laser6 = createSprite(750, 145, 20, 5);
  laser7 = createSprite(830, 145, 20, 5);
  laser8 = createSprite(900, 145, 20, 5);
  laser9 = createSprite(980, 145, 20, 5);
  laser10 = createSprite(1060, 145, 20, 5);
  laser11 = createSprite(1140, 145, 20, 5);
  laser12 = createSprite(1220, 145, 20, 5);


}   

function draw() {
  background(0,0,0); 
  Engine.update(engine);

 
  if(keyDown("space") && player.y>145 && (player.collide(ground) || player.collide(lift1) || player.collide(lift2) || player.collide(box1))) {
    player.velocityY = -12;
  }
 

  player.velocityY = player.velocityY + 0.8
  
  if(keyDown("left")){
    player.x = player.x-2.5;
  }
  if(keyDown("right")){
  player.x = player.x+2.5;
}

  level1();

  // camera.zoom=5;
  // camera.position.x=player.position.x+80;
  // camera.position.y=player.position.y;
  
  
  text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
}

function level1(){
 if(lift1.isTouching(dot1)){
    lift1.velocityY=1;
 }
 if(lift1.isTouching(dot2)){
   lift1.velocityY=-1;
 }
 if(lift2.isTouching(dot3)){
  lift2.velocityY=1;
 }
 if(lift2.isTouching(dot4)){
 lift2.velocityY=-1;
 }

 if(dot5.y>200){
   dot5.y=100;
 }
 if(dot5.y<100){
   dot5.y=200;
 }

 if(player.isTouching(button1)){
   door1.destroy();
 }
 if(player.isTouching(button2)){
  door2.destroy();
 }
  if(a==true){
    laser1.y=laser1.y+0.5;
    laser1.height=laser1.height+1
    laser2.y=laser2.y+0.5;
    laser2.height=laser2.height+1
    laser3.y=laser3.y+0.5;
    laser3.height=laser3.height+1
    laser4.y=laser4.y+0.5;
    laser4.height=laser4.height+1
    laser5.y=laser5.y+0.5;
    laser5.height=laser5.height+1
    laser6.y=laser6.y+0.5;
    laser6.height=laser6.height+1
    laser7.y=laser7.y+0.5;
    laser7.height=laser7.height+1
    laser8.y=laser8.y+0.5;
    laser8.height=laser8.height+1
    laser9.y=laser9.y+0.5;
    laser9.height=laser9.height+1
    laser10.y=laser10.y+0.5;
    laser10.height=laser10.height+1
    laser11.y=laser11.y+0.5;
    laser11.height=laser11.height+1
    laser12.y=laser12.y+0.5;
    laser12.height=laser12.height+1

  }if(laser1.height==200){
    a=false;
    dot5.velocityY=0;
    dot5.velocityY=-1;
    b=false;
  }

  if(b==false){
    laser1.y=laser1.y-0.5;
    laser1.height=laser1.height-1
    laser2.y=laser2.y-0.5;
    laser2.height=laser2.height-1
    laser3.y=laser3.y-0.5;
    laser3.height=laser3.height-1
    laser4.y=laser4.y-0.5;
    laser4.height=laser4.height-1
    laser5.y=laser5.y-0.5;
    laser5.height=laser5.height-1
    laser6.y=laser6.y-0.5;
    laser6.height=laser6.height-1
    laser7.y=laser7.y-0.5;
    laser7.height=laser7.height-1
    laser8.y=laser8.y-0.5;
    laser8.height=laser8.height-1
    laser9.y=laser9.y-0.5;
    laser9.height=laser9.height-1
    laser10.y=laser10.y-0.5;
    laser10.height=laser10.height-1
    laser11.y=laser11.y-0.5;
    laser11.height=laser11.height-1
    laser12.y=laser12.y-0.5;
    laser12.height=laser12.height-1

  }if(laser1.height==1){
    b=true;
    a=true;
    dot5.velocityY=1;
  }

 player.collide(ground);
 player.collide(upperGround);
 player.collide(lift1);
 player.collide(line1);
 player.collide(line2);
 player.collide(line3);
 player.collide(lift2);
 player.collide(box1);
 
 if(player.isTouching(laser1)){
  player.x=80;
  player.y= windowHeight/1.29;
 }
 if(player.isTouching(laser2)){
  player.x=80;
  player.y= windowHeight/1.29;
 }
 if(player.isTouching(laser3)){
  player.x=80;
  player.y= windowHeight/1.29;
 }
 if(player.isTouching(laser4)){
  player.x=80;
  player.y= windowHeight/1.29;
 }
 if(player.isTouching(laser5)){
  player.x=80;
  player.y= windowHeight/1.29;
 }
 if(player.isTouching(laser6)){
  player.x=80;
  player.y= windowHeight/1.29;
 }
 if(player.isTouching(laser7)){
  player.x=80;
  player.y= windowHeight/1.29;
 }
 if(player.isTouching(laser8)){
  player.x=80;
  player.y= windowHeight/1.29;
 }
 if(player.isTouching(laser9)){
  player.x=80;
  player.y= windowHeight/1.29;
 }
 if(player.isTouching(laser10)){
  player.x=80;
  player.y= windowHeight/1.29;
 }
 
 
 
}