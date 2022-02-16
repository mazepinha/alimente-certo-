const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit, fruit_conex;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  var options_fruit={density:0.0001};
  ground = new Ground(200,701.26,600,20);
  rope = new Rope(6,{x:245,y:30});
  fruit = Bodies.circle(300,300,15,options_fruit);
  Matter.Composite.add(rope.body,fruit);

  fruit_conex= new Link(rope,fruit);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  
};

function draw(){

  background(51);
  ground.show();
  
  Engine.update(engine);
  
  rope.show()
  ellipse (fruit.position.x,fruit.position.y,15,15);
 
   
}