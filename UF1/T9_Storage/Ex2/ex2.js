// Obté el color de fons guardat a localStorage
function getSavedBackgroundColor() {
  return localStorage.getItem('colorFons');
}

// Guarda el color de fons seleccionat a localStorage
function saveBackgroundColor(color) {
  localStorage.setItem('colorFons', color);
}

// Canvia el color de fons de la pàgina
function applyBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Gestiona el canvi de color quan l'usuari selecciona un color nou
function handleColorChange(color) {
  applyBackgroundColor(color); // Aplica el color seleccionat
  saveBackgroundColor(color); // Guarda el color a localStorage
}

// Aplica el color de fons guardat quan la pàgina es carrega
window.onload = function () {
  const savedColor = getSavedBackgroundColor(); // Obté el color guardat
  if (savedColor !== null) {
    applyBackgroundColor(savedColor); // Aplica el color guardat si n'hi ha
  }
};
