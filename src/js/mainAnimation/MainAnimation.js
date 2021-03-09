import Particle from './Particle';
import Canvas from './Canvas';
import Mouse from './Mouse';

import behaviorDefault from './behaviors/behaviorDefault';

import wsLogo from './models/ws-logo';
import dino925 from './models/dino-925';
import dino4627 from './models/dino-4627';

export default class MainAnimation {
  constructor(container, settings = {}) {
    this.container = container;

    this.canvasManager = new Canvas(this.container);
    this.mouse = new Mouse(this.canvasManager.canvas);
    this.particles = [];

    this.currentBehavior = behaviorDefault;
    this.currentModel = wsLogo;

    this.config(settings);

    this.createParticles();

    this.raf();
  }

  config(settings) {
    this.count = settings.count || 10000;
  }

  raf() {
    this.particles.forEach(p => p.move(this.currentBehavior, this.currentModel));
    this.canvasManager.draw(this.posArray, this.count);

    window.requestAnimationFrame(this.raf.bind(this));
  }

  createParticles() {
    this.posArray = new Float32Array(this.count * 3);
    for (let i = 0; i < this.count; i++) {
      this.particles.push(new Particle({
        index: i,
        speed: Math.round((Math.random() * 400) / 10) + 1,
        posArray: this.posArray,
        mouse: this.mouse,
        canvasManager: this.canvasManager,
      }))
    }
  }

  changeModel(model) {
    let arr;
    switch (model) {
      case 'ws-logo':
        arr = wsLogo;
        break;
      case 'dino-925':
        arr = dino925;
        break;
      case 'dino-4627':
        arr = dino4627;
        break;
      default:
        arr = wsLogo;
    }
    arr.sort(() => Math.random() - 0.5);
    this.currentModel = arr;
  }
}

