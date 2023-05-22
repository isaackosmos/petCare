const card1 = document.querySelector(".service1");
const card2 = document.querySelector(".service2");
const url = "/app/adress.html";

function addresTab(url) {
  const win = window.open(url, "_blank");
  win.focus;
}

card1.addEventListener("click", () => {
  addresTab(url);
});
card2.addEventListener("click", () => {
  addresTab(url);
});
