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

  if ((index === null) || (index < 0)) {
    return false;
  }
  const msg = `CNH da galaxia de ${select.options[index].text} e valida!`;
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

// const email = document.getElementById('email');

// function validarOEmail() {
//   if (email.checkValidity() === false) {
//     email.setCustomValidity('Insira seu email terraqueo.');
//   }
//   email.setCustomValidity('');
// }

// function validaEmail(input) {
//   if (input.value === '') {
//     input.setCustomValidity('Insira seu email terraqueo.');
//   } else {
//     input.setCustomValidity('');
//   }
// }

// email.setCustomValidity('Insira um email terraqueo.');
// function updateMessage(input) {
//   if (input.value === '') { }
//   input.setCustomValidity('');
// }

// function updateMessage(input) {
//   if (input.validity.typeMismatch) {
//     input.setCustomValidity('Insira um email terraqueo.');
//   }
//   input.setCustomValidity('');
//   if (input.validity.valueMissing) {
//     input.setCustomValidity('Insira seu email.');
//   }
//   input.setCustomValidity('');
// }

// email.addEventListener('invalid', (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity('Insira um email terraqueo.');
//   }
//   email.setCustomValidity('');
//   if (email.validity.valueMissing) {
//     email.setCustomValidity('Insira seu email.');
//   }
//   email.setCustomValidity('');
// });

// email.oninvalid = email.setCustomValidity('Insira um email terraqueo.');
// email.onsubmit = email.setCustomValidity('');
