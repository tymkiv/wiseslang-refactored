import sayHello from './lib/sayHello';
import MainAnimation from './mainAnimation';

sayHello();
const container = document.getElementById('root');
const mainAnimation = new MainAnimation(container);

const btns = [...document.querySelectorAll('.js-btn-model')];
btns.forEach(btn => btn.addEventListener('click', e => {
  btns.forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  const model = e.target.getAttribute('data-model');
  mainAnimation.changeModel(model);
}))
