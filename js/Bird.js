class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.pImage = loadImage("sprites/smoke.png");
    this.projectile = [];
  }

  display() {
    super.display();

    if(this.body.position.x > 300) {
      var pos = [this.body.position.x,this.body.position.y];
      this.projectile.push(pos);
      
      for(var i = 0; i < this.projectile.length; i++) {
        image(this.pImage,this.projectile[i][0],this.projectile[i][1]);
      }
    }
  }
}
