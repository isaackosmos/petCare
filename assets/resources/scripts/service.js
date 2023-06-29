/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */

'use strict';

const btn = document.querySelector('.available-btn');

$('#email').parent().fadeOut(1);

btn.addEventListener('click', () => {
  document.getElementById('available-text').textContent = 'Carregando.';

  const avlb = () => {
    // eslint-disable-next-line no-alert
    window.alert('Servico disponivel para sua localizacao!');
    $('#available').fadeOut(1000);
    $('#reserva-form').fadeIn(1000);
  };

  setTimeout(avlb, 2000);
});

$('input').css('max-width', '200px');
$('input').css('width', '100%');
$('input').css('margin', 'auto');

$('#destino').css('max-width', '170px');
$('#destino').css('width', '100%');
$('#destino').css('margin', 'auto');

$('#mensagem').css('max-width', '300px');
$('#mensagem').css('width', '100%');
$('#mensagem').css('margin', 'auto');

$('#mensagem').nextAll('button:first').css('padding', '5px 10px');
$('#mensagem').nextAll('button:first').css('margin', '15px auto 0px auto');
$('#destino').prev('label').css('font-weight', 'bold');

$('#destino').children().addClass('opcao-destino');

$('input').focus(() => {
  $('input').prev('label').css('font-weight', 'bold');
});
