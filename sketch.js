
const Engine=Matter.Engine
const World =Matter.World
const Bodies =Matter.Bodies
const Body = Matter.Body
let world,engine
  
var ball

var ground
function setup() {
  createCanvas(400,400);

  
engine=Engine.create()
world=engine.world

  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   


   var ground_options ={
     isStatic: true
   };
  
  
//crie o solo
ground=Bodies.rectangle(200,400,400,20,{isStatic:true})
World.add(world,ground);

//adicione ao mundo
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  rect(ground.position.x,ground.position.y,400,20)
  ellipse(ball.position.x,ball.position.y,20);
  //escreva uma função de retângulo para exibir o solo.
 


  
  
}

