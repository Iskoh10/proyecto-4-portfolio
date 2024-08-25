import './SecEst.css';

export const createSecEst = (parentNode, section) => {
  const secEst = document.createElement('section');
  secEst.classList.add('sec_est', 'flex_container', 'div_sx_show');

  const h2 = document.createElement('h2');
  h2.textContent = 'Estudios';

  secEst.appendChild(h2);

  parentNode.appendChild(secEst);

  section.appendChild(parentNode);
};
