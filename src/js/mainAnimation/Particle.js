export default class Particle {
  constructor(props = {}) {
    this.index = props.index;
    this.speed = props.speed;

    this.posArray = props.posArray;
    this.mouse = props.mouse;
    this.canvasManager = props.canvasManager;

    this.init();
  }

  init() {
    this.x = Math.random() * this.canvasManager.width;
    this.y = Math.random() * this.canvasManager.height + this.canvasManager.height;
  }

  move(behavior, model) {
    behavior.call(this, model);
  }

  // move(particlePositions_) {
  //   this.particlePositions = particlePositions_;
    
  //   if (this.runned == 0) {
  //     this.runned = 1;
  //     // this.x = vw / 2; // ortada baslamalari icin
  //     // this.y = vh / 2; // ortada baslamalari icin
  //     const dx = this.pointer.x;
  //     const dy = this.pointer.y;
  //     const d = Math.sqrt(dx * dx + dy * dy);
  //     const s = 1000 / d;
  //     this.x = vars.vw - Math.floor(Math.random() * vars.vw); // in 3
  //     this.y = vars.vh + Math.floor(Math.random() * vars.vh * 2); // in 3
  //   } else {
  //     for (let i = 0; i < this.particleIndex.length; i++) {
  //       const e = this.particleIndex[i];
  //       if (e[0] === this.particlePositions) {
  //         e[1](this, vars.vw, vars.vh);
  //         break;
  //       }
  //     }
  //   }
  // }
}