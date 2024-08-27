import { skillsDraw } from '/src/components/Skills/Skills';
import './SecEst.css';

export const createSecEst = (parentNode, section) => {
  const secEst = document.createElement('section');
  secEst.classList.add('sec_est', 'flex_container', 'div_sx_show');

  const pHtml = document.createElement('p');
  pHtml.textContent = 'HTML';
  const pHtmlDes = document.createElement('p');
  pHtmlDes.textContent =
    'Estudio del lenguaje de marcado de la web, buenas practicas en la arquitectura de la información.';

  const pCss = document.createElement('p');
  pCss.textContent = 'CSS';
  const pCssDes = document.createElement('p');
  pCssDes.textContent =
    'Estudio de las hojas de estilo, maquetación web y animaciones.';

  const pJs = document.createElement('p');
  pJs.textContent = 'JavaScript';
  const pJsDes = document.createElement('p');
  pJsDes.textContent =
    'Estudio del lenguaje de programación de la web, codigo limpio, componentes.';

  secEst.appendChild(pHtml);
  secEst.appendChild(pHtmlDes);
  secEst.appendChild(pCss);
  secEst.appendChild(pCssDes);
  secEst.appendChild(pJs);
  secEst.appendChild(pJsDes);

  const h3SkillsToday = document.createElement('h3');
  h3SkillsToday.textContent = 'Habilidades Actuales';
  const divSkillsLearned = document.createElement('div');
  divSkillsLearned.classList.add('div_skillsLearned', 'flex_container');

  const h3SkillsSoon = document.createElement('h3');
  h3SkillsSoon.textContent = 'Habilidades Futuras';
  const divSkillsSoon = document.createElement('div');
  divSkillsSoon.classList.add('div_skillsSoon', 'flex_container');

  secEst.appendChild(h3SkillsToday);
  secEst.appendChild(divSkillsLearned);
  secEst.appendChild(h3SkillsSoon);
  secEst.appendChild(divSkillsSoon);

  skillsDraw(divSkillsLearned, divSkillsSoon);

  parentNode.appendChild(secEst);

  section.appendChild(parentNode);
};
