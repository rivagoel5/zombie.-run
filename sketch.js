var player,ground,playerimage,groundimage,bg,ground2;
var zombie,zombie2,zombie3,zombie4,zombie5,zombie6,zombieimage1,zombieimage2,zombieimage3,zombieimage4,zombieimage5,zombieimage6;
var zombiegroup;

function preload(){
  //loading all the animations
  playerimage=loadAnimation("IMAGES/player.gif");
  groundimage=loadImage("IMAGES/ground.png")
  bg=loadImage("IMAGES/bg.jpg")
  zombieimage1=loadAnimation("IMAGES/zombie.gif");
  zombieimage2=loadAnimation("IMAGES/zombie2.gif");
  zombieimage3=loadAnimation("IMAGES/zombie3.gif");
  zombieimage4=loadAnimation("IMAGES/zombie4.gif");
  zombieimage5=loadAnimation("IMAGES/zombie5.gif"); 
  zombieimage6=loadAnimation("IMAGES/zombie6.gif");
}

function setup() {

  createCanvas(displayWidth-90,displayHeight);
  
 //setting all the properties for background background
 bg1=createSprite(displayWidth/2,displayHeight/3,2*displayWidth,displayHeight);
 bg1.addAnimation("background",bg);
 bg1.scale=1.4;
 bg1.velocityX=-2;

 //new player
 player=new Player();

 //creating the ground and invisible ground
 ground=createSprite(displayWidth/2,displayHeight-150,displayWidth-50,70);
 ground2=createSprite(displayWidth/2,displayHeight-130,displayWidth-50,70);
 ground2.visible=false;

 // new zombie
 zombie=new Zombies();
 zombie2=new Zombies();
 zombie3=new Zombies();
 zombie4=new Zombies();
 zombie5=new Zombies();
 zombie6=new Zombies();


zombiegroup=new Group();
zombiegroup.add(zombie.body);
zombiegroup.add(zombie2.body);
zombiegroup.add(zombie3.body);
zombiegroup.add(zombie4.body);
zombiegroup.add(zombie5.body);
zombiegroup.add(zombie6.body);
}


function draw() {
  background(255,255,255);  
  
  // setting all the player properties
  player.move();
  player.body.addAnimation("playerAnimation",playerimage);
  player.body.scale=0.5;
  player.body.collide(ground2);
  player.body.setCollider("rectangle",30,10,150,400);
  player.body.debug=true;
  //making the background move
  if(bg1.x<0){
    bg1.x=bg1.width/3;
  }
  console.log(bg1.x);

  //setting the properties for all the zombies
  zombie.move();
  zombie.body.addAnimation("zombieAnimation",zombieimage1);
  zombie.body.scale=0.5;
  zombie.body.collide(ground2);

  zombie2.move();
  zombie2.body.addAnimation("zombieAnimation2",zombieimage2);
  zombie2.body.scale=0.5;
  zombie2.body.collide(ground2);

  zombie3.move();
  zombie3.body.addAnimation("zombieAnimation3",zombieimage3);
  zombie3.body.scale=0.5;
  zombie3.body.collide(ground2);

  zombie4.move();
  zombie4.body.addAnimation("zombieAnimation",zombieimage4);
  zombie4.body.scale=0.5;
  zombie4.body.collide(ground2);

  zombie5.move();
  zombie5.body.addAnimation("zombieAnimation",zombieimage5);
  zombie5.body.scale=0.5;
  zombie5.body.collide(ground2);

  zombie6.move();
  zombie6.body.addAnimation("zombieAnimation",zombieimage6);
  zombie6.body.scale=0.5;
  zombie6.body.collide(ground2);

  //player.body.debug=true;
  //player.body.setCollider("rectangle",0,0,100,100)

  if (zombiegroup.isTouching(player.body)){
    player.body.destroy();
  }

  drawSprites();
  
}