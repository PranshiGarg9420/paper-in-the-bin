
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject, go,po,so,ro,mo,to,co,no,lo; 
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	go=new ground(width/2,50,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	po=new paper(300,450,40);
	so=new paper(400,450,40);
	ro=new paper(500,450,40);
	mo=new paper(100,450,40);
	to=new paper(150,450,40);
	co=new paper(250,450,40);
	no=new paper(350,450,40);
	lo=new paper(450,450,40);
	groundObject=new ground(width/2,670,width,20);
	
	//Create a Ground
	

	

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

    
   
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  go.display();
  po.display();
  ro.display();
  mo.display();
  so.display();
  to.display();
  co.display();
  no.display();
  lo.display();
  
  drawSprites();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		Matter.Body.applyForce(po.body,po.body.position,{x:85,y:-85});
		Matter.Body.applyForce(so.body,so.body.position,{x:80,y:-80});
		Matter.Body.applyForce(ro.body,ro.body.position,{x:65,y:-65});
		Matter.Body.applyForce(mo.body,mo.body.position,{x:95,y:-95});
		Matter.Body.applyForce(to.body,to.body.position,{x:85,y:-85});
		Matter.Body.applyForce(co.body,co.body.position,{x:80,y:-80});
		Matter.Body.applyForce(no.body,no.body.position,{x:70,y:-70});
		Matter.Body.applyForce(lo.body,lo.body.position,{x:85,y:-85});
	  }
	  
	  
	  
	  
	  
}






