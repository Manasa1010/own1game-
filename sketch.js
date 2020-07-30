
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 700);


	engine = Engine.create();
	world = engine.world;
	floor =new Floor(670,690,1400,10);
	rect1=new Rect(300,635,10,100);
	rect2=new Rect(370,635,10,100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  floor.display();
  rect1.display();
  rect2.display();
  drawSprites();
 
}



