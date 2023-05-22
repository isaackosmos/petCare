welcome();

function welcome() {
  let terrestrial = confirm(
    `Seja bem vindo! Você é terraqueo?('OK' para confirmar e 'Cancelar' para não.)`
  );

  if (terrestrial) {
    let name = prompt(`Qual o seu nome?`);

    alert(
      `Aqui voce encontra os melhores servicos de viagem espacial, ${name}!`
    );
  } else {
    alert(`संस्कृत!`);
  }
}

window.onload = function () {
  window.setInterval(function () {
    let text = document.getElementById("description-span").innerText;

    if (text == "Saturno.") {
      document.getElementById("description-span").textContent = "Lua.";
    } else if (text == "Lua.") {
      document.getElementById("description-span").textContent = "Andrómeda.";
    } else {
      document.getElementById("description-span").textContent = "Saturno.";
    }
  }, 2000);
};
