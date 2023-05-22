const btn = document.querySelector(".available-btn");
let original = document.getElementById("available-text").innerText;

btn.addEventListener("click", () => {
  document.getElementById("available-text").textContent = "Carregando.";

  let avlb = function () {
    alert(`Servico disponivel para sua localizacao!`);
    document.getElementById("available-text").textContent = original;
  };

  setTimeout(avlb, 2000);
});
