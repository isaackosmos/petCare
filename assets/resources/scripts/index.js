welcome();

function welcome() {
  let pet = confirm(
    "Seja bem vindo! Voce possui um pet? ('OK' para confirmar e 'Cancelar' para nao.)"
  );

  if (pet) {
    let petname = prompt("Qual o nome dele?");

    alert(
      "Aqui voce encontra servicos perfeitos para cuidar do " + petname + "!"
    );
  } else {
    alert("Ah, tudo bem! Sinta-se a vontade para conhecer o site.");
  }
}

window.onload = function () {
  window.setInterval(function () {
    let text = document.getElementById("description-span").innerText;

    if (text == "Pet.") {
      document.getElementById("description-span").textContent = "Cachorro.";
    } else if (text == "Cachorro.") {
      document.getElementById("description-span").textContent = "Gato.";
    } else {
      document.getElementById("description-span").textContent = "Pet.";
    }
  }, 2000);
};
