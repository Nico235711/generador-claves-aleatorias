import {
  botonGenerar,
  cantidad,
  divContrasenia,
  inputContrasenia,
} from "./variables.js";

function generarContraAleatoria() {
  const numero = parseInt(cantidad.value);
  const digitos =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let contrasenia = "";
  const contraSegura = document.createElement("p");
  contraSegura.classList.add("contra-segura");
  for (let index = 0; index < numero; index++) {
    const indiceAleatorio = Math.floor(Math.random() * digitos.length);
    contrasenia += digitos[indiceAleatorio];
  }
  inputContrasenia.value = contrasenia;
  if (contrasenia.length <= 8) {
    contraSegura.innerHTML =
      "Tu contraseña es <span class='debil'>debil</span>";
  } else {
    contraSegura.innerHTML =
      "Tu contraseña es <span class='fuerte'>fuerte</span>";
  }
  divContrasenia.append(contraSegura);
  // console.log(contraSegura);
  
  if (document.body.contains(contraSegura)) {
    setTimeout(() => {
      contraSegura.remove()
    }, 2000);
  }

  console.log(inputContrasenia.value);
  
  if (inputContrasenia.value.length >= 0) {
    setTimeout(() => {
      inputContrasenia.value = ""
    }, 4000);
  }
}

botonGenerar.addEventListener("click", generarContraAleatoria);
