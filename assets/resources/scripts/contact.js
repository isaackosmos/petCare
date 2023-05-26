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

// let number = [5, 5, 4, 7, 9, 9, 8, 3, 7, 8, 6, 7, 3];

// window.onload = function () {
//   for (i of number) {
//     i++;
//     document.getElementById('123').textContent = i;
//   }
// };
