const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
var floor,div1,div2,div3,div4,div5,div6,div7,div8,div9,div10,div11;
var plinkos = []
var particles = []
var divisions = []
var divisionHeight = 300;


function setup() {
   createCanvas(800,400);
    //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
   
   floor = new Ground(400,390,800,10)
  //  div1 = new Ground(5,300,10,170)
  //  div2 = new Ground(85,300,10,170)
  //  div3 = new Ground(165,300,10,170)
  //  div4 = new Ground(245,300,10,170)
  //  div5 = new Ground(325,300,10,170)
  //  div6 = new Ground(405,300,10,170)
  //  div7 = new Ground(485,300,10,170)
  //  div8 = new Ground(565,300,10,170)
  //  div9 = new Ground(645,300,10,170)
  //  div10 = new Ground(725,300,10,170)
  //  div11 = new Ground(790,300,10,170)
 
}
function draw() {
  background(0,0,0); 
  floor.display(); 
  for(var k=0 ; k<=width ; k=k+80){
   divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  // div1.display();
  // div2.display();
  // div3.display();
  // div4.display();
  // div5.display();
  // div6.display();
  // div7.display();
  // div8.display();
  // div9.display();
  // div10.display();
  // div11.display();
  drawSprites();
  
}