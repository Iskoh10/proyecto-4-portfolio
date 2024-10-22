import './AddBMenu.css';

export const addBMenu = () => {
  const divLogo = document.querySelector('.div_logo');

  divLogo.addEventListener('click', () => {
    const links = document.querySelector('.links');
    links.classList.toggle('show');
  });
};
