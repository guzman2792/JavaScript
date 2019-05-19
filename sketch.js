function setup() {
  createCanvas(500,500);
}

function draw() {
  background("#004455");
  fill("#000000");
  stroke("#ffff00");
  strokeWeight(5);
  fill("ff1111");
    textSize(40);
    textFont("Arial");
    textAlign(CENTER);
    text("make me shake",200,200);
  ellipse(random(width),random(height),20,20);
}
    
function mousePressed (){
    if(diam1>50){
        diam1=0;
    }else{
    diam1=diam1+5
    }
}