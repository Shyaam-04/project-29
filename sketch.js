const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var ground,ball;
var stand1,stand2;
var slingShot;
var polygon,polygon_img;

function preload(){
    polygon_img = loadImage("polygon.png");
}
function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(900,400);
    ground = new Ground(0,390,1800,10);
    stand1 = new Ground(295,250,240,10);
    stand2 = new Ground(615,150,185,10);
    //level 1
    block1 = new Block(205,225,60,40);
    block2 = new Block(265,225,60,40);
    block3 = new Block(325,225,60,40);
    block4 = new Block(385,225,60,40);
    //level2
    block5 = new Block(235,185,60,40);
    block6 = new Block(295,185,60,40);
    block7 = new Block(355,185,60,40);
    //level3
    block8 = new Block(265,145,60,40);
    block9 = new Block(325,145,60,40);
    //level4
    block10 = new Block(295,105,60,40);
    //level 1 of stand 2
    block11 = new Block(555,125,60,40);
    block12 = new Block(615,125,60,40);
    block13 = new Block(675,125,60,40);
    //level 2 of stand 2
    block14 = new Block(585,85,60,40);
    block15 = new Block(645,85,60,40);
    //top level of stand2
    block16 = new Block(615,45,60,40);

    //creating polygon
    polygon = Bodies.circle(50,200,0);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});
}
function draw(){
    background("black");
    ground.display();
    stand1.display();
    stand2.display();
    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    
    fill("blue");
   block5.display();
   block6.display();
   block7.display();
   fill("pink");
   block8.display();
   block9.display();
   fill("maroon");
   block10.display();
   fill("purple");
   block11.display();
   block12.display();
   block13.display();
   fill("orange");
   block14.display();
   block15.display();
   fill("grey");
   block16.display();

   imageMode(CENTER)
   image(polygon_img,polygon.position.x,polygon.position.y,40,40);

   slingShot.display();
   
   
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
