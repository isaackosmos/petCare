const planet = document.getElementById("planetID");

planet.addEventListener("click", () => {
  let x = parseFloat(prompt("ID de seu planeta/estrela?"));
  let y = time(x);
  alert(`${y} minutos Luz para chegarmos a sua localizacao!`);
});

let time = function (id) {
  return parseFloat(id * 3);
};
