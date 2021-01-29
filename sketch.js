const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, 
block9, block10, block11, block12, block13, block14, block15, block16;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;
var ball;
var slingshot;

var polygonIMG;

function preaload(){
   // polygonIMG = loadImage("polygon.png");
}

function setup(){
    createCanvas(900, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    
    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);
    block16 = new Block(390, 155, 30, 40);

    b1 = new Block(640,175,30,40);
    b2 = new Block(670,175,30,40);
    b3 = new Block(700,175,30,40);
    b4 = new Block(730,175,30,40);
    b5 = new Block(760,175,30,40);
    b6 = new Block(670,135,30,40);
    b7 = new Block(700,135,30,40);
    b8 = new Block(730,135,30,40);
    b9 = new Block(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot = new SlingShot(this.ball, {x:100, y: 200});
    

}

function draw(){
    background(66,44,44);
    textSize(20);
    fill("Yellow");
    text("Drag the stone and release it to launch it towards the block", 100, 30);

    ground.display();
    stand1.display();
    stand2.display();

    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("green");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();

    fill("skyblue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    fill("pink");
    b6.display();
    b7.display();
    b8.display();
    fill("green");
    b9.display();

    fill("gold");
   // imageMode(CENTER);
    //image(polygonIMG, ball.position.x, ball.position.y, 40, 40);
    circle(ball.position.x, ball.position.y, 20);

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}