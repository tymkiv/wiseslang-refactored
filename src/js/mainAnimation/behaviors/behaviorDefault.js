export default function behaviorDefault(model) {
  // context --> particle | this === particle
  const modelLength = model.length;
  const currentNum = this.index % modelLength;

  const dx = this.mouse.x - this.x;
  const dy = this.mouse.y - this.y;
  const d = Math.sqrt(dx * dx + dy * dy);

  const s = 100 / d;

  const normalX = dx / d;
  const normalY = dy / d;

  this.originX = (model[currentNum][0] * this.canvasManager.width) / 1.5 +
    this.canvasManager.width / 2 +
    Math.round(Math.random() * 20);

  this.originY = (model[currentNum][1] * this.canvasManager.width) / -1.5 +
    this.canvasManager.height / 2 +
    Math.round(Math.random() * 20);

  const oDistX = this.originX - this.x;
  const oDistY = this.originY - this.y;

  // inertial returning to original place
  this.x += oDistX * this.speed / 1000;
  this.y += oDistY * this.speed / 1000;
  
  // reaction on mouse
  this.x -= s * normalX;
  this.y -= s * normalY;

  // update buffer position
  this.posArray[this.index * 3 + 0] = this.x;
  this.posArray[this.index * 3 + 1] = this.y;
  this.posArray[this.index * 3 + 2] = (this.speed / 40) * s * s;
};