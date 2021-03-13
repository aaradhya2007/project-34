const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var bg;
var monster,monsterImg;
function preload() {
//preload the images here
bg=loadImage("images/bg.png")
monsterImg=loadImage("images/m1.png")
}

function setup() {
  createCanvas(1200,500);

engine=Engine.create();
world=engine.world;

ground=new Ground(400,400,1000,10)
superhero=new Superhero(200,200,300,200)
box1=new Box(400,310,50,50)
box2=new Box(400,310,50,50)
box3=new Box(400,310,50,50)
box4=new Box(400,310,50,50)
box5=new Box(400,310,50,50)
box6=new Box(450,310,50,50)
box7=new Box(450,310,50,50)
box8=new Box(450,310,50,50)
box9=new Box(450,310,50,50)
box10=new Box(450,310,50,50)

monster=new Monster(600,210,200,200)
}

function draw() {
  background("red");
  Engine.update(engine)


superhero.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
ground.display()
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
monster.display();


}

