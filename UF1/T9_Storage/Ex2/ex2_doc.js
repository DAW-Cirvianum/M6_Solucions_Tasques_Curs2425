/**
 * Obté el color de fons guardat a `localStorage`.
 * @returns {string|null} El color de fons guardat o null si no existeix.
 */
function getSavedBackgroundColor() {
  return localStorage.getItem('colorFons');
}

/**
 * Guarda el color de fons seleccionat a `localStorage`.
 * @param {string} color - El color de fons seleccionat.
 */
function saveBackgroundColor(color) {
  localStorage.setItem('colorFons', color);
}

/**
 * Canvia el color de fons de la pàgina.
 * @param {string} color - El color de fons que s'ha d'aplicar.
 */
function applyBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

/**
 * Gestiona el canvi de color de fons. S'utilitza quan l'usuari fa clic en un botó.
 * @param {string} color - El color de fons seleccionat per l'usuari.
 */
function handleColorChange(color) {
  applyBackgroundColor(color); // Aplica el color seleccionat
  saveBackgroundColor(color); // Guarda el color a localStorage
}

/**
 * Aplica el color de fons guardat quan la pàgina es carrega.
 * Si no hi ha cap color guardat, no es fa cap canvi.
 */
window.onload = function () {
  const savedColor = getSavedBackgroundColor(); // Obté el color guardat
  if (savedColor !== null) {
    applyBackgroundColor(savedColor); // Aplica el color guardat
  }
};
