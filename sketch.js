const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var bodies;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world

  var bodies_options ={
    isStatic: true
  }
 
  bodies= Bodies.rectangle(200,100,50,50,bodies_options);
  World.add(world,bodies);

  console.log(bodies.position.x)
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(bodies.position.x,bodies.position.y,50,50)  
 
}