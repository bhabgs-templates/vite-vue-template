const createDom = (node: string) => {
  const { body } = document;
  const btn = document.createElement(node);
  btn.setAttribute('src', '/ht_/libs/ht.js');
  body.appendChild(btn);
};
// eslint-disable-next-line import/prefer-default-export
export { createDom };
