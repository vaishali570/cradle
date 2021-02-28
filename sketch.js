
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.constraint

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(100,250,PI/2);

	bob2=new Bob(200,100,PI/2);

	bob3=new Bob(300,400,PI/2);

	bob4=new Bob(400,400,PI/2);

	bob5=new Bob(500,300,PI/2);

	roof=new Roof(700,150,200,20)

	var options= {
		bodyA:bob2.body,
		bodyB:roof.body,
		stiffness:0.04,
		length:10

	}
  var chain=constraint.create(options)
  World.add(world,chain)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display()
  bob2.display()
  bob3.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  constraintBob.display()

  strokeWeight(3);
  line(bird.body.position.x,bird.body.position.y,constraintBob.body.position.x,constraintBob.body.position.y)
  
  drawSprites();
 
}



