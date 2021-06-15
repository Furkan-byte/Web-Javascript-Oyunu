function gameOver(){
    let a=(height/2)-30;
    button.show();
    push();
    fill(255,100,0);
    textSize(40);
    score = score+1;
    text("Skorun: "+score,width/2-100,40);
    pop();
    button.position(width/2-50,height/2);
    button.size(100,30);
	button.style('background-color', 'black');
	button.style('color', 'white');
	button.mousePressed(reset);
  noLoop();
}
  function reset(){
	button.hide();
	enemyPlanes = [];
	buildss = [];
	score = 0;
    c.resetPlane(100,300);
	loop();
}
