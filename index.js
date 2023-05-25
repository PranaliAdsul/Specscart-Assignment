const container = document.querySelector('.container');
const slider = document.querySelector('.slider');

slider.addEventListener('input', () => {
  container.style.setProperty('--new-position', `${slider.value}%`);
 })