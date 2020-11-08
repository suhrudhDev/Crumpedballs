
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-28, width,14);
	groundSprite.shapeColor=color(255);




	Engine.run(engine);

	ball1=new Ball(100,660,2)

	ground1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground1);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



