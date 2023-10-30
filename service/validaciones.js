export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
        }
}

const tipoDeErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "customError",
  ];
  
  const mensajesDeError = {
    nombre: {
      valueMissing: "Debe indicar su nombre",
    },
    mensaje: {
      valueMissing: "Incluya su mensaje aquí",
      patternMismatch: "El mensaje puede tener un máximo de 120 caracteres.",
    },
    email:{
      valueMissing:"Debe incluir el correo que utiliza como nombre de usuario registrado",
      typeMismatch: "El correo (usuario) no es válido",
      patternMismatch: "La dirección de correo no corresponde a un formato válido",
    },
    contrasena:{
      valueMissing:"El campo contraseña no puede estar vacío",
      patternMismatch:"Debe tener al menos 8 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y un caracter especial",
    },
  };
    
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log("tipoDeInput, error: ",tipoDeInput, error);
        console.log("input.validity[error]: ",input.validity[error]);
        console.log("mensajesDeError[tipoDeInput][error]: ", mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }  