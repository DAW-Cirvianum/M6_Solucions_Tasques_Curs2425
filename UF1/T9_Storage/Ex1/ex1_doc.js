/** @module Exercici 1 */

/**
 * Obté el comptador de visites de localStorage.
 * Si no existeix, inicialitza el comptador a 1 i el guarda a localStorage.
 * Si ja existeix, incrementa el comptador i actualitza el valor a localStorage.
 * @returns {any}
 */
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

/**
 * Actualitza el contingut de la pàgina amb el nombre de visites.
 * @param {number} comptador - El nombre de visites.
 */
function mostrarComptador(comptador) {
  document.getElementById('visit-counter').textContent = comptador;
}

// Crida les funcions per gestionar el comptador i mostrar el resultat
const visites = gestionarComptadorVisites();
mostrarComptador(visites);
