let intentsRestants = 3;
let captchaSuperat = false;
let num1, num2, operacio, respostaCorrecta;

function generarOperacio() {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  operacio = Math.random() < 0.5 ? '+' : '-';

  if (operacio === '+') {
    respostaCorrecta = num1 + num2;
  } else {
    respostaCorrecta = num1 - num2;
  }

  document.getElementById('operacio').textContent =
    `Quant és ${num1} ${operacio} ${num2}?`;
}

function comprovarResposta() {
  const respostaUsuari = parseInt(document.getElementById('resposta').value);
  const missatge = document.getElementById('missatge');

  if (respostaUsuari === respostaCorrecta) {
    missatge.textContent = 'Resposta correcta! Has passat el captcha.';
    captchaSuperat = true;
  } else {
    intentsRestants--;
    if (intentsRestants > 0) {
      missatge.textContent = `Resposta incorrecta. Et queden ${intentsRestants} intents.`;
      generarOperacio(); // Genera una nova operació
    } else {
      missatge.textContent =
        'Has esgotat tots els intents. No has passat el captcha.';
      document.getElementById('resposta').disabled = true;
    }
  }
  document.getElementById('resposta').value = ''; // Neteja el camp d'entrada
}

// Inicialitzar la primera operació
generarOperacio();
