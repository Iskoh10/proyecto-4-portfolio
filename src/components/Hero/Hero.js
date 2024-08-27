import { createButton, createButton1 } from '/src/components/Buttons/Buttons';
import './Hero.css';

export const createHero = (parentNode) => {
  const sectionHero = document.createElement('section');
  sectionHero.classList.add('hero', 'flex_container');
  sectionHero.id = 'about';

  const divProfile = document.createElement('div');
  divProfile.classList.add('div_profile', 'flex_container');

  const divAvatar = document.createElement('div');
  divAvatar.classList.add('div_avatar', 'flex_container');
  const imgAvatar = document.createElement('img');
  imgAvatar.src = 'public/avatar.svg';

  divAvatar.appendChild(imgAvatar);
  divProfile.appendChild(divAvatar);

  const divA = document.createElement('div');
  divA.classList.add('btn_animated', 'flex_container');

  createButton({
    identifier: 'a_job',
    url: 'https://www.linkedin.com/in/fjespmar/',
    attributeKey: 'target',
    attributeValue: '_blank',
    text: 'Disponible para trabajar',
    parentNode: divA
  });

  divProfile.appendChild(divA);

  const infoHero = document.createElement('div');
  infoHero.classList.add('info_hero', 'flex_container');

  const h2 = document.createElement('h2');
  h2.textContent = 'Hola, soy Isco';

  const p = document.createElement('p');
  p.textContent = `Soy "proyecto de" Desarrollador Full Stack!, actualmente estudiando el programa "RockTheCode" de thePower.`;

  infoHero.appendChild(h2);
  infoHero.appendChild(p);

  const btnContacts = document.createElement('div');
  btnContacts.classList.add('btn_contacts', 'flex_container');

  const divMail = document.createElement('div');
  divMail.classList.add('div_mail', 'flex_container');

  const pMail1 = document.createElement('p');
  pMail1.textContent = 'Escríbeme a';
  divMail.appendChild(pMail1);

  const pMail2 = document.createElement('p');
  pMail2.textContent = 'iscoesp@gmail.com';
  pMail2.addEventListener('click', async () => {
    const mail = pMail2.innerHTML;
    try {
      await navigator.clipboard.writeText(mail);
      console.log('Te has copiado mi mail en el portapapeles');
    } catch (error) {
      console.log('Hubo un error al copiar mi mail:', error);
    }
  });
  divMail.appendChild(pMail2);

  createButton1({
    text: 'Contáctame',
    parentNode: btnContacts,
    func: divMail
  });

  createButton({
    identificator: 'a_in',
    url: 'https://www.linkedin.com/in/fjespmar/',
    attributeKey: 'target',
    attributeValue: '_blank',
    text: 'LinkedIn',
    parentNode: btnContacts
  });

  infoHero.appendChild(btnContacts);
  infoHero.appendChild(divMail);

  sectionHero.appendChild(divProfile);
  sectionHero.appendChild(infoHero);
  parentNode.appendChild(sectionHero);
};
