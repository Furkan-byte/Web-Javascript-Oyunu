//                                               BİNALAR
class builds{
  constructor(){
  this.downside=random(height-100);
  this.speed=5;
  this.x=width;
  this.y=height;
  this.lengthh=70;

  this.reaction=false;
  }
  // ÇARPMA KONTROLÜ
  hit(planee){
    if(planee.y +25> height-this.downside){
      if(planee.x+45>this.x && planee.x<this.x+this.lengthh){this.reaction=true;return true;}

    }
  return false;
  }
  show(){
    fill(40);
    if(this.reaction){
    gameOver();
    }
    this.reaction=false;
    rect(this.x,height-this.downside,this.lengthh,this.downside);
  }

  update(){
   this.x-= this.speed;
  }
  offscreen(){
  if(this.x<-this.lengthh){
  return true;
  }else {
  return false;
  }
  }
}
