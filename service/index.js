import { valida } from "./validaciones.js";

const login = document.querySelector(".login");
const redir = document.querySelector(".saltoaSubtitulo");
const inputs = document.querySelectorAll("input");

login.addEventListener("click", function () {
  window.location.href = "login.html";
});

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
