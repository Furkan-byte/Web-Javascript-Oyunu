//                                                     UÇAK
class planee{
  constructor(){
  this.x=100;
  this.y=300;
  this.xSpeed=1;
  this.ySpeed=0;
  }
  //UÇAK ÇİZİYOR
  draw_a_plane(){
  push();
  push();
  stroke(0);
  strokeWeight(8);
  line(this.x,this.y,this.x,this.y+40);
  line(this.x,this.y,this.x,this.y-40);
  pop();
    fill("red");
  triangle(this.x-25,this.y,this.x-65,this.y,this.x-65,this.y-40);
    fill("green");
  ellipse(this.x,this.y,130,50);
  pop();
  }
  //HAREKETİ SAĞLAR VE CANVAS İÇİNDEN ÇIKMAMAYI KONTROL EDER.
  update(){
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;


    this.x=constrain(this.x,70,width-70);
    this.y=constrain(this.y,50,height-50);
  }
  //HAREKETİ TUŞLARA ATAMAMA YARIYOR
  move(x,y){
    this.xSpeed=x;
    this.ySpeed=y;

  }
  //TELEPORT İŞLEMİ
  teleporting(a){
    this.x+=a;
    score-=150;
  }
  //GAMEOVER FONKSİYONU İÇİN
  resetPlane(b,c){
  this.x=b;
    this.y=c;
  }

}
