//                                                  DÜŞMAN UÇAK
class enemyPlane{
  constructor(){
   this.x=650;
  this.y=random(height-420);
  this.xSpeed=3,5;
  this.ySpeed=0;
  this.reaction=false;
  }
  // ÇARPMA KONTROLÜ
  hit(planee){
    if(planee.y+25 > this.y-15 && planee.y-25 < this.y+15){
      if(planee.x+45 >this.x && planee.x<this.x+80){this.reaction=true;return true;}
  }

  return false;
  }
  //UÇAK ÇİZİYOR
  enemyPlanee(){
  push();
  push();
  stroke(0);
  strokeWeight(8);
  line(this.x,this.y,this.x,this.y+25);
  line(this.x,this.y,this.x,this.y-25);
  pop();
    fill("black");
  triangle(this.x+20,this.y,this.x+40,this.y,this.x+40,this.y-30);
    fill("red");
  ellipse(this.x,this.y,80,30);
  pop();
  }
  //OTOMATİK GİTMESİNİ SAĞLIYOR
  update(){
    this.x-=this.xSpeed;
    this.y-=this.ySpeed;

  this.y=constrain(this.y,50,height-50);
  }
show(){
  if(this.reaction){
   gameOver();
}
this.reaction=false;}
}
