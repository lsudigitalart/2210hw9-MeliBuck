var rec1 =100;
var rec2 =60;
var rec3 =0;
var rec4 =10;


function setup() {
  createCanvas(900,600);

  //backdrops
  backdrop1 = new BackDrop(15,50);
  backdrop2 = new BackDrop(20,100);
  backdrop3 = new BackDrop(10,150);
  backdrop4 = new BackDrop(5,200);
  backdrop5 = new BackDrop(10,250);
  backdrop6 = new BackDrop(15,300);
  backdrop7 = new BackDrop(20,350);
  backdrop8 = new BackDrop(5,400);
  backdrop9 = new BackDrop(20,450);
  backdrop10 = new BackDrop(10,500);
  backdrop11 = new BackDrop(15,550);
  backdrop12 = new BackDrop(20,600);
  backdrop13 = new BackDrop(10,650);
  backdrop14 = new BackDrop(5,700);
  backdrop15 = new BackDrop(20,750);
  backdrop16 = new BackDrop(15,800);
  backdrop17 = new BackDrop(5,850);
  backdrop18 = new BackDrop(10,900);
  backdrop19 = new BackDrop(5,0);

  //middrops
  middrop1 = new MidDrop(10,20);
  middrop2 = new MidDrop(20,100);
  middrop3 = new MidDrop(5,180);
  middrop4 = new MidDrop(10,260);
  middrop5 = new MidDrop(20,340);
  middrop6 = new MidDrop(30,420);
  middrop7 = new MidDrop(10,500);
  middrop8 = new MidDrop(20,580);
  middrop9 = new MidDrop(30,660);
  middrop10 = new MidDrop(10,740);
  middrop11 = new MidDrop(20,820);
  middrop12 = new MidDrop(30,900);

  //drops
  drop1 = new Drop(10,25);
  drop2 = new Drop(22,130);
  drop3 = new Drop(20,250);
  drop4 = new Drop(25,330);
  drop5 = new Drop(30,430);
  drop6 = new Drop(20,540);
  drop7 = new Drop(30,620);
  drop8 = new Drop(15,800);
  drop9 = new Drop(30,900);

}

function draw(){
  background(15, 0, 50);

  fill(50,45,70,150);
  rect(rec1,0,700,20,600);
  rec1 = rec1-1

  fill(20,20,30,100);
  rect(rec2,20,800,50,600);
  rec2 = rec2-1

  fill(15,30,100,200);
  rect(rec4,50,800,90,600);
  rec4 = rec4-1

  fill(15,5,40,200);
  rect(rec3,30,900,120,600);
  rec3 = rec3-1

  //backdrops
  backdrop1.display();
  backdrop1.move();

  backdrop2.display();
  backdrop2.move();

  backdrop3.display();
  backdrop3.move();

  backdrop4.display();
  backdrop4.move();

  backdrop5.display();
  backdrop5.move();

  backdrop6.display();
  backdrop6.move();

  backdrop7.display();
  backdrop7.move();

  backdrop8.display();
  backdrop8.move();

  backdrop9.display();
  backdrop9.move();

  backdrop10.display();
  backdrop10.move();

  backdrop11.display();
  backdrop11.move();

  backdrop12.display();
  backdrop12.move();

  backdrop13.display();
  backdrop13.move();

  backdrop14.display();
  backdrop14.move();

  backdrop15.display();
  backdrop15.move();

  backdrop16.display();
  backdrop16.move();

  backdrop17.display();
  backdrop17.move();

  backdrop18.display();
  backdrop18.move();

  backdrop19.display();
  backdrop19.move();

  //middrops
  middrop1.display();
  middrop1.move();

  middrop2.display();
  middrop2.move();

  middrop3.display();
  middrop3.move();

  middrop4.display();
  middrop4.move();

  middrop5.display();
  middrop5.move();

  middrop6.display();
  middrop6.move();

  middrop7.display();
  middrop7.move();

  middrop8.display();
  middrop8.move();

  middrop9.display();
  middrop9.move();

  middrop10.display();
  middrop10.move();

  middrop11.display();
  middrop11.move();

  middrop12.display();
  middrop12.move();

  //drops
  drop1.display();
  drop1.move();

  drop2.display();
  drop2.move();

  drop3.display();
  drop3.move();

  drop4.display();
  drop4.move();

  drop5.display();
  drop5.move();

  drop6.display();
  drop6.move();

  drop7.display();
  drop7.move();

  drop8.display();
  drop8.move();

  drop9.display();
  drop9.move();

}

function ConDrop(tempSpeed, tempXPosition) {
  this.xPosition = tempXPosition;
  this.ewidth = (5,10);
  this.speed = tempSpeed;
  this.eheight = (15,20);
  this.fillColor = color(random(15,55), random(15,55), 105);
  noStroke();
  var eY = 0;

  this.display = function(){
    fill(this.fillColor);
    ellipse(this.xPosition, eY, this.ewidth, this.eheight);
  };

  this.move = function (){
    eY = eY + this.speed;
    if (eY > height-80){
      this.fillColor = color(15, 25, 75);
    }
  };
}


function BackDrop(tempSpeed, tempXPosition) {
  this.xPosition = tempXPosition;
  this.ewidth = (5,10);
  this.speed = tempSpeed;
  this.eheight = (15,20);
  this.fillColor = color(random(15,55), random(15,55), 105);
  noStroke();
  var eY = 0;

  this.display = function(){
    fill(this.fillColor);
    ellipse(this.xPosition, eY, this.ewidth, this.eheight);
  };

  this.move = function (){
    eY = eY + this.speed;
    if (eY > height-80){
      this.ewidth = 40;
      this.eheight = 10;
      this.speed = 0;
      this.fillColor = color(random(15,55), random(15,55), 105, 100);
    }
  };
}

function MidDrop(tempSpeed, tempXPosition) {
  this.xPosition = tempXPosition;
  this.ewidth = 10;
  this.speed = tempSpeed;
  this.eheight = 30;
  this.fillColor = color(random(55,105), random(55,105), 155);
  noStroke();
  var eY = 0;

  this.display = function(){
    fill(this.fillColor);
    ellipse(this.xPosition, eY, this.ewidth, this.eheight);
  };

  this.move = function (){
    eY = eY + this.speed;
    if (eY > height-50){
      this.ewidth = 75;
      this.eheight = 15;
      this.speed = 0;
      this.fillColor = color(random(55,105), random(55,105), 155, 120);
    }
  };
}

function Drop(tempSpeed, tempXPosition) {
  this.xPosition = tempXPosition;
  this.ewidth = 20;
  this.speed = tempSpeed;
  this.eheight = 50;
  this.fillColor = color(random(155,255), random(155,255), 255);
  noStroke();
  var eY = 0;

  this.display = function(){
    fill(this.fillColor);
    ellipse(this.xPosition, eY, this.ewidth, this.eheight);
  };

  this.move = function (){
    eY = eY + this.speed;
    if (eY > height-25){
      this.ewidth = 100;
      this.eheight = 20;
      this.speed = 0;
      this.fillColor = color(random(155,255), random(155,255), 255, 150);
    }
  };
}
