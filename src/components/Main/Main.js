import { createHero } from '/src/components/Hero/Hero';
import { createSecEst } from '/src/components/SecEst/SecEst';
import { createSecExp } from '/src/components/SecExp/SecExp';
import './Main.css';

export const createMain = (parentNode) => {
  createHero(parentNode);

  const divSection = document.createElement('div');
  divSection.classList.add('div_section', 'flex_container');

  const secSelection = document.createElement('div');
  secSelection.classList.add('sec_selection', 'flex_container');

  const pStudies = document.createElement('p');
  pStudies.classList.add('p_studies', 'selected');
  pStudies.textContent = 'Estudios';

  secSelection.addEventListener('click', (e) => {
    const secEst = document.querySelector('.sec_est');
    const secExp = document.querySelector('.sec_exp');
    if (e.target.classList.contains('p_studies')) {
      pStudies.classList.add('selected');
      if (pExperience.classList.contains('selected')) {
        pExperience.classList.remove('selected');
      }
      secEst.classList.add('div_sx_show');
      secExp.classList.remove('div_sx_show');
    } else if (e.target.classList.contains('p_experience')) {
      pExperience.classList.add('selected');
      if (pStudies.classList.contains('selected')) {
        pStudies.classList.remove('selected');
      }
      secEst.classList.remove('div_sx_show');
      secExp.classList.add('div_sx_show');
    }
  });

  secSelection.appendChild(pStudies);

  const pExperience = document.createElement('p');
  pExperience.className = 'p_experience';
  pExperience.textContent = 'Experiencia';

  secSelection.appendChild(pExperience);

  parentNode.appendChild(secSelection);

  createSecEst(divSection, parentNode);

  createSecExp(divSection, parentNode);
};
