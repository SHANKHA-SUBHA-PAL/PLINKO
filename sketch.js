const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const circle = Matter.Bodies.circle;

var engine,world

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  
  ground = new Ground(width/2,795,width,10)

}

function draw() {
  background(0);  

  
    
ground.display();


}
for(var k = 0; k <= 480; k = k+80){

  divisions.push(new Division(k,800-divisionHeight/2,10,divisionHeight));
  
  }
  for(var k = 0;k < divisions.lenght;k++){
    
    divisions[k].display();
    
    }

