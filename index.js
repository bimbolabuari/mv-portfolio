const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const projectSection = document.querySelector('.project-flex');
const navLinks = document.querySelectorAll('.nav-list a');
const projectPopup = document.querySelector('#project-popup');
const email = document.querySelector('#email');
const submitButton = document.querySelector('.contact-button');

const toggleNavMenu = () => {
  navList.classList.toggle('nav-active');
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 2 + 0.4
      }s`;
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

const projectArrays = [
  {
    name: 'Klassy Cafe',
    description: 'This project is on JS Webpack tutorial and DOM manipulation that demonstrates the knowledge of HTML, CSS, Webpack, template literals, DOM manipulation, Let and const, functions, and Importing and Exporting JS files.',
    technologies: ['html', 'css', 'JavaScript'],
    id: '001',
    image: 'images/Screenshot5.png',
    sourceurl: 'https://github.com/bimbolabuari/odin-restuarant-js',
    livelink: 'https://bimbola-restuarant-js.netlify.app/',
  },
  {
    name: 'The Youtube clone',
    description: 'This project is about cloning the Youtube page that demonstrates the knowledge of Semantic HTML, embedding images, CSS media query for responsiveness, CSS grid for layout, CSS flexbox properties also used for layout, CSS positioning such as absolute and fixed was used positioning elements,CSS transition property and also CSS float.',
    technologies: ['html', 'css', 'JavaScript'],
    id: '002',
    image: 'images/Screenshot7.png',
    sourceurl: 'https://github.com/bimbolabuari/odin-youtube-clone',
    livelink: 'https://bimbola-youtube-clone.netlify.app/',
  },
  {
    name: 'Web development Website',
    description: 'This project is about  building a web page that showcase the knowledge of Semantic HTML, CSS selectors, CSS box-model, flexbox, background properties, mobile-first responsive web design, CSS media query, DOM manipulation, event listener, arrow function, let and const, Javascript Object, Arrays, String interpolation, Github pages.',
    technologies: ['html', 'css', 'JavaSript'],
    id: '003',
    image: 'images/Screenshot4.png',
    sourceurl: 'https://github.com/bimbolabuari/mv-html-capstone',
    livelink: 'https://bimbola-mv-html-capstone.netlify.app/',
  },
  {
    name: 'Todo-List',
    description: 'This project is on Webpack that showcase the knowledge of HTML, CSS, Webpack Configuration, Jaavascript, import and export modules, string interpolation, arrays, objects, ES6 syntax, eventlisteners, localstorage.',
    technologies: ['html', 'JavaScript', 'React'],
    image: 'images/Screenshot2.png',
    id: '004',
    livelink: 'https://bimbola-mv-todo-list.netlify.app/',
    sourceurl: 'https://github.com/bimbolabuari/mv-todo_list',
  },
  {
    name: 'Calculator App',
    description: 'This project is about building Calculator app using react functional and class component, State, Props, ES6 modules, import and export, Hooks, Router, setting up the environment and tools needed to develop a React application using Create React App (CRA),',
    technologies: ['Bootstrap', 'React', 'Redux'],
    image: 'images/Screenshot3.png',
    id: '005',
    livelink: 'https://github.com/bimbolabuari/mv-math-magician',
    sourceurl: 'https://bimbola-mv-math-magician.netlify.app//',
  },
  {
    name: 'Library App',
    description: 'This project is a Microverse exercise on building Library app using react and redux, functional and class component, State, Props, ES6 modules, import and export, Hooks, Router, Reducer, Store, Action, setting up the environment and tools needed to develop a React application using Create React App (CRA),',
    technologies: ['Bootstrap', 'React', 'Redux'],
    image: 'images/Screenshot1.png',
    id: '006',
    livelink: 'https://bimbolabuari-mv-bookstore.netlify.app/',
    sourceurl: 'https://github.com/bimbolabuari/mv-bookstore-react-redux',
  },

];

const createProjectElement = (project) => {
  const projectcontainer = document.createElement('li');
  projectcontainer.classList.add('project-container');
  projectcontainer.innerHTML = `
  <div class="project-text">
    <h3 class="project-header">${project.name}</h3>
    <p class="project-paragraph">${project.description}</p>
    <ul class="flex project btn-flex">
   ${project.technologies.map((tech) => `<li class="project-button">${tech}</li>`).join('')}
    </ul>
  </div>
  <button data-action="showPopup" data-project-id="${project.id}" class="cursor project-link">See Project</button>
  `;
  return projectcontainer;
};

const displayProject = (project, projectSection) => {
  const newProjectElement = createProjectElement(project);
  projectSection.appendChild(newProjectElement);
};

projectArrays.forEach((project) => {
  displayProject(project, projectSection);
});

const createPopupElement = (project) => {
  const popupSection = document.createElement('div');
  popupSection.classList.add('pop-up-section');
  popupSection.innerHTML = `
  <h2 class="pop-up-title">${project.name}</h2>
  <i class="fa fa-times-circle pop-up-icon" data-action="closePopup"></i>
  <ul class="pop-up-flex">
   ${project.technologies.map((tech) => `<li class="pop-up-list pop-up-anchor">${tech}</li>`).join('')}
  </ul>
<div class="pop-up-container">
<img src=${project.image} class="pop-up-image" alt="Project image">
<div class="pop-up-right">
<p class="pop-up-paragraph">${project.description}</p>
<div class="pop-up-button-container">
<a href=${project.livelink} target="_blank" class="pop-up-button">Livelink<i class="fa fa-arrow-circle-down"></i></a>
<a href=${project.sourceurl} target="_blank" class="pop-up-button">Sourcelink<i class="fa fa-github"></i></a>
</div>
</div>
</div>
  `;
  return popupSection;
};

const displayPopup = (event) => {
  const { projectId } = event.target.dataset;
  const currentObject = projectArrays.find((project) => projectId === project.id);
  const showPopup = createPopupElement(currentObject);
  projectPopup.style.display = 'block';
  projectPopup.appendChild(showPopup);
  projectPopup.classList.add('display-project');
};

document.addEventListener('click', (event) => {
  if (!event.target.dataset.action) {
    return;
  }
  if (event.target.dataset.action === 'showPopup') {
    displayPopup(event);
  }

  if (event.target.dataset.action === 'closePopup') {
    projectPopup.style.display = 'none';
    location.reload();
  }
});

const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*(\+[a-z0-9-]+)?@[a-z0-9-]+(\.[a-z0-9-]+)*$/;

submitButton.addEventListener('click', () => {
  const validatedMail = email.value;
  if (!regex.test(validatedMail)) {
    submitButton.setCustomValidity('Email should be in lowercase. Please try again!');
  } else {
    submitButton.setCustomValidity('');
  }
});

const storeValue = () => {
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};

const form = document.querySelector('form');
form.addEventListener('input', storeValue);
const newFormData = JSON.parse(localStorage.getItem('formData'));

form.name.value = newFormData.name;
form.replyto.value = newFormData.email;
form.message.value = newFormData.message;
