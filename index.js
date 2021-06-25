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
    name: 'Mobile post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    id: '002',
  },
  {
    name: 'Mobile post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    id: '003',
  },
  {
    name: 'Mobile post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    id: '004',
  },
  {
    name: 'Mobile post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    id: '001',
  },
  {
    name: 'Mobile post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    id: '005',
  },
  {
    name: 'Mobile post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    id: '006',
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
<img src="./images/details-mobile.png" class="pop-up-image" alt="Project image">
<div class="pop-up-right">
<p class="pop-up-paragraph">${project.description}</p>
<div class="pop-up-button-container">
<a href="#" class="pop-up-button">Livelink<i class="fa fa-arrow-circle-down"></i></a>
<a href="#" class="pop-up-button">Sourcelink<i class="fa fa-github"></i></a>
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
