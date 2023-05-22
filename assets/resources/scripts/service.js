const btn = document.querySelector(".available-btn");
let original = document.getElementById("available-text").innerText;

btn.addEventListener("click", () => {
  document.getElementById("available-text").textContent = "Carregando.";
  setTimeout(avlb, 2000);
});

let avlb = function () {
  alert(`Servico disponivel para sua localizacao!`);
  document.getElementById("available-text").textContent = original;
};
