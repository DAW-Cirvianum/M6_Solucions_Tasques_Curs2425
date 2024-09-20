function registreCursa(edat, data, anticipada) {
  let numeroCursa;
  let horaInici;

  // Comprovem si tenen exactament 18 anys
  if (edat === 18) {
    return [997, "Punt d'informació"];
  }

  // Assignem el número de cursa
  if (edat > 18 && anticipada) {
    numeroCursa = 1000; // Adults amb inscripció anticipada
  } else {
    numeroCursa = 999; // Tots els altres
  }

  // Assignem l'hora d'inici basant-nos en l'edat i el registre
  if (edat > 18) {
    if (anticipada) {
      horaInici = '09:30'; // Adults amb inscripció anticipada
    } else {
      horaInici = '11:00'; // Adults amb inscripció a última hora
    }
  } else if (edat < 18) {
    horaInici = '12:30'; // Joves
  }

  // Retornem la tupla amb el número de cursa i l'hora d'inici
  return [numeroCursa, horaInici];
}

// Exemple d'execució
console.log(registreCursa(20, '2024-06-01', true)); // [1000, "09:30"]
console.log(registreCursa(20, '2024-06-01', false)); // [999, "11:00"]
console.log(registreCursa(17, '2024-06-01', true)); // [999, "12:30"]
console.log(registreCursa(18, '2024-06-01', true)); // [997, "Punt d'informació"]
