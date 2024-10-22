import { projects } from '/src/Data/Data';
import { createButton2 } from '/src/components/Buttons/Buttons';
import './Projects.css';

export const createSecProjects = (parentNode) => {
  const divProjects = document.createElement('div');
  divProjects.classList.add('div_projects', 'flex_container');
  divProjects.id = 'projects';

  const h3Projects = document.createElement('h3');
  h3Projects.textContent = 'Mis Proyectos';

  const divContainer = document.createElement('div');
  divContainer.classList.add('div_container', 'flex_container');

  const selector = () => {
    for (let i = 1; i <= 5; i++) {
      const a = document.createElement('a');
      a.href = '#pro' + i;
      a.textContent = i;

      divContainer.appendChild(a);
    }
  };

  selector();

  const divCards = document.createElement('div');
  divCards.classList.add('div_cards');

  divProjects.appendChild(h3Projects);
  divContainer.appendChild(divCards);
  divProjects.appendChild(divContainer);

  const createCard = () => {
    for (const project of projects) {
      const divCard = document.createElement('div');
      divCard.classList.add('div_card', 'flex_container');
      divCard.id = 'pro' + project.id;

      const divImgCard = document.createElement('div');
      divImgCard.classList.add('div_imgCard', 'flex_container');
      const img = document.createElement('img');
      img.src = project.url;
      img.alt = project.name;

      const h3Card = document.createElement('h3');
      h3Card.textContent = project.name;

      const pCard = document.createElement('p');
      pCard.textContent = project.description;

      createButton2({
        identifier1: 'btn_app',
        identifier2: 'flex_container',
        text: 'Ver App',
        url: project.urlApp,
        parentNode: divCard
      });

      divImgCard.appendChild(img);
      divCard.appendChild(divImgCard);
      divCard.appendChild(h3Card);
      divCard.appendChild(pCard);

      divCards.appendChild(divCard);
    }
    parentNode.appendChild(divProjects);
  };
  createCard();
};
