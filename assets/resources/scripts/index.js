/* eslint-disable strict */
/* eslint-disable no-alert */

'use strict';

function welcome() {
  const terrestrial = window.confirm(
    'Seja bem vindo! Você é terraqueo?("OK" para sim e "Cancelar" para não.)',
  );

  if (terrestrial) {
    const name = window.prompt('Qual o seu nome?');
    window.alert(
      `Aqui voce encontra os melhores servicos de viagem espacial, ${name}!`,
    );
  } else {
    window.alert('संस्कृत!');
  }
}

welcome();

window.onload = () => {
  window.setInterval(() => {
    const text = document.getElementById('description-span').innerText;

    if (text === 'Saturno.') {
      document.getElementById('description-span').textContent = 'Lua.';
    } else if (text === 'Lua.') {
      document.getElementById('description-span').textContent = 'Andrómeda.';
    } else {
      document.getElementById('description-span').textContent = 'Saturno.';
    }
  }, 2000);
};
