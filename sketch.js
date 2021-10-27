const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShots;

function preload() {
    backgroundImg = loadImage("sprites/bg.jpg");
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

    box1 = new Box(650,320,70,70);
    box2 = new Box(870,320,70,70);
    pig1 = new Pig(760, 350);
    //log1 = new Log(810,260,500,200);

    box3 = new Box(650,240,70,70);
    box4 = new Box(870,240,70,70);
    pig3 = new Pig(760, 220);

   // log3 =  new Log(810,180,5500, 200);

    box5 = new Box(760,160,70,70);
 //   log4 = new Log(760,120,150, 200);
  //  log5 = new Log(870,120,150, 200);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingShots = new slingShot(bird.body,{x:350,y:250});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
   // log1.display();

    box3.display();
    box4.display();
    pig3.display();
   // log3.display();

    box5.display();
  //  log4.display();
  //  log5.display();

    bird.display();
   // platform.display();
    //log6.display();
    //slingShots.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShots.fly();
}