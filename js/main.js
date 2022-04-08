const projectsDetails = [
  {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components',
    Tags: ['codekit', 'github', 'javascript'],
    Description: 'ipsum, dolor sit amet consectetur adipisicing elit. Unde facere minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview.com',
    SourceLink: 'http://sourcelink.com',
  },
  {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components x2',
    Tags: ['codekit', 'github', 'javascript', 'x2'],
    Description: 'dolor sit amet consectetur adipisicing elit. Unde facere minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview2.com',
    SourceLink: 'http://sourcelink2.com',
  },
  {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components x3',
    Tags: ['codekit', 'github', 'javascript', 'x3'],
    Description: 'sit amet consectetur adipisicing elit. Unde facere minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview3.com',
    SourceLink: 'http://sourcelink3.com',
  },
  {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components x4',
    Tags: ['codekit', 'github', 'javascript', 'x4', 'github', 'javascript', 'x4', 'github'],
    Description: 'Unde facere minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview4.com',
    SourceLink: 'http://sourcelink4.com',
  },
  {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components x5',
    Tags: ['codekit', 'github', 'javascript', 'x5'],
    Description: 'minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview5.com',
    SourceLink: 'http://sourcelink5.com',
  },
  {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components x6',
    Tags: ['codekit', 'github', 'javascript', 'x6'],
    Description: 'sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview6.com',
    SourceLink: 'http://sourcelink6.com',
  },
];

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
  if (projectId !== null && projectId !== undefined) {
    const project = projectsDetails[projectId];
    const detailsImg = document.getElementById('detailsImg');
    detailsImg.src = project.ScreenshotUrl;
    detailsImg.alt = project.ScreenshotAlt;
    document.getElementById('detailsTitle').innerHTML = project.Headline;
    const detailsTagsContainer = document.getElementById('detailsTags');
    detailsTagsContainer.innerHTML = '';
    for (let i = 0; i < project.Tags.length; i += 1) {
      const tag = document.createElement('li');
      tag.innerHTML = project.Tags[i];
      detailsTagsContainer.appendChild(tag);
    }
    document.getElementById('detailsLiveP').href = project.PreviewLink;
    document.getElementById('detailsSource').href = project.SourceLink;
    document.getElementById('detailsDescription').innerHTML = project.Description;
  }

  document.getElementById('details-modal').classList.toggle('hide-popout');
}

function createCardOf(project, index) {
  const workCard = document.createElement('div');
  workCard.classList.add('work-card');
  const workCardImg = document.createElement('img');
  workCardImg.src = project.ScreenshotUrl;
  workCardImg.alt = project.ScreenshotAlt;
  workCard.appendChild(workCardImg);
  const workCardInfo = document.createElement('div');
  workCardInfo.classList.add('work-card-info');
  const workCardTitle = document.createElement('h3');
  workCardTitle.innerText = project.Headline;
  workCardInfo.appendChild(workCardTitle);
  const workCardTagsContainer = document.createElement('ul');
  for (let j = 0; j < project.Tags.length; j += 1) {
    const tag = document.createElement('li');
    tag.innerText = project.Tags[j];
    workCardTagsContainer.appendChild(tag);
  }
  workCardInfo.appendChild(workCardTagsContainer);
  const workCardButton = document.createElement('button');
  workCardButton.type = 'button';
  workCardButton.classList.add('green-button');
  workCardButton.innerHTML = 'See Project';
  workCardButton.onclick = function openDetails() { toggleDetails(index); };
  workCardInfo.appendChild(workCardButton);
  workCard.appendChild(workCardInfo);

  return workCard;
}

function createWorkCards() {
  for (let i = 0; i < projectsDetails.length; i += 1) {
    const workCardsContainer = document.getElementById('work-cards-container-element');
    workCardsContainer.appendChild(createCardOf(projectsDetails[i], i));
  }
}

function validateFormFields(form) {
  let isValidated = true;
  const requiredElements = form.querySelectorAll('[required]');
  for (let i = 0; i < requiredElements.length; i += 1) {
    if (!requiredElements[i].reportValidity()) {
      isValidated = false;
      break;
    }
  }
  return isValidated;
}

function isLowercase(str) {
  return str.toLowerCase() === str;
}

function validateForm() {
  const emailField = document.getElementById('main-form')[1];
  const emailFieldText = emailField.value;
  const form = document.getElementById('main-form');
  validateFormFields(form);
  if (validateFormFields(form)) {
    if (isLowercase(emailFieldText)) {
      form.submit();
    } else {
      emailField.setCustomValidity('Your email should be lowercase');
      emailField.reportValidity();
    }
  }
}

document.getElementById('form-button').addEventListener('click', validateForm);

let userData = {
  name: '',
  email: '',
  message: ''
}

let nameField = document.getElementById('main-form')[0];
let emailField = document.getElementById('main-form')[1];
let messageField = document.getElementById('main-form')[2];

function checkLocalStorage() {
  //console.log(localStorage)
  if(localStorage.getItem('userData') !== null) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    nameField.value = userData.name;
    emailField.value = userData.email;
    messageField.value = userData.message;
  }
  else {
    let userDataStr = JSON.stringify(userData);
    localStorage.setItem('userData', userDataStr);
  }
}

function updateUserData() {
  userData.name = nameField.value;
  userData.email = emailField.value;
  userData.message = messageField.value;
  localStorage.setItem('userData', JSON.stringify(userData));
}

nameField.oninput = function upData() { updateUserData(); };
emailField.oninput = function upData() { updateUserData(); };
messageField.oninput = function upData() { updateUserData(); };

checkLocalStorage();

createWorkCards();
openNav();
closeNav();