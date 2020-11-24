

var minHeight = 645;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var dustbin1,dustbin2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 300, 30,30);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


dustbin1 = createSprite(358,651,160,14,{isStatic:true})
dustbin1.shapeColor=color(111)

dustbin2= createSprite(448,645,18,54)
dustbin2.shapeColor=color(111)

dustbin3=createSprite(287,639,18,54)



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:false});
	World.add(world, packageBody);
	
ground2 = Bodies.rectangle(width/2, 648, width, 10 , {isStatic:false} );
World.add(world, ground2);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 656, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 //spackageSprite.collide(ground2);
 gravity()
 Engine.update(engine);
 
  drawSprites();








 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 //  packageSprite.x=packageBody.position.x;
   //packageSprite.y=packageBody.position.y;
   
	
	
	// Look at the hints in the document and understand how to make the package body fall only on
    
  }
}

function gravity(){
if(packageBody >= minHeight){
	packageBody = packageBody+0
}
	
}








