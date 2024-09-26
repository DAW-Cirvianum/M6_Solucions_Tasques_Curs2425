// Definim un objecte amb els esdeveniments i els dies d'entrenament
const esdeveniments = {
  marató: 50,
  'mitja marató': 30,
  'cursa 10k': 15,
  triatló: 70,
};

// Funció principal
function calcularDiesEntrenament() {
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

  // Comprovar si l'esdeveniment és vàlid
  if (esdeveniments.hasOwnProperty(esdeveniment)) {
    const dies = esdeveniments[esdeveniment];
    console.log(`${nom} està entrenant per a una ${esdeveniment}.`);
    console.log(`Li queden ${dies} dies d'entrenament.`);
  } else {
    console.log('Error: Esdeveniment desconegut.');
  }
}

// Invocar la funció principal
calcularDiesEntrenament();
