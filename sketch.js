const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Bob1, Bob2, Bob3, Bob4, Bob5;
var rope1, rope2, rope3, rope4, rope5;

var ropeLength;
var ropeStiffness;

function setup(){
    createCanvas(800,450);
    engine = Engine.create();
    world = engine.world;

    engine.world.gravity.y = 1;

    ropeLength = 300;
    ropeStiffness = 0;

    Bob1 = new Bob(260, 200, 35);
    rope1 = new Rope(Bob1.body, {x: 260, y: 80}, ropeLength, ropeStiffness);

    Bob2 = new Bob(330, 200, 35);
    rope2 = new Rope(Bob2.body, {x: 330, y: 80}, ropeLength, ropeStiffness);

    Bob3 = new Bob(400, 200, 35);
    rope3 = new Rope(Bob3.body, {x: 400, y: 80}, ropeLength, ropeStiffness);

    Bob4 = new Bob(470, 200, 35);
    rope4 = new Rope(Bob4.body, {x: 470, y: 80}, ropeLength, ropeStiffness);

    Bob5 = new Bob(590, 100, 35);
    rope5 = new Rope(Bob5.body, {x: 540, y: 80}, ropeLength, ropeStiffness);
    //slingshot = new Slingshot(bird.body, {x: 120, y: 180}, 50, 0.01);
}

function draw() {
    background("black");
    Engine.update(engine);

    rope1.display();
    Bob1.display();

    rope2.display();
    Bob2.display();

    rope3.display();
    Bob3.display();

    rope4.display();
    Bob4.display();

    rope5.display();
    Bob5.display();

    rectMode(CENTER);
    fill(200, 200, 200);
    stroke("red");
    rect(400, 80, 375, 50);
}