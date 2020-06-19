class Zombies{constructor(){
    this.x=random(-50,-550);
    this.y=displayHeight-280;
    this.width=50;
    this.height=50;
    


this.body=createSprite(this.x,this.y,this.width,this.height);
}
move(){
    if (keyDown("right")){
       this.body.velocityX=2;
       this.body.velocityY=0;

    }
    
    
}
}