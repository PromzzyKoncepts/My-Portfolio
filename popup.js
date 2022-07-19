const popUps = [
  {
    id: 'project-button1',
    title: 'Multi-Post Stories',
    image: './images/SnapshootPortfolio.png',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    technologies: ['Css', 'Html', 'Bootstrap'],
    live_link: 'https://promzzykoncepts.github.io/My-Portfolio/',
    source_link: 'https://github.com/promzzykoncepts/my-Portfolio/',
  },

  {
    id: 'project-button2',
    title: 'Professional Art Printing Data',
    image: './images/SnapshootPortfolio.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://promzzykoncepts.github.io/My-Portfolio/',
    source_link: 'https://github.com/promzzykoncepts/my-Portfolio/',
  },
  {
    id: 'project-button3',
    title: 'Data Dashboard Healthcare',
    image: './images/SnapshootPortfolio.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://promzzykoncepts.github.io/My-Portfolio/',
    source_link: 'https://github.com/promzzykoncepts/my-Portfolio/',
  },
  {
    id: 'project-button3',
    title: 'Website Portfolio',
    image: './images/SnapshootPortfolio.png',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://promzzykoncepts.github.io/My-Portfolio/',
    source_link: 'https://github.com/promzzykoncepts/my-Portfolio/',
  },
  {
    id: 'project-button4',
    title: 'Professional Art Printing Data',
    image: './images/SnapshootPortfolio.png',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://promzzykoncepts.github.io/My-Portfolio/',
    source_link: 'https://github.com/promzzykoncepts/my-Portfolio/',
  },
  {
    id: 'project-button5',
    title: 'Data Dashboard Healthcare',
    image: './images/SnapshootPortfolio.png',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://promzzykoncepts.github.io/My-Portfolio/',
    source_link: 'https://github.com/promzzykoncepts/my-Portfolio/',
  },
  {
    id: 'project-button6 project-button6',
    title: 'Website Portfolio',
    image: './images/SnapshootPortfolio.png',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    technologies: ['html', 'bootstrap', 'Ruby'],
    live_link: 'https://promzzykoncepts.github.io/My-Portfolio/',
    source_link: 'https://github.com/promzzykoncepts/my-Portfolio/',
  },
];

function popUpDiv(id) {
  // here i created the necessary divs and classes

  const mainDiv = document.createElement('div');
  const divTitle = document.createElement('h1');
  const divLiveBtn = document.createElement('a');
  const divSourceBtn = document.createElement('a');
  const divParagraph = document.createElement('p');
  const divImage = document.createElement('img');
  const divTech = document.createElement('div');
  const divExitBtn = document.createElement('img');
  divTitle.innerText = popUps[id].title;
  divTitle.classList.toggle('popup-title');

  divParagraph.innerText = `${popUps[id].description}`;
  divParagraph.classList.toggle('popup-paragraph');
  divLiveBtn.textContent = 'see live';
  divLiveBtn.className = 'live';
  divLiveBtn.classList.add('popup-btn', 'live');
  divLiveBtn.href = `${popUps[id].live_link}`;
  divSourceBtn.innerText = 'see source';
  divSourceBtn.className = 'source';
  divSourceBtn.classList.add('popup-btn', 'popup-margin', 'source');
  divSourceBtn.href = `${popUps[id].source_link}`;
  divImage.src = `${popUps[id].image}`;
  divImage.classList.toggle('popup-img');
  divTech.innerHTML = `<div>${popUps[id].technologies[0]}</div>
                     <div>${popUps[id].technologies[1]}</div>
                     <div>${popUps[id].technologies[2]}</div>`;
  divTech.className = 'popup-languages';
  divExitBtn.src = './images/Icon.png';
  divExitBtn.className = 'icon';
  function closed() {
    mainDiv.style.display = 'none';
    document.body.style.overflow = 'unset';
  }
  divExitBtn.addEventListener('click', closed);
  mainDiv.classList.toggle('popup');

  if (window.innerWidth < 768) {
    mainDiv.classList.toggle('mobile-width');
    divTitle.classList.toggle('mobile-title');
    divTech.classList.toggle('mobile-languages');
    divImage.classList.toggle('popup-mobile-img');
    divParagraph.classList.toggle('popup-mobile-p');
    divSourceBtn.classList.toggle('mobile-btn');
    divLiveBtn.classList.toggle('mobile-btn2');
    divExitBtn.classList.toggle('mobile-icon');

    const mobileView = document.querySelector('.mobile-view');
    mobileView.appendChild(mainDiv);
  }

  mainDiv.appendChild(divTitle);
  mainDiv.appendChild(divExitBtn);
  mainDiv.appendChild(divTech);
  mainDiv.appendChild(divImage);
  mainDiv.appendChild(divParagraph);
  mainDiv.appendChild(divLiveBtn);
  mainDiv.appendChild(divSourceBtn);
  document.body.appendChild(mainDiv);
}
popUpDiv();