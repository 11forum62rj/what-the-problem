var dog; 
var happyDog;
var database;
var foodS;
var foodStock;

function preload(){
  dogImg = loadImage("Dog.png");
  dogHappy = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);


      database = firebase.database();
   Dog = createSprite(250,300,10,10);
   Dog.addImage("running",dogImg);
   Dog.scale = 0.2;

   foodStock = database.ref('Food');
   foodStock.on("value",readStock);


}


function draw() {  
  background(46,139,87);

  if(KeyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
    
  }
   

  

  drawSprites();
 }

 function readStock(data){
   foodS = data.val();
 }

 function writeStock(x){
   if(x<=0){
      x=0
   }else{
     x=x-1;
   }
   database.ref('/').update({
     food:x
   })
 }

 




