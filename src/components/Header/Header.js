import './Header.css';

export const createHeader = (parendNode) => {
  const divLogo = document.createElement('div');
  divLogo.classList.add('div_logo', 'flex_container');
  const logo = document.createElement('img');
  logo.src = 'public/darkFlaticon.svg';
  divLogo.addEventListener('click', () => {
    const mainContainer = document.querySelector('.main_container');
    mainContainer.classList.toggle('dark_mode');
  });
  divLogo.appendChild(logo);

  const divLinks = document.createElement('div');
  divLinks.classList.add('links', 'flex_container');

  const ulLinks = document.createElement('ul');
  ulLinks.classList.add('ulLinks', 'flex_container');

  const aExp = document.createElement('a');
  aExp.href = '#exp';
  const liExp = document.createElement('li');
  liExp.textContent = 'Experiencia';

  aExp.appendChild(liExp);

  const aProjects = document.createElement('a');
  aProjects.href = '#projects';
  const liProjects = document.createElement('li');
  liProjects.textContent = 'Proyectos';

  aProjects.appendChild(liProjects);

  const aAbout = document.createElement('a');
  aAbout.href = '#about';
  const liAbout = document.createElement('li');
  liAbout.textContent = 'Sobre mí';

  aAbout.appendChild(liAbout);

  const aContact = document.createElement('a');
  aContact.href = 'mailto:correoelectronico@.com';
  const liContact = document.createElement('li');
  liContact.textContent = 'Contacto';

  aContact.appendChild(liContact);

  ulLinks.appendChild(aExp);
  ulLinks.appendChild(aProjects);
  ulLinks.appendChild(aAbout);
  ulLinks.appendChild(aContact);

  divLinks.appendChild(ulLinks);

  parendNode.appendChild(divLogo);
  parendNode.appendChild(divLinks);
};
