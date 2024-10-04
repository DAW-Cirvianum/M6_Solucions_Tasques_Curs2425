/**
 * Guarda el valor d'un camp del formulari a sessionStorage.
 * @param {string} camp - El nom del camp que es vol guardar.
 */
function guardarDada(camp) {
  let valor = document.getElementById(camp).value;
  sessionStorage.setItem(camp, valor);
}

/**
 * Recupera els valors dels camps del formulari des de sessionStorage
 * i omple els camps amb aquests valors si estan disponibles.
 */
/**
 * Recupera les dades emmagatzemades a la sessió i les assigna als camps del formulari.
 * Els camps del formulari es determinen per la llista 'camps'.
 * Si hi ha dades emmagatzemades a la sessió per a un camp, es recuperen i s'assignen al camp corresponent del formulari.
 */
function recuperarDades() {
  const camps = ['nom', 'cognoms', 'email']; // Llista dels camps del formulari
  camps.forEach((camp) => {
    let valor = sessionStorage.getItem(camp);
    if (valor !== null) {
      document.getElementById(camp).value = valor;
    }
  });
}

/**
 * Quan la pàgina es carrega, crida la funció recuperarDades per omplir
 * els camps del formulari amb les dades de sessionStorage si n'hi ha.
 */
window.onload = recuperarDades;
