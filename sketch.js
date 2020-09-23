var car , wall;
var speed,weight;
var deformation;

var car2 , wall2;
var speed2,weight2;
var deformation1;

var car3 , wall3;
var speed3,weight3;
var deformation2;

var car4 , wall4;
var speed4,weight4;
var defromation3;
var boundary;

function setup(){
  createCanvas(1600,1600);
  
// this code is for the sprite 1
            car = createSprite(50,200,50,50);
            wall = createSprite(1500,200,60,200);
            speed = Math.round(random(55,90));
            weight = Math.round(random(40,1500));
            car.velocityX = speed;

//this code is for sprite 2
            car2 = createSprite(50,600,50,50);
            wall2 = createSprite(1500,600,60,200);
            speed2 = Math.round(random(55,90));
            weight2 = Math.round(random(40,1500));
            car2.velocityX = speed2;

//this code is for sprite3
            car3 = createSprite(50,1000,50,50);
            wall3 = createSprite(1500,1000,60,200);
            speed3 = Math.round(random(55,90));
            weight3= Math.round(random(40,1500));
            car3.velocityX = speed3;

//this code is for sprite4
            car4 = createSprite(50,1400,50,50);
            wall4 = createSprite(1500,1400,60,200);
            speed4 = Math.round(random(55,90));
            weight4 = Math.round(random(40,1500));
            car4.velocityX = speed4;
    
}
function draw(){
    background("black");

//this code is for car 1
            if(wall.x - car.x < car.width/2 + wall.width/2){
                
                car.velocityX = 0;
                deformation = 0.5 * weight * speed * speed/22509;
                if(deformation>180){
                    car.shapeColor = color(225,0,0);
                    

                }
                if(deformation<180 && deformation>100 ){
                    car.shapeColor = color(230,230,0);
                }
                if(deformation<100){
                    car.shapeColor = color(0,255,0);
                }
            }
//this code is for car 2
            if(wall2.x - car2.x < car2.width/2 + wall2.width/2){
                
                car2.velocityX = 0;
                deformation1 = 0.5 * weight2 * speed2 * speed2/22509;
                if(deformation1>180){
                    car2.shapeColor = color(225,0,0);
                }
                if(deformation1<180 && deformation>100 ){
                    car2.shapeColor = color(230,230,0);
                }
                if(deformation1<100){
                    car2.shapeColor = color(0,255,0);
                }
            }
//this is code for car 3
            if(wall3.x - car3.x < car3.width/2 + wall3.width/2){
                
                car3.velocityX = 0;
                deformation2 = 0.5 * weight3 * speed3* speed3/22509;
                if(deformation2>180){
                    car3.shapeColor = color(225,0,0);
                }
                if(deformation2<180 && deformation2>100 ){
                    car3.shapeColor = color(230,230,0);
                }
                if(deformation2<100){
                    car3.shapeColor = color(0,255,0);
                }
            }
//this code is for car 4
            if(wall4.x - car4.x < car4.width/2 + wall4.width/2){
                
                car4.velocityX = 0;
                deformation3 = 0.5 * weight4 * speed4 * speed4/22509;
                if(deformation3>180){
                    car4.shapeColor = color(225,0,0);
                }
                if(deformation3<180 && deformation3>100 ){
                    car4.shapeColor = color(230,230,0);
                }
                if(deformation3<100){
                    car4.shapeColor = color(0,255,0);
                }
            }

    for(var i = 0 ; i < 1600 ; i = i+400){
    bounadry = createSprite(800,i,1600,10);
  
    }
    
    

    drawSprites();
    

}