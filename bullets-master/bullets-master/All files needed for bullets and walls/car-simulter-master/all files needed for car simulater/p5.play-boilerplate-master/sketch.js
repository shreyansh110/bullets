var car,bullet;
var wall;
var thickness,weight,speed;
var damage=0;




function setup() {
  createCanvas(1000,400);
 car=createSprite(950,200,50,50);
 wall=createSprite(10,200,10,400);
 bullet=createSprite(908,200,30,20)
speed=random(223,321);
thickness=random(22,83);
weight=random(30,52);
damage=0.5*weight*speed*speed/thickness*thickness*thickness;
 }

 function draw() {
  background(80,500,255);  
  bullet.velocityX=-8;

 if(bullet.x-wall.x<wall.width/2+bullet.width/2){
 bullet.velocityX=0;
 damage=0.5*weight*speed*speed/thickness*thickness*thickness;
 }
 console.log(damage);
if(damage<10&&bullet.x-wall.x<wall.width/2+bullet.width/2){
wall.shapeColor="green";
}

if(damage>10 && bullet.x-wall.x<wall.width/2+bullet.width/2){
  wall.shapeColor="red";
}


 drawSprites();
  
 }