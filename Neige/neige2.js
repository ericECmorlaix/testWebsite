var nombreFlocons=150, tableauFlocons=[]

function setup() {
  createCanvas(500,600)
  for (var i=0;i<nombreFlocons;i++){
    tableauFlocons.push(new Flocon());
  }
}

function draw() {
    background(0,0,20)
    for (var i=0;i<nombreFlocons;i++) {
      var flocon = tableauFlocons[i];
      flocon.deplace();
      flocon.dessine();
  	}
}

Flocon = function(){
	this.abscisse = random(0,width);
	this.ordonnee = random(0,height);
	this.rayon = random(2,5);
	
	this.deplace = function() {
		this.ordonnee +=this.rayon;
		this.abscisse += random(-0.5,0.5);
		if (this.ordonnee>height) {
			this.ordonnee = 0;
		    this.abscisse = random(0,width);
		}
  	}
  	this.dessine = function() {
  		fill(255);
  		ellipse(this.abscisse,this.ordonnee,2*this.rayon,2*this.rayon);
	}

}