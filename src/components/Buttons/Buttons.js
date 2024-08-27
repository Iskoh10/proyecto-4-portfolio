import './Buttons.css';

export const createButton = ({
  identifier,
  url,
  attributeKey,
  attributeValue,
  text,
  parentNode
}) => {
  const a = document.createElement('a');
  a.className = identifier;
  a.href = url;
  a.setAttribute(attributeKey, attributeValue);
  a.textContent = text;
  parentNode.appendChild(a);
};

export const createButton1 = ({ text, parentNode, func }) => {
  const a = document.createElement('a');
  a.textContent = text;
  a.addEventListener('click', () => {
    func.classList.toggle('show_mail');
  });
  parentNode.appendChild(a);
};

export const createButton2 = ({
  identifier1,
  identifier2,
  text,
  url,
  parentNode
}) => {
  const btnApp = document.createElement('a');
  btnApp.classList.add(identifier1, identifier2);
  btnApp.textContent = text;
  btnApp.href = url;
  parentNode.appendChild(btnApp);
};
