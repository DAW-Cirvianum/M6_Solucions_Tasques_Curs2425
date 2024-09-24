// Nombre màxim d'intents que té l'usuari
let intentsRestants = 3;

// Variable per indicar si l'usuari ha superat el captcha
let captchaSuperat = false;

// Bucle que s'executa mentre l'usuari tingui intents i no hagi superat el captcha
while (intentsRestants > 0 && !captchaSuperat) {
  // Generar dos nombres aleatoris entre 0 i 9
  const num1 = Math.floor(Math.random() * 10); // Genera un nombre entre 0 i 9
  const num2 = Math.floor(Math.random() * 10); // Genera un altre nombre entre 0 i 9

  // Decidir aleatòriament si l'operació serà una suma o una resta
  const operacio = Math.random() < 0.5 ? '+' : '-';
  // Si Math.random() retorna un valor menor que 0.5, operació és '+', sinó és '-'

  // Calcular la resposta correcta en funció de l'operació
  let respostaCorrecta;
  if (operacio === '+') {
    respostaCorrecta = num1 + num2; // Si és suma, sumem els dos nombres
  } else {
    respostaCorrecta = num1 - num2; // Si és resta, restem els dos nombres
  }

  // Demanar a l'usuari que introdueixi la resposta a través d'un prompt
  const respostaUsuari = parseInt(
    prompt(
      `Intent ${4 - intentsRestants}: Quant és ${num1} ${operacio} ${num2}?`
    )
  );
  // parseInt converteix la cadena introduïda per l'usuari a un nombre enter

  // Comprovar si la resposta de l'usuari és correcta
  if (respostaUsuari === respostaCorrecta) {
    console.log('Resposta correcta! Has passat el captcha.');
    captchaSuperat = true; // L'usuari ha superat el captcha, sortim del bucle
  } else {
    console.log('Resposta incorrecta.');
    intentsRestants--; // Reduïm en 1 el nombre d'intents restants
    if (intentsRestants > 0) {
      console.log(`Et queden ${intentsRestants} intents.`);
    } else {
      console.log('Has esgotat tots els intents. No has passat el captcha.');
    }
  }
}
