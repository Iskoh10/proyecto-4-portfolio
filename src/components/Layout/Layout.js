import { createHeader } from '/src/components/Header/Header';
import { createMain } from '/src/components/Main/Main';
import { createFooter } from '/src/components/Footer/Footer';
import './Layout.css';
import { addBMenu } from '../AddBMenu/AddBMenu';

export const createLayout = () => {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main_container', 'flex_container');

  const header = document.createElement('header');
  header.classList.add('header', 'flex_container');

  createHeader(header);

  mainContainer.appendChild(header);

  const main = document.createElement('main');
  main.classList.add('main', 'flex_container');

  createMain(main);

  mainContainer.appendChild(main);

  const footer = document.createElement('footer');
  footer.classList.add('footer', 'flex_container');

  createFooter(footer);

  mainContainer.appendChild(footer);

  document.body.appendChild(mainContainer);
  addBMenu();
};
