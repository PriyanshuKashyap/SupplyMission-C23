var helicopterIMG, helicopterSprite, packageSprite,packageIMG, redBodySpr1, redBodySpr2, redBodySpr3;
var packageBody,ground, redBody1, redBody2, redBody3;
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	//Red Body Sprites 

	redBodySpr1 = createSprite(width/2 - 10, height - 10, 20, 100);
	redBodySpr2 = createSprite(width/2 + 10, height - 10, 20, 100);
	redBodySpr3 = createSprite(width/2 - 10, height, 200, 20);

	redBodySpr1.shapeColor = "red";
	redBodySpr2.shapeColor = "red";
	redBodySpr3.shapeColor = "red";

	//redBodySpr1.debug = true;
	//redBodySpr2.debug = true;
	//redBodySpr3.debug = true;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	//packageBody.position.x = helicopterSprite.x;
	//packageBody.position.y = helicopterSprite.y;
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	 //Red rectangular bodies
	redBody1 = Bodies.rectangle(width/2 - 95, height - 90, 20, 100, {isStatic: true});
	redBody2 = Bodies.rectangle(width/2 + 85, height - 90, 20, 100, {isStatic: true});
	redBody3 = Bodies.rectangle(width/2 - 5, height - 50, 200, 20, {isStatic: true});
	

	World.add(world, redBody1);
	World.add(world, redBody2);
	World.add(world, redBody3);

	//Body.setStatic(packageBody, true);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 
  redBodySpr1.x = redBody1.position.x;
  redBodySpr1.y = redBody1.position.y;
  redBodySpr2.x = redBody2.position.x;
  redBodySpr2.y = redBody2.position.y;
  redBodySpr3.x = redBody3.position.x;
  redBodySpr3.y = redBody3.position.y;
  keyPressed();
  Engine.update(engine);
  //console.log(packageBody.isStatic);
  //console.log(packageBody.position.x);
  //console.log(packageBody.position.y);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody, false);
    
  }
}



