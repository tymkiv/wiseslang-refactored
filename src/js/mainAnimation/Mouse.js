export default class Mouse {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = 0;
    this.y = 0;

    this.canvas.addEventListener('mousemove', this.mousemoveHandler.bind(this));
    this.canvas.addEventListener('touchstart', this.touchHandler.bind(this));
    this.canvas.addEventListener('touchmove', this.touchHandler.bind(this));
  }

  mousemoveHandler(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.x = (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width;
    this.y = (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height;
  }

  touchHandler(e) {
    e.preventDefault();
    const rect = this.canvas.getBoundingClientRect();
    this.x = (e.targetTouches[0].clientX - rect.left) / (rect.right - rect.left) * this.canvas.width;
    this.y = (e.targetTouches[0].clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height;
  }
}