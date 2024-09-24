// main.js

import {
  generarNombreAleatori,
  decidirOperacio,
  calcularRespostaCorrecta,
  comprovarResposta,
} from './captcha';

// Nombre màxim d'intents
let intentsRestants = 3;
let captchaSuperat = false;

while (intentsRestants > 0 && !captchaSuperat) {
  // Generar dos nombres aleatoris entre 0 i 9
  const num1 = generarNombreAleatori();
  const num2 = generarNombreAleatori();

  // Decidir aleatòriament l'operació
  const operacio = decidirOperacio();

  // Calcular la resposta correcta
  const respostaCorrecta = calcularRespostaCorrecta(num1, num2, operacio);

  // Demanar a l'usuari que introdueixi la resposta
  const respostaUsuari = parseInt(
    prompt(
      `Intent ${4 - intentsRestants}: Quant és ${num1} ${operacio} ${num2}?`
    )
  );

  // Comprovar si la resposta és correcta
  if (comprovarResposta(respostaUsuari, respostaCorrecta)) {
    console.log('Resposta correcta! Has passat el captcha.');
    captchaSuperat = true;
  } else {
    console.log('Resposta incorrecta.');
    intentsRestants--;
    if (intentsRestants > 0) {
      console.log(`Et queden ${intentsRestants} intents.`);
    } else {
      console.log('Has esgotat tots els intents. No has passat el captcha.');
    }
  }
}
