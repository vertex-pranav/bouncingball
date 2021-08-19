const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object,ground;




function setup() {
 var canvas= createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
object=Bodies.rectangle(200,300,50,50);
ground=Bodies.rectangle(200,400,200,20,ground_options);
World.add(world,object);
World.add(world,ground);
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
}