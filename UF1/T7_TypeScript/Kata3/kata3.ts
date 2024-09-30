// Definim un tipus per els noms d'esdeveniments disponibles
type Esdeveniment = 'marató' | 'mitja marató' | 'cursa 10k' | 'triatló';

// Definim un objecte amb els esdeveniments i els dies d'entrenament
const esdeveniments: Record<Esdeveniment, number> = {
  // Afegit tipus `Record<Esdeveniment, number>` per assegurar les claus i valors
  marató: 50,
  'mitja marató': 30,
  'cursa 10k': 15,
  triatló: 70,
};

// Funció per verificar si un valor és un Esdeveniment vàlid
function isEsdeveniment(esdeveniment: string): esdeveniment is Esdeveniment {
  return esdeveniments.hasOwnProperty(esdeveniment);
}

// Funció principal
function calcularDiesEntrenament(): void {
  // Afegit tipus de retorn `void`
  // Demanar el nom al participant
  let nom: string | null = prompt('Introdueix el teu nom:'); // Afegit tipus `string | null` per gestionar possibles valors nuls
  if (!nom) {
    nom = 'Atleta desconegut';
  }

  // Demanar l'esdeveniment al participant
  const esdevenimentInput: string | null = prompt(
    "Introdueix l'esdeveniment (marató, mitja marató, cursa 10k, triatló):"
  ); // Afegit tipus `string | null`

  if (esdevenimentInput) {
    const esdeveniment = esdevenimentInput.toLowerCase() as string; // Convertim a minúscules

    // Utilitzem la funció de tipus guard per verificar la validesa
    if (isEsdeveniment(esdeveniment)) {
      const dies: number = esdeveniments[esdeveniment]; // Assignat tipus `number` a `dies`
      console.log(`${nom} està entrenant per a una ${esdeveniment}.`);
      console.log(`Li queden ${dies} dies d'entrenament.`);
    } else {
      console.log('Error: Esdeveniment desconegut.');
    }
  } else {
    console.log("Error: No s'ha introduït cap esdeveniment.");
  }
}

// Invocar la funció principal
calcularDiesEntrenament();
