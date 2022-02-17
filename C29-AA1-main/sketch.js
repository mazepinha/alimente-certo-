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
var background_img, food, rabbit, rabbit_img, button;

function preload(){
background_img=loadImage("background.png");
rabbit_img=loadImage("Rabbit-01.png");
food=loadImage("melon.png");




}

function setup(){
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  rabbit=createSprite(250,608,100,100);
  rabbit.addImage(rabbit_img);
  rabbit.scale=0.3

  button=createImg("cut_btn.png");
  button.position(220,30)
  button.size(50,50);
  button.mouseClicked(drop);

  var options_fruit={density:0.0001};
  ground = new Ground(200,701.26,600,20);
  rope = new Rope(6,{x:245,y:30});
  fruit = Bodies.circle(300,300,40,options_fruit);
  Matter.Composite.add(rope.body,fruit);

  fruit_conex= new Link(rope,fruit);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  imageMode(CENTER);
  
};

function draw(){

 image (background_img,250,350,500,700);
  ground.show();
  
  Engine.update(engine);
  
  rope.show();
  image (food,fruit.position.x,fruit.position.y,60,60);
 
   drawSprites();
};
//função para cortar a corda
function drop(){
rope.break();
fruit_conex.separar();
fruit_conex=null;

}
