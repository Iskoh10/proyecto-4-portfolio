import { skills } from '/src/Data/Data';
import './Skills.css';

export const skillsDraw = (parent1, parent2) => {
  for (const skill of skills) {
    const divImg = document.createElement('div');
    divImg.classList.add('div_img', 'flex_container');
    const img = document.createElement('img');
    img.src = skill.url;
    img.alt = skill.name;

    divImg.appendChild(img);

    if (skill.learned) {
      parent1.appendChild(divImg);
    } else {
      parent2.appendChild(divImg);
    }
  }
};
