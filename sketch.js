
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var floor, ball, box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	floor = new Floor(200,380);
	ball = new Paper(80,360,10);
	
	box1 = new Dustbin(550,360,100,20);
	box2= new Dustbin(500,360,20,50);
	box = new Dustbin(600,360,20,50);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  floor.display();
box1.display();
box2.display();
box.display();
ball.display();
  drawSprites();

}
function keyPressed() {
	console.log("hi Vikshar");
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:11,y:-17});
  
	}
}
