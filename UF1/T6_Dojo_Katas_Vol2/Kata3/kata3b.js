// Funció principal
export function calcularDiesEntrenament() {
  // Demanar el nom al participant
  let nom = prompt('Introdueix el teu nom:');
  if (!nom) {
    nom = 'Atleta desconegut';
  }

  // Demanar l'esdeveniment al participant
  const esdevenimentInput = prompt(
    "Introdueix l'esdeveniment (marató, mitja marató, cursa 10k, triatló):"
  );
  const esdeveniment = esdevenimentInput ? esdevenimentInput.toLowerCase() : '';

  // Inicialitzar la variable 'dies'
  let dies;
  // Determinar els dies d'entrenament segons l'esdeveniment
  if (esdeveniment === 'marató') {
    dies = 50;
  } else if (esdeveniment === 'mitja marató') {
    dies = 30;
  } else if (esdeveniment === 'cursa 10k') {
    dies = 15;
  } else if (esdeveniment === 'triatló') {
    dies = 70;
  } else {
    console.log('Error: Esdeveniment desconegut.');
    return;
  }

  console.log(`${nom} està entrenant per a una ${esdeveniment}.`);
  console.log(`Li queden ${dies} dies d'entrenament.`);
}

// Invocar la funció principal (comentat durant els tests)
// calcularDiesEntrenament();
