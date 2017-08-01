import Birdy from './bird3d';

export default class Flocky {
  constructor(num, dimX, dimY, dimZ) {
    this.numBirds = num;
    this.birds = [];
    this.neighborRadius = 60;
    this.separationRadius = 40;
    this.dims = [dimX, dimY, dimZ];
  }

  populateFlock() {
    const colors = ['black','red','blue','green','purple'];
    for (let i = 0; i < this.numBirds; i++) {
      const rand = colors[Math.floor(Math.random() * colors.length)];
      const pos = this.randomPos();
      const vel = this.randomVel();
      this.birds.push(new Birdy(this, {key: i, pos: pos, vel: vel, radius: 4, color: rand}));
    }
  }


  randomPos() {
    const xPos = Math.floor(Math.random()*this.dims[0]);
    const yPos = Math.floor(Math.random()*this.dims[1]);
    const zPos = Math.floor(Math.random()*this.dims[2]);
    return [xPos, yPos, zPos];
  }

  randomVel() {
    const xVel = Math.floor(Math.random()*5) - 2.5;
    const yVel = Math.floor(Math.random()*5) - 2.5;
    const zVel = Math.floor(Math.random()*5) - 2.5;
    return [xVel, yVel, zVel];
  }

  moveBirds() {
    for (let i = 0; i < this.birds.length; i++) {
      this.birds[i].move();
    }
  }

  draw(ctx) {
    this.moveBirds();
    ctx.clearRect(0, 0, this.dims[0], this.dims[1]);
    for (let i = 0; i < this.birds.length; i++) {
      this.birds[i].draw(ctx);
    }
  }
}