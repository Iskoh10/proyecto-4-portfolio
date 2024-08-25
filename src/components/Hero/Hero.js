import './Hero.css';

export const createHero = (parentNode) => {
  const sectionHero = document.createElement('section');
  sectionHero.classList.add('div_hero', 'flex_container');

  const divProfile = document.createElement('div');
  divProfile.classList.add('div_profile', 'flex_container');

  const divAvatar = document.createElement('div');
  divAvatar.classList.add('div_avatar', 'flex_container');
  const imgAvatar = document.createElement('img');
  imgAvatar.src = 'public/avatar.svg';

  divAvatar.appendChild(imgAvatar);
  divProfile.appendChild(divAvatar);

  const aJob = document.createElement('a');
  aJob.className = 'a_job';
  aJob.href = 'https://www.linkedin.com/in/fjespmar/';
  aJob.setAttribute('target', '_blank');
  aJob.textContent = 'Disponible para trabajar';

  divProfile.appendChild(aJob);

  const infoHero = document.createElement('div');
  infoHero.classList.add('info_hero', 'flex_container');

  const h2 = document.createElement('h2');
  h2.textContent = 'Hola, soy Isco';

  const p = document.createElement('p');
  p.textContent = `Soy "proyecto de" Desarrollador Full Stack!, actualmente estudiando el programa "RockTheCode" de thePower.`;

  infoHero.appendChild(h2);
  infoHero.appendChild(p);

  sectionHero.appendChild(divProfile);
  sectionHero.appendChild(infoHero);
  parentNode.appendChild(sectionHero);
};
