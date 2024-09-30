// Definim un tipus per les opcions disponibles
type UserChoice = 'pedra' | 'paper' | 'tisora';

// Funció per obtenir l'elecció de l'usuari
function getUserChoice(userInput: string | null): UserChoice | undefined {
  // Afegit tipus als paràmetres i al retorn
  if (!userInput) {
    // Afegit control per si userInput és null
    console.log("Error: No s'ha introduït cap elecció.");
    return undefined;
  }

  // Convertim l'entrada a minúscules per assegurar la comparació correcta
  const input = userInput.toLowerCase(); // Assignació a una nova variable amb tipus string

  // Comprovem si l'entrada és vàlida
  if (input === 'pedra' || input === 'paper' || input === 'tisora') {
    return input;
  } else {
    console.log(
      'Error: Elecció no vàlida. Si us plau, tria entre "pedra", "paper" o "tisora".'
    );
    return undefined; // Assegurat que la funció sempre retorna un valor
  }
}

// Funció per obtenir l'elecció aleatòria de l'ordinador
function getComputerChoice(): UserChoice {
  // Afegit tipus de retorn
  const nombresAleatoris = Math.floor(Math.random() * 3);
  switch (nombresAleatoris) {
    case 0:
      return 'pedra';
    case 1:
      return 'paper';
    case 2:
      return 'tisora';
    default:
      return 'pedra'; // Afegit cas per defecte per complir el tipus de retorn
  }
}

// Funció per determinar el guanyador
function determineWinner(
  userChoice: UserChoice,
  computerChoice: UserChoice
): string {
  // Afegits tipus als paràmetres i al retorn
  if (userChoice === computerChoice) {
    return 'Empat!';
  }
  if (userChoice === 'pedra') {
    if (computerChoice === 'tisora') {
      return 'Has guanyat! Pedra trenca tisora.';
    } else {
      return 'Has perdut. Paper cobreix pedra.';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'pedra') {
      return 'Has guanyat! Paper cobreix pedra.';
    } else {
      return 'Has perdut. Tisora talla paper.';
    }
  }
  if (userChoice === 'tisora') {
    if (computerChoice === 'paper') {
      return 'Has guanyat! Tisora talla paper.';
    } else {
      return 'Has perdut. Pedra trenca tisora.';
    }
  }
  return 'Error en determinar el guanyador.'; // Afegit cas per defecte
}

// Funció per iniciar el joc
function playGame(): void {
  // Afegit tipus de retorn
  // Demanem a l'usuari que introdueixi la seva elecció
  const userInput: string | null = prompt('Tria pedra, paper o tisora:'); // Afegit tipus a userInput
  const userChoice = getUserChoice(userInput);

  // Si l'usuari ha introduït una elecció vàlida
  if (userChoice) {
    const computerChoice: UserChoice = getComputerChoice(); // Afegit tipus
    console.log(`Tu has triat: ${userChoice}`);
    console.log(`L'ordinador ha triat: ${computerChoice}`);

    const resultat: string = determineWinner(userChoice, computerChoice); // Afegit tipus
    console.log(resultat);
  }
}

// Iniciem el joc
playGame();
