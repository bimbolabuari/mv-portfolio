const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');

const toggleNavMenu = () => {
  navList.classList.toggle('nav-active');
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 2 + 0.4}s`;
    }
  });
  hamburger.classList.toggle('toggle');
};
hamburger.addEventListener('click', toggleNavMenu);

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('nav-active');
    hamburger.classList.remove('toggle');
  });
});