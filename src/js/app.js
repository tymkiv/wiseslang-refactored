import sayHello from './lib/sayHello';
import MainAnimation from './mainAnimation';

sayHello();
const container = document.getElementById('root');
const mainAnimation = new MainAnimation(container);

document.querySelector('.js-btn-1').addEventListener('click', () => mainAnimation.changeModel('ws-logo'))
document.querySelector('.js-btn-2').addEventListener('click', () => mainAnimation.changeModel('dino-925'))
document.querySelector('.js-btn-3').addEventListener('click', () => mainAnimation.changeModel('dino-4627'))