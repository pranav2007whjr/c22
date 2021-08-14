const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var ground,ball


function setup() {
  var canvas=createCanvas(400,400)
  engine=Engine.create()
  world=engine.world
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,options)
  World.add(world,ground)
  ball = Bodies.circle(200,100,400,50,Options)
  World.add(myWorld,ball)
}

function draw() {
background("black");  
Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)
}