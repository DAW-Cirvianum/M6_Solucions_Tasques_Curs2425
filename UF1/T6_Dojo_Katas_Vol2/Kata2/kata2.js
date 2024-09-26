// Funció per obtenir l'elecció de l'usuari
function getUserChoice(userInput) {
  // Convertim l'entrada a minúscules per assegurar la comparació correcta
  userInput = userInput.toLowerCase();
  // Comprovem si l'entrada és vàlida
  if (
    userInput === 'pedra' ||
    userInput === 'paper' ||
    userInput === 'tisora'
  ) {
    return userInput;
  } else {
    console.log(
      'Error: Elecció no vàlida. Si us plau, tria entre "pedra", "paper" o "tisora".'
    );
  }
}

// Funció per obtenir l'elecció aleatòria de l'ordinador
function getComputerChoice() {
  const nombresAleatoris = Math.floor(Math.random() * 3);
  switch (nombresAleatoris) {
    case 0:
      return 'pedra';
    case 1:
      return 'paper';
    case 2:
      return 'tisora';
  }
}

// Funció per determinar el guanyador
function determineWinner(userChoice, computerChoice) {
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
}

// Funció per iniciar el joc
function playGame() {
  // Demanem a l'usuari que introdueixi la seva elecció
  const userInput = prompt('Tria pedra, paper o tisora:');
  const userChoice = getUserChoice(userInput);

  // Si l'usuari ha introduït una elecció vàlida
  if (userChoice) {
    const computerChoice = getComputerChoice();
    console.log(`Tu has triat: ${userChoice}`);
    console.log(`L'ordinador ha triat: ${computerChoice}`);

    const resultat = determineWinner(userChoice, computerChoice);
    console.log(resultat);
  }
}

// Iniciem el joc
playGame();
