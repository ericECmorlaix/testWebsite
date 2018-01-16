var nombreFlocons=150;
var tableauAbscisses=[],tableauOrdonnees = [];

function setup(){
  createCanvas(500,600);
  
  fill(255,255,255);
  noStroke();
  for (var i=0;i<nombreFlocons;i++) {
    tableauAbscisses.push(random(0,width));
    tableauOrdonnees.push(random(0,height));
  }
}
function draw(){
  background(0,0,0);
  for (var i=0;i<nombreFlocons;i++) {
    ellipse(tableauAbscisses[i],tableauOrdonnees[i],10,10);
    tableauOrdonnees[i] += 4;
      if (tableauOrdonnees[i]> height) {
        tableauOrdonnees[i]=0;
        tableauAbscisses[i]=random(0,width);
      }
  }
}
