class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/Bird.png");
    this.pImage = loadImage("sprites/smoke.png");
    this.projectile = [];
  }

  display() {
    super.display();
  }
}
