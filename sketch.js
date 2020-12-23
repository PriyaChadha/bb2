var vidElement;
var ground,player;
var obstacle,obstacleGroup;
gs="om"

function preload(){
bkg=loadImage("Pics/bkg.webp");
bk3=loadImage("Pics/backgroundimg1.jpeg");
box=loadImage("Pics/wood1.png");
}


function setup() { 
  createCanvas(displayWidth, displayHeight); 
  text("Click on the buttons below to"+ 
       " play/pause the video", 20, 20); 

  bkg2=createSprite(displayWidth/2, displayHeight/2,displayWidth, displayHeight)
  bkg2.addImage(bkg)
  bkg2.scale=0.25
  bkg2.visible=false;

  gate1=createSprite(displayWidth-7, displayHeight/2, 10,displayHeight )

  player=createSprite(250,displayHeight-70,20,40);
  player.shapeColor="red";
  player.visible=false;
  
  vidElement = createVideo("videoplayback.mp4"); 
  vidElement.position(0,100); 
  vidElement.size(displayWidth, displayHeight-150); 
  
  playBtn = createButton("Play Video"); 
  playBtn.position(30, 40); 
  playBtn.mouseClicked(playVideo); 
  
  pauseBtn = createButton("Pause Video"); 
  pauseBtn.position(150, 40); 
  pauseBtn.mouseClicked(pauseVideo); 

  nxtBtn = createButton("next"); 
  nxtBtn.position(250, 40); 
  nxtBtn.mouseClicked(nxtButton); 
  obstacleGroup=new Group()
} 
 
function playVideo() { 
  
  vidElement.play(); 
} 
  
function pauseVideo() { 
  vidElement.pause(); 
}
function nxtButton() { 
  vidElement.hide();
  gs="omg" ;
} 





function draw(){
  background("pink")

  //omg
 if(gs==="omg"){
  playBtn.hide();
  pauseBtn.hide();
  nxtBtn.hide();

  bkg2.visible=true;   
  player.visible=true;

    if(keyDown("right")){
      player.x+=5;
    }
    if(keyDown("left")){
      player.x-=5;
    }

    if(keyDown("space") && player.y>= displayHeight-100 ){
      player.velocityY=-15;
    }
    player.velocityY+=0.8;

  ground= createSprite(displayWidth/2, displayHeight-15, displayWidth,10);  
  player.collide(ground);

  spawnobstacles()
  
    if(player.isTouching(gate1)){
      bkg2.addImage(bk3);
      player.x=250
      gate1.destroy();
      
    }
    gate2=createSprite(displayWidth-7, displayHeight/2, 10,displayHeight)
    player.collide(gate2)
    
    

    if (player.isTouching(obstacleGroup)){
      gs="omg2"
    }

    //omg2
    if(gs==="omg2"){
      obstacleGroup.setVelocityXEach(0);
    }


    
 
  drawSprites();
  
 }
} 


function spawnobstacles()
{
  if (frameCount%60 === 0){
    
    obstacle = createSprite(displayWidth,displayHeight-75,50,50);
    obstacle.addImage(box);
    
    obstacle.setCollider("circle", 0, 0, 50);
    //obstacle.debug=true;

    obstacle.scale = 1 ;

    obstacle.velocityX = -4

    obstacle.lifetime = 400;

    obstacleGroup.add(obstacle);
    
  }
  
  }