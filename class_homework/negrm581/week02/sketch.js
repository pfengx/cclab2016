function particle(x,y) {
  this.x = x;
  this.y = y;
  
  this.history = [];
  
  this.update = function() {
    this.x += random(-10,10);
    this.y += random(-10,10);
    
    for(var i = 0; i <this.history.length; i++){
      this.history[i].x += (0,-2);
      this.history[i].y += (0,-2);
    }
    
    var v = createVector(this.x, this.y);
    this.history.push(v);
    if(this.history.length > 150) {
      this.history.splice(0,1);
    }
  }
  
  this.show = function() {
    stroke(0);
    fill(0, 150);
    ellipse(this.x, this.y, random(20), random(20));
    
    noFill();
    beginShape();
    for (var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
     // fill(random(255));
     // ellipse(pos.x, pos.y, 8,8);
     vertex(pos.x, pos.y);
    }
    endShape();
  }
}
var particles =[];

function setup() {
  createCanvas(2000,1000);
}

function mousePressed(){
  particles.push(new particle(mouseX,mouseY));
  

}



function draw() {
    clear();
    //background(200);
  for(var i =0; i < particles.length; i++){
    particles[i].update();
    particles[i].show();
  }
   if(particles.length > 60){
    particles.splice(0,1);
  }
}

