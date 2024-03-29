import './style.scss';

import _ from 'lodash';
import Print from './print';

import img from './assets/images/file.jpg';

if (!PRODUCTION) {
  console.log('Looks like we are in development mode!');
}

function component() {
  const element = document.createElement('div');

  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  element.classList.add('hello');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print.bind(null, 'Hello webpack!');

  const imgEle = document.createElement('img');
  imgEle.src = img;
  element.appendChild(imgEle);

  return element;
}

document.body.appendChild(component());
