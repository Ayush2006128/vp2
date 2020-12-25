//Create variables here
var happyDog,dog,img1,img2,img3;
var database;
var foodS=20;
var feed,addFood;
var lastFed=hour();
var foodobj;
var milkBottle,mb2,mb3,mb4,mb5,mb6,mb7,mb8,mb9,mb10,mb11,mb12,mb13,mb14,mb15,mb16,mb17,mb18,mb19;
function preload()
{
  img1=loadImage("Dog.png");
  img2=loadImage("happydog.png");
  img3=loadImage("Milk.png")
	//load images here
}

function setup() {
  database=firebase.database();
  console.log(database);
  createCanvas(1000, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage(img1);
  dog.scale=0.3;
  
  milkBottle=new food()
  mb2=createSprite(900,180,20,20)
  mb2.addImage(img3)
  mb2.scale=0.09
  mb3=createSprite(900,220,20,20)
  mb3.addImage(img3)
  mb3.scale=0.09
  mb4=createSprite(900,260,20,20)
  mb4.addImage(img3)
  mb4.scale=0.09
  mb5=createSprite(900,290,20,20)
  mb5.addImage(img3)
  mb5.scale=0.09
  mb6=createSprite(900,320,20,20)
  mb6.addImage(img3)
  mb6.scale=0.09
  mb7=createSprite(900,360,20,20)
  mb7.addImage(img3)
  mb7.scale=0.09
  mb8=createSprite(900,390,20,20)
  mb8.addImage(img3)
  mb8.scale=0.09
  mb9=createSprite(900,420,20,20)
  mb9.addImage(img3)
  mb9.scale=0.09
  mb10=createSprite(900,460,20,20)
  mb10.addImage(img3)
  mb10.scale=0.09
  mb11=createSprite(800,190,20,20)
  mb11.addImage(img3)
  mb11.scale=0.09
  mb12=createSprite(800,220,20,20)
  mb12.addImage(img3)
  mb12.scale=0.09
  mb13=createSprite(800,260,20,20)
  mb13.addImage(img3)
  mb13.scale=0.09
  mb14=createSprite(800,280,20,20)
  mb14.addImage(img3)
  mb14.scale=0.09
  mb15=createSprite(800,300,20,20)
  mb15.addImage(img3)
  mb15.scale=0.09
  mb16=createSprite(800,340,20,20)
  mb16.addImage(img3)
  mb16.scale=0.09
  mb17=createSprite(800,380,20,20)
  mb17.addImage(img3)
  mb17.scale=0.09
  mb18=createSprite(800,400,20,20)
  mb18.addImage(img3)
  mb18.scale=0.09
  mb19=createSprite(800,440,20,20)
  mb19.addImage(img3)
  mb19.scale=0.09
  mb20=createSprite(800,480,20,20)
  mb20.addImage(img3)
  mb20.scale=0.09
 


  lastFed=database.ref()
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  fedTiime=database.ref('FeedTime');
  fedTiime.on("value",function(data){
    lastFed=data.val();
  }) ;
}


function draw() {  
background(0,140,25);
  drawSprites();
  //add styles here
  if(foodS<21){
    mb2.vissible=false;
  }
  else if(foodS<20){
    milkBottle.vissible=false;
  }
  else if(foodS<19){
    mb3.vissible=false;
  }
  else if(foodS<18){
    mb4.vissible=false;
  }
  else if(foodS<17){
    mb5.vissible=false;
  }
  else if(foodS<16){
    mb6.vissible=false;
  }
  else if(foodS<15){
    mb7.vissible=false;
  }
  else if(foodS<14){
    mb8.vissible=false;
  }
  else if(foodS<13){
    mb9.vissible=false;
  }
  else if(foodS<12){
    mb10.vissible=false;
  }
  else if(foodS<11){
    mb11.vissible=false;
  }
  else if(foodS<10){
    mb12.vissible=false;
  }
  else if(foodS<9){
    mb13.vissible=false;
  }
  else if(foodS<8){
    mb14.vissible=false;
  }
  else if(foodS<7){
    mb15.vissible=false;
  }
  else if(foodS<6){
    mb16.vissible=false;
  }
  else if(foodS<5){
    mb17.vissible=false;
  }
  else if(foodS<4){
    mb18.vissible=false;
  }
  else if(foodS<3){
    mb19.vissible=false;
  }
  else if(foodS<2){
    mb20.vissible=false;
  }

  if(foodS<0){
    foodS=0
  }
  milkBottle.display();
  
fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed: "+lastFed%12+"PM",350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
}else{
  text("Last Feed :"+lastFed +"AM",350,30);
}


fill(255);
text("food remaining"+foodS,150,100);

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('Food').update({
Food:x
  })
}
function feedDog(){
  
  dog.addImage(img2);
  foodS=foodS-1
  
  foodobj.updateFoodsStock(foodobj.getFoodsStock()-1);
  database.ref('/').update({
    Food:foodobj.getFoodsStock(),
    FeedTime:hour() 
    
  })
 
}
function addFoods(){
  
  foodS++;
  database.ref('/').update({
    Food:foodS
      })
}