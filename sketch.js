var ground1, ground2, ground3;
var engine, world;
var slingshot;
var ball;
var box1, box3, box5, box7, box9, box11, box13, box15, box17, box19, box21, box23, box25, box27;
var box2, box4, box6, box8, box10, box12, box14, box16, box18, box20, box22, box24, box26, box28, box30;

var bo1, bo3, bo5, bo7, bo9, bo11, bo13, bo15, bo17, bo19, bo21, bo23, bo25, bo27;
var bo2, bo4, bo6, bo8, bo10, bo12, bo14, bo16, bo18, bo20, bo22, bo24, bo26, bo28;

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

  box1 = new BoxR(290, 240)
  box2 = new BoxW(310, 240)
  box3 = new BoxR(330, 240)
  box4 = new BoxW(350, 240)
  box5 = new BoxR(370, 240)
  box6 = new BoxW(390, 240)
  box7 = new BoxR(410, 240)
  box8 = new BoxW(300, 210)
  box9 = new BoxR(320, 210)
  box10 = new BoxW(340, 210)
  box11 = new BoxR(360, 210)
  box12 = new BoxW(380, 210)
  box13 = new BoxR(400, 210)
  box14 = new BoxW(310, 180)
  box15 = new BoxR(330, 180)
  box16 = new BoxW(350, 180)
  box17 = new BoxR(370, 180)
  box18 = new BoxW(390, 180)
  box19 = new BoxR(320, 150)
  box20 = new BoxW(340, 150)
  box21 = new BoxR(360, 150)
  box22 = new BoxW(380, 150)
  box23 = new BoxR(330, 120)
  box24 = new BoxW(350, 120)
  box25 = new BoxR(370, 120)
  box26 = new BoxW(340, 90)
  box27 = new BoxR(360, 90)
  box28 = new BoxW(350, 60)

  bo1 = new BoxR(540, 140)
  bo2 = new BoxW(560, 140)
  bo3 = new BoxR(580, 140)
  bo4 = new BoxW(600, 140)
  bo5 = new BoxR(620, 140)
  bo6 = new BoxW(640, 140)
  bo7 = new BoxR(660, 140)
  bo8 = new BoxW(550, 110)
  bo9 = new BoxR(570, 110)
  bo10 = new BoxW(590, 110)
  bo11 = new BoxR(610, 110)
  bo12 = new BoxW(630, 110)
  bo13 = new BoxR(650, 110)
  bo14 = new BoxW(560, 90)
  bo15 = new BoxR(580, 90)
  bo16 = new BoxW(600, 90)
  bo17 = new BoxR(620, 90)
  bo18 = new BoxW(640, 90)
  bo19 = new BoxR(570, 60)
  bo20 = new BoxW(590, 60)
  bo21 = new BoxR(610, 60)
  bo22 = new BoxW(620, 60)
  bo23 = new BoxR(580, 30)
  bo24 = new BoxW(600, 30)
  bo25 = new BoxR(620, 30)
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x : mouseX, y : mouseY})
}

function mouseReleased(){
  slingshot.fly()
}

function draw() {
  background(255);  

  Engine.update(engine);

  ground.display();
  ground2.display();
  ground3.display();

  ball.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  bo1.display();
  bo2.display();
  bo3.display();
  bo4.display();
  bo5.display();
  bo6.display();
  bo7.display();
  bo8.display();
  bo9.display();
  bo10.display();
  bo11.display();
  bo12.display();
  bo13.display();
  bo14.display();
  bo15.display();
  bo16.display();
  bo17.display();
  bo18.display();
  bo19.display();
  bo20.display();
  bo21.display();
  bo22.display();
  bo23.display();
  bo24.display();
  bo25.display();


  slingshot.display();
}

