//I use this P5 file to generate fireworks, and I borrowed some code from a online tutorial.
//The link is here: https://jsfiddle.net/jacobjoaquin/hdxvLwbk/

var img;

let gravity,
  fireworks;
function setup(){
	img = loadImage("../image/sky.png");
}

class DisplayableList extends Array {
  update() {
    this.forEach(function(item) {
      item.update();
    })
  }

  display() {
    this.forEach(function(item) {
      item.display();
    })
  }
}

class Ray {
  constructor(position, velocity) {
    this.position = position;
    this.velocity = velocity;
  }

  update() {
    this.velocity.add(gravity);
    this.position.add(this.velocity);
  }

  display() {
    let p2 = this.position.copy().sub(this.velocity.copy().mult(4));
    // line(this.position.x, this.position.y, p2.x, p2.y);
    rect(this.position.x, this.position.y, 4, 4);
  }
}

class Firework {
  constructor(nFrames, nRays, col) {
    this.nFrames = nFrames;
    this.framesLeft = nFrames;
    this.nRays = nRays;
    this.rays = new DisplayableList();
    this.col = col;
    let start_position = createVector(random(width), random(height / 2));

    for (let i = 0; i < this.nRays; i++) {
      let position = start_position.copy(),
        velocity = p5.Vector.fromAngle(random(TAU)).mult(random(2)),
        ray = new Ray(position, velocity);
      this.rays.push(ray);
    }

  }

  update() {
    this.rays.update();
    this.framesLeft--;
  }

  display() {
    push();
    colorMode(BLEND);
    fill(
      max(32, red(this.col)),
      max(32, green(this.col)),
      max(32, blue(this.col)),
      128 * this.framesLeft / this.nFrames
    );
    this.rays.display();
    pop();
  }
}

class FireworksManager extends DisplayableList {
  trigger() {
    push();
    colorMode(HSB);
    let col = color(random(255), 255, random(128, 255));
    pop();
    this.push(new Firework(random(30, 200), random(50, 300), col));
  }

  update() {
    for (let i = this.length - 1; i >= 0; i--) {
      let firework = this[i];
      firework.update();
      if (firework.framesLeft <= 0) {
        this.splice(i, 1);
      }
    }
  }

  display() {
    push();
    blendMode(ADD);
    for (let i = this.length - 1; i >= 0; i--) {
      let firework = this[i];
      firework.display();
    }
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = p5.Vector.fromAngle(HALF_PI).mult(0.025);
  fireworks = new FireworksManager();
  fireworks.trigger();
}

function draw() {
  blendMode(BLEND);
  // background(img);

  background(122,176,226);
  if (random(1) < 0.025) {
    fireworks.trigger();
  }
  fireworks.update();
  fireworks.display();

}