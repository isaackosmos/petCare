/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable comma-dangle */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
/* eslint-disable strict */

'use strict';

class Reserva {
  constructor(nome, email, destino, mensagem) {
    this.nome = nome;
    this.email = email;
    this.destino = destino;
    this.mensagem = mensagem;
  }
}

$.get('http://localhost:3000/destinos', 'json')
  .done((data) => {
    const select = $('#destino');

    data.forEach((destino) => {
      const option = $('<option>').val(destino.value).text(destino.nome);
      select.append(option);
    });
  })
  .fail((error) => {
    console.error('Erro:', error);
  });

const formReserva = document.getElementById('reserva-form');

formReserva.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = $('#nome').val();
  const email = document.getElementById('email').value;
  const destino = document.getElementById('destino').value;
  const mensagem = document.getElementById('mensagem').value;

  const reserva = new Reserva(nome, email, destino, mensagem);

  localStorage.setItem('reserva', JSON.stringify(reserva));
});

document.addEventListener('DOMContentLoaded', () => {
  const reservaSalva = localStorage.getItem('reserva');
  if (reservaSalva) {
    const reserva = JSON.parse(reservaSalva);
    document.getElementById('nome').value = reserva.nome;
    document.getElementById('email').value = reserva.email;
    document.getElementById('destino').value = reserva.destino;
    document.getElementById('mensagem').value = reserva.mensagem;
  }
});

$('#reserva-form').submit((event) => {
  event.preventDefault();

  const nome = $('#nome').val();
  const email = $('#email').val();
  const destino = $('#destino').val();
  const mensagem = $('#mensagem').val();

  $.ajax({
    url: '/api/reservas',
    method: 'POST',
    dataType: 'json',
    data: {
      nome: nome,
      email: email,
      destino: destino,
      mensagem: mensagem
    },
    success(data) {
      console.log(data);
      alert('Reserva enviada com sucesso!');
    },
    error(xhr, status, error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar a reserva. Por favor, tente novamente.');
    }
  });
});
