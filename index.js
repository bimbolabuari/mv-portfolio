// DOM element
const hamburger = document.querySelector('#hamburger');
const navList = document.querySelector('.nav-list');
const closeX = document.querySelector('#close');

function openMenu() {
  navList.classList.add('opacity');
  hamburger.classList.add('visibility');
}

hamburger.addEventListener('click', openMenu);

closeX.addEventListener('click', () => {
  navList.classList.remove('opacity');
  hamburger.classList.remove('visibility');
});