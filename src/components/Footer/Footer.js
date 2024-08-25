import './Footer.css';

export const createFooter = (parentNode) => {
  const pFooter = document.createElement('p');
  pFooter.textContent = '© 2024 Isco dev';

  parentNode.appendChild(pFooter);
};
