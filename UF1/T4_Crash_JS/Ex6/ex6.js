// Funció per comprovar si un número és primer
function esPrimer(num) {
  // Si el número és menor o igual a 1, no és primer
  if (num <= 1) return false;

  // Recorrem els valors des de 2 fins a l'arrel quadrada del número
  // Si trobem algun divisor, retornem false (no és primer)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // El número té un divisor, per tant no és primer
    }
  }

  // Si no hem trobat divisors, el número és primer
  return true;
}

// Funció per generar una llista amb tots els nombres primers més petits que n
function generarPrimersFins(n) {
  const primers = []; // Inicialitzem un array buit per emmagatzemar els primers

  // Recorrem des de 2 fins al número n
  for (let i = 2; i < n; i++) {
    // Si el número i és primer, l'afegim a l'array de primers
    if (esPrimer(i)) {
      primers.push(i);
    }
  }

  // Retornem l'array amb tots els nombres primers generats
  return primers;
}

// Funció per trobar si un nombre primer es pot expressar com la suma de dos primers més petits
function trobarSumaPrimers(n) {
  // Comprovem si el número n és primer
  if (!esPrimer(n)) {
    console.log(`${n} no és un nombre primer.`);
    return; // Sortim de la funció si el número no és primer
  }

  // Generem tots els primers menors que n
  const primers = generarPrimersFins(n);

  // Recorrem l'array de nombres primers
  for (let i = 0; i < primers.length; i++) {
    // Per cada nombre primer, busquem una combinació amb un altre primer
    for (let j = i; j < primers.length; j++) {
      // Si la suma de dos primers és igual a n, mostrem el resultat i sortim
      if (primers[i] + primers[j] === n) {
        console.log(
          `${n} es pot expressar com la suma de ${primers[i]} + ${primers[j]}`
        );
        return; // Sortim perquè ja hem trobat una combinació
      }
    }
  }

  // Si cap combinació suma el número n, mostrem que no es pot expressar com la suma de dos primers
  console.log(
    `${n} no es pot expressar com la suma de dos primers més petits.`
  );
}

// Exemple d'execució per provar la funció
trobarSumaPrimers(10); // 10 es pot expressar com la suma de 3 + 7
trobarSumaPrimers(17); // 17 no es pot expressar com la suma de dos primers més petits.
trobarSumaPrimers(11); // 11 es pot expressar com la suma de 5 + 3
