var car,bullet;
var wall;
var thickness,weight,speed;
var damage=0;

function preload(){
bg=loadImage("background.jpg");
bullet1=loadImage("bulletpaint.png");





}


function setup() {
  createCanvas(1000,400);
 car=createSprite(950,200,50,50);
 wall=createSprite(10,200,10,400);
 bullet=createSprite(908,200,30,20)
 bullet.scale=0.2;
 bullet.addImage("back",bullet1)
speed=random(2,5);
thickness=random(3,6);
weight=random(2,5);

 }

 function draw() {
  background(225);  
  bullet.velocityX=-8;
wall.debug=true;
bullet.debug=true;
bullet.setCollider("rectangle",0,0,200,200);
console.log(wall.x);
console.log(bullet.x);
hascollided(bullet,wall);
 drawSprites();

 }

function hascollided(bullet,wall){
  
  damage=0.5*weight*speed*speed/thickness*thickness*thickness;

 
  if(bullet.x-wall.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/thickness*thickness*thickness;
    }
   
   if(damage<100&&bullet.x-wall.x<wall.width/2+bullet.width/2){
   wall.shapeColor="green";
   }
   
   if(damage>100 && bullet.x-wall.x<wall.width/2+bullet.width/2){
     wall.shapeColor="red";
   }
}








