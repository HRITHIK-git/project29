const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
  polygon1=loadImage("sprites/pol.png")
}
function setup() {
  createCanvas(1000,400);


  engine = Engine.create();
  world = engine.world;

   b1=new Block(805,50,30,40);
   b2=new Block(790,90,30,40);
   b3=new Block(820,90,30,40);
   b4=new Block(835,130,30,40);
   b5=new Block(805,130,30,40);
   b6=new Block(775,130,30,40);
   b7=new Block(850,170,30,40);
   b8=new Block(820,170,30,40);
   b9=new Block(790,170,30,40);
   b10=new Block(760,170,30,40);
   
   b11=new Block(390,235,30,40)
   b12=new Block(360,235,30,40)
   b13=new Block(420,235,30,40) 
   b14=new Block(330,235,30,40);
   b15=new Block(450,235,30,40)
   b16=new Block(480,235,30,40)
   b17=new Block(460,195,30,40)
   b18=new Block(429,195,30,40)
   b19=new Block(400,195,30,40)
   b20=new Block(370,195,30,40)
   b21=new Block(340,195,30,40)
   
   b22=new Block(445,155,30,40)
   b23=new Block(415,155,30,40)
   b24=new Block(385,155,30,40)
   b25=new Block(355,155,30,40)
   b26=new Block(370,115,30,40)
   b27=new Block(400,115,30,40)
   b28=new Block(430,115,30,40)
   b29=new Block(420,75,30,40)
   b30=new Block(390,75,30,40)
   b31=new Block(405,35,30,40)

   g=new Ground(400,265,200,10);
   g12=new Ground(806,190,200,10);
   
   
   polygon=Bodies.circle(50,100,15);
   World.add(world,polygon);
//console.log(polygon)
   sling=new SlingShot(polygon, {x:100,y:20})
   str="hello world!"

 console.log()

}

function draw() {
  background(242); 
  Engine.update(engine);
  g.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();

  sling.display();
  g12.display();
  imageMode(CENTER)
  image(polygon1,polygon.position.x,polygon.position.y,50,50)

  //bs.display();
  drawSprites();
}


function mouseDragged()
{
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  sling.fly();
}