var abscisses = [], ordonnees = [], diametres = [];
var nbFlocons = 150;

function setup(){
  createCanvas(800,600);
  
  fill(255,255,255);
  noStroke();
  for (var i=0;i<nbFlocons;i++) {
    abscisses.push(random(0,width));
    ordonnees.push(random(0,height));
    diametres.push(random(2,5));
  }
}
function draw(){
  background(0,0,0);
  
  for (var i=0;i<nbFlocons;i++) {
    ellipse(abscisses[i],ordonnees[i],diametres[i],diametres[i]);
    ordonnees[i]+=diametres[i]*0.5;
    abscisses[i]+=random(-0.5,0.5);
      if (ordonnees[i]> height) {
        ordonnees[i]=0;
        abscisses[i]=random(width);
        diametres[i]=random(2,8);
      }
  } 
}
