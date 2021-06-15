var c,city;
var d ,button;
var enemyPlanes=[];
var buildss=[];
var counter=0;
var score = 0;
let img,img1;
let music;
function preload(){
  img=loadImage('city.jpg');
  img1=loadImage('sehir1.png');
  music=loadSound('music.mp3');
}
function setup() {
  createCanvas(600, 600);
  button = createButton("Play Again");
  button.hide();
  c=new planee();
  frameRate(50);
  enemyPlanes.push(new enemyPlane());
  buildss.push(new builds());
  music.play();
}

function draw() {

  background(0);

 image(img,0,0,width,height);
  // SKOR 1500 Ü GEÇTİKTEN SONRA ARKAPLAN DEĞİŞİR VE OYNANIŞ ZORLAŞIR
  if(score>=1500){
   image(img1,0,0,width,height);
     if(frameCount % 78==0){
    enemyPlanes.push(new enemyPlane());
  }
  // DÜŞMAN UÇAKLARI ÇAĞIRIR VE ONUNLA İLGİLİ KONTROLLERİ YAPAR
  }
  for(var j=enemyPlanes.length-1;j>=0;j--){
   enemyPlanes[j].enemyPlanee();
    enemyPlanes[j].update();
    if(enemyPlanes[j].hit(c)){
      enemyPlanes[j].show();
    }
  }
  if(frameCount % 88==0){
    enemyPlanes.push(new enemyPlane());
  }
   // BİNALARI ÇAĞIRIR VE ONUNLA İLGİLİ KONTROLLERİ YAPAR
   for(var i=buildss.length-1;i>=0;i--){
    buildss[i].show();
    buildss[i].update();
    if(buildss[i].hit(c)){

    }
    if(buildss[i].offscreen()){
      buildss.splice(i,1);
    }
  }
  c.draw_a_plane();
  c.update();

   if(frameCount % 30==0){
   buildss.push(new builds());
   }
score++;
   text("Skorun: "+score,50,10);
}
// HAREKET
function keyPressed(){
  if(keyCode===UP_ARROW){
   c.move(0,-5);
 }
 else if(keyCode===DOWN_ARROW){
   c.move(0,5);
 }
   else if(keyCode===LEFT_ARROW){
   c.move(-5,0);
  }
   else if(keyCode===RIGHT_ARROW){
   c.move(5,0);
  }
  if(keyCode===70){
    c.teleporting(240);
  }
}

function keyReleased(){
    if(keyCode===UP_ARROW){
   c.move(0,0);
 }
  else if(keyCode===DOWN_ARROW){
   c.move(0,0);
  }
   else if(keyCode===LEFT_ARROW){
   c.move(0,0);
  }
   else if(keyCode===RIGHT_ARROW){
   c.move(0,0);
  }
}
