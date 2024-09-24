// captcha.js

// Funció per generar un nombre aleatori entre min i max (inclòs min i max)
export function generarNombreAleatori(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funció per decidir aleatòriament l'operació (+ o -)
export function decidirOperacio() {
  return Math.random() < 0.5 ? '+' : '-';
}

// Funció per calcular la resposta correcta donats dos nombres i una operació
export function calcularRespostaCorrecta(num1, num2, operacio) {
  if (operacio === '+') {
    return num1 + num2;
  } else if (operacio === '-') {
    return num1 - num2;
  } else {
    throw new Error('Operació no vàlida');
  }
}

// Funció per comprovar la resposta de l'usuari
export function comprovarResposta(respostaUsuari, respostaCorrecta) {
  return respostaUsuari === respostaCorrecta;
}
