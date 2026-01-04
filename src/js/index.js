import '../css/global.css';
import '../scss/global.scss';

import Three from './three';

document.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  if (canvas) {
    return new Three(canvas);
  }
});
