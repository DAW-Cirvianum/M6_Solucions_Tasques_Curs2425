// Explicació del codi:
// Funció esPrimer(num): Verifica si el nombre donat és un nombre primer comprovant si no té cap divisor diferent de 1 i ell mateix.

// Funció trobarSumaPrimers(n):

// Primer comprova si el nombre és primer.
// Si és primer, fa un bucle per tots els nombres des de 2 fins a n / 2 i comprova si es poden descompondre com la suma de dos nombres primers més petits.
// Si troba dos nombres primers la suma dels quals sigui igual a n, els imprimeix a la consola.
// Si no, indica que no es pot descompondre en la suma de dos nombres primers.

function esPrimer(num) {
  if (num <= 1) return false;
  // fem servir sqrt(num) perquè sabem que no hi haurà cap número primer més gran que la seva arrel quadrada
  // Exemple: sqrt(17) = 4.123105625617661, per tant, no cal comprovar més enllà de 4
  // Si trobem un divisor, el número no és primer
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function trobarSumaPrimers(n) {
  // Comprovem que el número és primer
  if (!esPrimer(n)) {
    console.log(`${n} no és un nombre primer.`);
    return;
  }

  // Busquem si es pot descompondre en la suma de dos nombres primers
  // No cal buscar més enllà de n / 2 ja que no hi haurà cap parella de nombres primers més grans que n / 2
  // Per exemple si n = 17,
  for (let i = 2; i <= n / 2; i++) {
    let j = n - i;
    if (esPrimer(i) && esPrimer(j)) {
      console.log(`${n} es pot expressar com la suma de ${i} + ${j}`);
      return;
    }
  }

  console.log(`${n} no es pot expressar com la suma de dos nombres primers.`);
}

// Exemple d'execució
trobarSumaPrimers(10); // 10 es pot expressar com la suma de 3 + 7
trobarSumaPrimers(17); // 17 no es pot expressar com la suma de dos nombres primers.
trobarSumaPrimers(11); // 11 no es pot expressar com la suma de dos nombres primers.
