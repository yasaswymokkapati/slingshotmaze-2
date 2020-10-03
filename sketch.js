var ground1, ground2, ground3;
var engine, world;
var slingshot;
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();

  world = engine.world

  ground = new Ground(400, 400, 800, 20)
  ground2 = new Ground(350, 250, 150, 10)
  ground3 = new Ground(600, 150, 150, 10)

  ball = new Ball(100, 300)

  slingshot = new Slingshot(ball.body, {x : 100, y : 300})


}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY})
}

function mouseReleased(){
  slingshot.fly()
}

function draw() {
  background(0);  
  ground.display();
  ground2.display();
  ground3.display();
  ball.display();
  slingshot.display();
}

