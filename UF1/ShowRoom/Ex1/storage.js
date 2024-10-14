/**
 * Obté el color guardat al local storage
 * @returns {string|null}
 */

function getSavedBackgroundColor() {
  return localStorage.getItem('colorFons');
}

/**
 * Guardar color al LS
 * @param {string} color
 */
function saveBackgroundColor(color) {
  localStorage.setItem('colorFons', color);
}
/**
 * Canviar el color de fons de la pàgina
 * @param {string} color
 */
function applyBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
/**
 * Gestiona el canvi de color quan l'usuari el selecciona
 * @param {string} color
 */
function handleColorChange(color) {
  applyBackgroundColor(color);
  saveBackgroundColor(color);
}
/**
 * Lògica general del programa quan es carrega
 */
window.onload = function () {
  const savedColor = getSavedBackgroundColor(); // Obté el color guardat
  if (saveColor !== null) {
    applyBackgroundColor(saveColor);
  }
};
