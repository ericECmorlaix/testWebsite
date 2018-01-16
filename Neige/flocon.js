var abscisse,ordonnee

function setup(){
  createCanvas(500,600);
  
  fill(255,255,255);
  noStroke();
  abscisse = random(0, width);
  ordonnee = 0;
}
function draw(){
  background(0,0,0);
  ellipse(abscisse,ordonnee,10,10);
  ordonnee+=4;
  if (ordonnee>height){
    abscisse = random(0, width);
    ordonnee = 0;
  }  
}
