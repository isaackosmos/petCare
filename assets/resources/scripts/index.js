welcome();

function welcome() {
  let pet = confirm("Seja bem vindo! Voce possui um pet?");

  if (pet) {
    let petname = prompt("Qual o nome dele?");

    alert(
      "Aqui voce encontra servicos perfeitos para cuidar do " + petname + "!"
    );
  } else {
    alert("Ah, tudo bem! Sinta-se a vontade para conhecer o site.");
  }
}
