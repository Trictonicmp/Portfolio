function openNav() {
  const mainHeader = document.getElementById('main-header');
  const closeButton = document.getElementById('close');
  mainHeader.classList.toggle('popout');
  closeButton.classList.toggle('hidden');
}

function closeNav() {
  const mainHeader = document.getElementById('main-header');
  const closeButton = document.getElementById('close');
  mainHeader.classList.remove('popout');
  closeButton.classList.add('hidden');
}

function toggleDetails(projectId) {
  event.preventDefault();
  if(projectId != null || projectId != undefined) {

  }
  
  let detailsModal = document.getElementById('details-modal');
  detailsModal.classList.toggle('hide-popout');
}

let projectsDetails = {
  Project1: {
    ScreenshotUrl: "images/projects-screens/screen-1.png",
    ScreenshotAlt: "Project image",
    Headline: "Keeping track of hundreds of components",
    Tags: ["codekit","github", "javascript"],
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde facere minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.",
    PreviewLink: "http://preview.com",
    SourceLink: "http://sourcelink.com"
  }
}

openNav();
closeNav();