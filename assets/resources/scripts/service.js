/* eslint-disable strict */

'use strict';

const btn = document.querySelector('.available-btn');
const original = document.getElementById('available-text').innerText;

btn.addEventListener('click', () => {
  document.getElementById('available-text').textContent = 'Carregando.';

  const avlb = () => {
    // eslint-disable-next-line no-alert
    window.alert('Servico disponivel para sua localizacao!');
    document.getElementById('available-text').textContent = original;
  };

  setTimeout(avlb, 2000);
});
