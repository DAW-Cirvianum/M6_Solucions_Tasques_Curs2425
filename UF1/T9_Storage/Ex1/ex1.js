// Comprova si ja existeix un comptador al localStorage
function gestionarComptadorVisites() {
  // Comprova si ja existeix un comptador al localStorage
  let comptador = localStorage.getItem('comptador');

  // Si el comptador no existeix, inicialitza'l a 1
  if (comptador === null) {
    comptador = 1;
  } else {
    // Si existeix, incrementa el comptador
    comptador = parseInt(comptador) + 1;
  }

  // Guarda el nou valor actualitzat al localStorage
  localStorage.setItem('comptador', comptador);

  return comptador;
}

function mostrarComptador(comptador) {
  document.getElementById('visit-counter').textContent = comptador;
}

// Funció per gestionar la lògica del comptador com a tal.
const visites = gestionarComptadorVisites();

// Funció per mostrar les visites al document.
mostrarComptador(visites);
