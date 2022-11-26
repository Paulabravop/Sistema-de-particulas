let lines = [];
let nLines = 150;

  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < nLines; i ++){
      lines[i] = new RandomWalker(i);
    }
    
  }
  
  function draw () {
  
    for(let i = 0; i < nLines; i ++){
      lines[i].update();
      lines[i].display();
      }
   
  }

// ----------------------- Random Walker --------------// 
class RandomWalker{
  constructor(_name){
    this.red = random(0, 250);
    this.green = random(0, 55); 
    this.blue = random(100, 230);

    this.t = 0;
    this.tSpeed = random(1);
    this.noiseShift = random(20);

    this.pos = createVector(width/2, height);
    this.speed = createVector(random(0,  8), random(-10, 10));
    this.length = random(windowWidth, windowHeight);
    print('holas pelota' + this._name);
  }
  update(_t){

    this.speed.rotate(map(noise(this.t + this.noiseShift), 0, 1, -1, 1));
    this.pos.add(this.speed);

    this.t += this.tSpeed;
  }
  display(){
    stroke (this.red, this.green, this.blue );
    strokeWeight(1);

    line(this.pos.x, this.pos.y,this.length, this.length);
    
    }
    }