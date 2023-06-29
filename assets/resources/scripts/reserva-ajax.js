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

const formReserva = document.getElementById('reserva-form');

formReserva.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
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

fetch('http://localhost:3000/destinos')
  .then((response) => response.json())
  .then((data) => {
    const select = document.getElementById('destino');

    data.forEach((destino) => {
      const option = document.createElement('option');
      option.value = destino.value;
      option.textContent = destino.nome;
      select.appendChild(option);
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Erro:', error);
  });
