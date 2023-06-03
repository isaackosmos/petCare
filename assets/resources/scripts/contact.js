/* eslint-disable strict */
/* eslint-disable no-alert */

'use strict';

const planet = document.getElementById('planetID');

const time = (id) => parseFloat(id * 3);

planet.addEventListener('click', () => {
  const id = parseFloat(window.prompt('ID de seu planeta/estrela?'));
  const y = time(id);

  const msg = `${y} minutos Luz para chegarmos a sua localizacao!`;
  window.alert(msg);
});

const form = document.getElementsByTagName('form')[0];
document.forms[0].elements[2].value = 'Terra.';

function validaSelect() {
  const select = document.getElementById('galaxy');
  const index = select.selectedIndex;

  if (index === null || index < 0) {
    return false;
  }
  const msg = `CNH da galaxia de ${select.options[index].text} é valida!`;
  alert(msg);
  return true;
}

form.onsubmit = () => {
  if (form.name.value === '') {
    alert('Preencha todos os campos.');
    return false;
  }
  validaSelect();
  alert('Cadastro feito!');
  return true;
};

const email = document.getElementById('email');

// eslint-disable-next-line no-unused-vars
email.addEventListener('invalid', (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Insira um email Terraqueo.');
  } else if (email.validity.valueMissing) {
    email.setCustomValidity('Insira seu email por favor.');
  } else {
    email.setCustomValidity('');
  }
});

const regexTelefone = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/;
const numeroTelefone = document.getElementById('tel').value;

if (regexTelefone.test(numeroTelefone)) {
  document.getElementById('tel').setCustomValidity('');
} else {
  document
    .getElementById('tel')
    .setCustomValidity('Número de telefone inválido! :(');
}
