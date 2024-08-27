import './SecExp.css';

export const createSecExp = (parentNode, section) => {
  const secExp = document.createElement('section');
  secExp.classList.add('sec_exp', 'flex_container');

  const pExp1 = document.createElement('p');
  pExp1.textContent = 'Experiencia 1';
  const pExp1Des = document.createElement('p');
  pExp1Des.textContent =
    'Descripción de las funciones desarrolladas en la experiencia 1.';

  const pExp2 = document.createElement('p');
  pExp2.textContent = 'Experiencia 2';
  const pExp2Des = document.createElement('p');
  pExp2Des.textContent =
    'Descripción de las funciones desarrolladas en la experiencia 2.';

  const pExp3 = document.createElement('p');
  pExp3.textContent = 'Experiencia 3';
  const pExp3Des = document.createElement('p');
  pExp3Des.textContent =
    'Descripción de las funciones desarrolladas en la experiencia 3.';

  secExp.appendChild(pExp1);
  secExp.appendChild(pExp1Des);
  secExp.appendChild(pExp2);
  secExp.appendChild(pExp2Des);
  secExp.appendChild(pExp3);
  secExp.appendChild(pExp3Des);

  parentNode.appendChild(secExp);

  section.appendChild(parentNode);
};
