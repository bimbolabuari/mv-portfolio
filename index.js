const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const projectSection = document.querySelector("#project-popup");
const navLinks = document.querySelectorAll(".nav-list a");
const projectLinks = document.querySelectorAll(".project-link");

const toggleNavMenu = () => {
  navList.classList.toggle("nav-active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 2 + 0.4
      }s`;
    }
  });
  hamburger.classList.toggle("toggle");
};
hamburger.addEventListener("click", toggleNavMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("nav-active");
    hamburger.classList.remove("toggle");
  });
});

const projectArrays = [
  {
    name: "Multi Post Stories",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: "./images/details-mobile.png",
    linkLive: "https://github.com/bimbolabuari/",
    linkSource: "https://github.com/bimbolabuari/",
  },
  {
    name: "Multi Post Stories",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: "./images/details-mobile.png",
    linkLive: "https://github.com/bimbolabuari/",
    linkSource: "https://github.com/bimbolabuari/",
  },
  {
    name: "Multi Post Stories",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: "./images/details-mobile.png",
    linkLive: "https://github.com/bimbolabuari/",
    linkSource: "https://github.com/bimbolabuari/",
  },
  {
    name: "Multi Post Stories",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: "./images/details-mobile.png",
    linkLive: "https://github.com/bimbolabuari/",
    linkSource: "https://github.com/bimbolabuari/",
  },
  {
    name: "Multi Post Stories",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: "./images/details-mobile.png",
    linkLive: "https://github.com/bimbolabuari/",
    linkSource: "https://github.com/bimbolabuari/",
  },
  {
    name: "Multi Post Stories",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: "./images/details-mobile.png",
    linkLive: "https://github.com/bimbolabuari/",
    linkSource: "https://github.com/bimbolabuari/",
  },
];

function createPopupElement(project) {
  const popupSection = document.createElement("div");

  popupSection.innerHTML = `
  <h2 class="pop-up-title">${project.name}</h2>
  <i class="fa fa-times-circle pop-up-icon"></i>
  <ul class="pop-up-flex">
    <li class="pop-up-list"><a class="pop-up-anchor">${project.technologies}</a></li>
    <li class="pop-up-list"><a class="pop-up-anchor">${project.technologies}</a></li>
    <li class="pop-up-list"><a class="pop-up-anchor">${project.technologies}</a></li>
  </ul>
<div class="pop-up-container">
<img class="pop-up-image" src="./images/details-mobile.png" ${project.image} alt="project-images">
<div class="pop-up-right">
<p class="pop-up-paragraph">${project.description}</p>
<div class="pop-up-button-container">
<button type="submit"class="pop-up-button">${project.linkLive}<i class="fa fa-arrow-circle-down"></i></button>
<button type="submit" class="pop-up-button">${project.linkSource}<i class="fa fa-github"></i></button>
</div>
</div>
</div>
  `;
  return popupSection;
}

function popupProject(project, projectSection) {
  const newPopupElement = createPopupElement(project);
  projectSection.appendChild(newPopupElement);
  projectSection.classList.remove("none");
}

// console.log(projectLinks, projectArrays)

projectLinks.forEach((project) => {
  project.addEventListener("click", () => {
    projectArrays.forEach((project) => {
      popupProject(project, projectSection);
    });
  });
});
