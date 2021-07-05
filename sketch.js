const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var helicopter,helicopterIMG;
var package, packageIMG;
var box;
var ground;
var line1, line2, line3, line4;


function preload()
{
    helicopterIMG=loadImage("helicopter.png")
    packageIMG=loadImage("package.png");
}


function setup(){
	createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;

	package=createSprite(400,200,10,10);
    package.addImage(packageIMG);
    package.scale=0.2;

	helicopterSprite=createSprite(400, 200, 10,10);
    helicopterSprite.addImage(helicopterIMG);
    helicopterSprite.scale=0.6;


	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
    //World.add(world, packageBody);

	ground = new Ground(400,692,800,15);
    box = new Box(400,200,10,10);
	line1 = new Line(400,674.5,200,20)
	line2 = new Line(290,619.5,20,130);
	line3 = new Line(510,619.5,20,130);

}

function draw(){
    background(0);
    Engine.update(engine);
  
    drawSprites();

	

	ground.display();
    box.display();
	line1.display();
	line2.display();
	line3.display();
    box.pos.x = package.x;
    box.pos.y = package.y;
    

}

function keyPressed(){
    if(keyCode === DOWN_ARROW){
        Matter.Body.setStatic(packageBody,false);
    }

    if(keyCode === RIGHT_ARROW){
        helicopterSprite.x = helicopterSprite.x +20;
        Matter.Body.translate(packageBody, {x:20,y:0});
     }
     
      if(keyCode === LEFT_ARROW){
        helicopterSprite.x = helicopterSprite.x -20;
        Matter.Body.translate(packageBody, {x:-20,y:0});
     }
    
}
