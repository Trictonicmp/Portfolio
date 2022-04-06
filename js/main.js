const projectsDetails = {
  Project1: {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components',
    Tags: ['codekit', 'github', 'javascript'],
    Description: 'ipsum, dolor sit amet consectetur adipisicing elit. Unde facere minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview.com',
    SourceLink: 'http://sourcelink.com',
  },
  Project2: {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components x2',
    Tags: ['codekit', 'github', 'javascript', 'x2'],
    Description: 'dolor sit amet consectetur adipisicing elit. Unde facere minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview2.com',
    SourceLink: 'http://sourcelink2.com',
  },
  Project3: {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components x3',
    Tags: ['codekit', 'github', 'javascript', 'x3'],
    Description: 'sit amet consectetur adipisicing elit. Unde facere minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview3.com',
    SourceLink: 'http://sourcelink3.com',
  },
  Project4: {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components x4',
    Tags: ['codekit', 'github', 'javascript', 'x4'],
    Description: 'Unde facere minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview4.com',
    SourceLink: 'http://sourcelink4.com',
  },
  Project5: {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components x5',
    Tags: ['codekit', 'github', 'javascript', 'x5'],
    Description: 'minus sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview5.com',
    SourceLink: 'http://sourcelink5.com',
  },
  Project6: {
    ScreenshotUrl: 'images/projects-screens/screen-1.png',
    ScreenshotAlt: 'Project image',
    Headline: 'Keepin track of hundreds of components x6',
    Tags: ['codekit', 'github', 'javascript', 'x6'],
    Description: 'sed perferendis, perspiciatis qui id provident quam dolore iusto, repellendus aperiam iure natus corruti suscipit facilis! Fugit, at vel. Quidem facilis ab necessitatibus rerum iusto ea? Facere, aut rerum officia hic quibusdam minus nam? Fuga sequi, minima debitis at velit id blanditiis porro cumque et delectus saepe aut magnam.',
    PreviewLink: 'http://preview6.com',
    SourceLink: 'http://sourcelink6.com',
  },
};

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
    const detailsImg = document.getElementById('detailsImg');
    detailsImg.src = projectsDetails[projectId].ScreenshotUrl;
    detailsImg.alt = projectsDetails[projectId].ScreenshotAlt;
    document.getElementById('detailsTitle').innerHTML = projectsDetails[projectId].Headline;
    const detailsTags = document.getElementById('detailsTags');
    detailsTags.innerHTML = '';
    for (let i = 0; i < projectsDetails[projectId].Tags.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = projectsDetails[projectId].Tags[i];
      detailsTags.appendChild(li);
    }
    document.getElementById('detailsLiveP').href = projectsDetails[projectId].PreviewLink;
    document.getElementById('detailsSource').href = projectsDetails[projectId].SourceLink;
    document.getElementById('detailsDescription').innerHTML = projectsDetails[projectId].Description;
  }

  const detailsModal = document.getElementById('details-modal');
  detailsModal.classList.toggle('hide-popout');
}

toggleDetails();
toggleDetails();

openNav();
closeNav();