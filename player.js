class Player{constructor(){
    this.x=50;
    this.y=displayHeight-280;
    this.width=50;
    this.height=50;
    


this.body=createSprite(this.x,this.y,this.width,this.height);
}
move(){
    if (keyWentDown("right")){
       this.body.velocityX=4;
       this.body.velocityY=0;

    }
    if(keyWentUp("right")){
        this.body.velocityX=0;
        this.body.velocityY=0;
    }
    
    
}
}