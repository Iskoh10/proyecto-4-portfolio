import './SecExp.css';

export const createSecExp = (parentNode, section) => {
  const secExp = document.createElement('section');
  secExp.classList.add('sec_exp', 'flex_container');

  const h2 = document.createElement('h2');
  h2.textContent = 'Experiencia';

  secExp.appendChild(h2);

  parentNode.appendChild(secExp);

  section.appendChild(parentNode);
};
