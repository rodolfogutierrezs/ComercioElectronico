import { valida } from "./validaciones.js";
import {consulta} from "./chkAnesartnoc.js";

const inputs = document.querySelectorAll("input");
const usuario = document.querySelector("#email");
const contrasena = document.querySelector("#contrasena");
const formulario = document.querySelector("#form");
var resultado;
var privilegio;

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

formulario.addEventListener("submit", event => {
  event.preventDefault();
  console.log(usuario.value, " -- ", contrasena.value);
  consulta(usuario,contrasena,resultado,privilegio);

});
