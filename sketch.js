const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle1 , particle2 , particle3 , particle4 , particle5 , particle6 , particle7 , particle8 , particle9 , particle10 ;
var plinko1 , plinko2 , plinko3 ,plinko4 , plinko5 ,plinko6 ,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20,plinko21,plinko22,plinko23,plinko24; 
var division1 , division2 , division3 , division4 , division5 , division6 , division7 ;
var boundary1 , boundary2 ; 

function preload()
{
	
}

function setup() {
	createCanvas(480,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boundary1 = new Ground(-5,400,10,800);
	boundary2 = new Ground(480,400,10,800);

	particle1 = new Particles(100,50,15);
	particle2 = new Particles(140,50,15);
	particle3 = new Particles(160,50,15);
	particle4 = new Particles(180,50,15);
	particle5 = new Particles(200,50,15);
	particle6 = new Particles(220,50,15);
	particle7 = new Particles(240,50,15);
	particle8 = new Particles(260,50,15);
	particle9 = new Particles(280,50,15);
	particle10 = new Particles(300,50,15);
	

	//first line
	plinko1 = new Plinko(60,100,10);
	plinko2 = new Plinko(120,100,10);
	plinko3 = new Plinko(180,100,10);
	plinko4 = new Plinko(240,100,10);
	plinko5 = new Plinko(300,100,10);
	plinko6 = new Plinko(360,100,10);
	plinko7 = new Plinko(420,100,10);
	
	plinko8 = new Plinko(50,170,10);
	plinko9 = new Plinko(110,170, 10);
	plinko10 = new Plinko(175,170,10);
	plinko11 = new Plinko(245,170,10);
	plinko12 = new Plinko(320,170,10);
	plinko13 = new Plinko(390,170,10);
	plinko14 = new Plinko(460,170,10);

	plinko15 = new Plinko(60,240,10);
	plinko16 = new Plinko(120,240,10);
	plinko17 = new Plinko(180,240,10);
	plinko18 = new Plinko(240,240,10);
	plinko19 = new Plinko(300,240,10);
	plinko20 = new Plinko(360,240,10);
	plinko21 = new Plinko(420,240,10);

	ground = new Ground(240,740,480,10);

	division1 = new Division(80,620,10,225);
	division2 = new Division(160,620,10,225);
	division3 = new Division(240,620,10,225);
	division4 = new Division(320,620,10,225);
	division5 = new Division(400,620,10,225);
	division6 = new Division(475,620,10,225);
	division7 = new Division(0,620,10,225);

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  
	particle1.display();
	particle2.display();
	particle3.display();
	particle4.display();
	particle5.display();
	particle6.display();
	particle7.display();
	particle9.display();
	particle10.display();
	
	plinko1.display();
	plinko2.display();
	plinko3.display();
	plinko4.display();
	plinko5.display();
	plinko6.display();
	plinko7.display();
	plinko8.display();
	plinko9.display();
	plinko10.display();
	plinko11.display();
	plinko12.display();
	plinko13.display();
	plinko14.display();
	plinko15.display();
	plinko16.display();
	plinko17.display();
	plinko18.display();
	plinko19.display();
	plinko20.display();
	plinko21.display();

	division1.display();
	division2.display();
	division3.display();
	division4.display();
	division5.display();
	division6.display();
	division7.display();

	ground.display();

	//console.log(frameCount);

  drawSprites();
 
  spawnParticle();

}

function spawnParticle(){
	if (frameCount % 90 == 0) {
		particle1=new Particles(particle1.x	,50,15);	
		particle1.x=Math.round(random(50,450));
		
	}
}