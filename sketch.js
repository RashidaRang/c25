
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject , paperImage;
var ground;
var dustbin1 , dustbin2 , dustbin3;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;
	paperObject = new Paper(200,580,50);
    ground = new Ground(400,690,800,20);
	//Create the Bodies Here
	dustbin1 = new Dustbin(700,580,200, 200);
	
	console.log(paperObject);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  paperObject.display();
  ground.display();
 dustbin1.display();




  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:250,y:-50});
	}

}


