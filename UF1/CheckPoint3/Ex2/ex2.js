// Ex2/ex2.js

// Aquesta funció crea un objecte 'creature' amb propietats com el nom, tipus, atac especial, i nivell de poder.
// name: El nom de la criatura.
// type: El tipus de la criatura, que pot ser 'foc', 'aigua', 'terra' o 'aire'.
export const createCreature = (name, type) => {
  // Objecte que associa cada tipus a un atac especial específic.
  const specialAttacks = {
    foc: 'Llama Infernal',
    aigua: "Torrents d'Aigua",
    terra: 'Terra Poderosa',
    aire: 'Furia del Vent',
  };

  // Selecciona l'atac especial segons el 'type' passat; si el 'type' no existeix, usa 'Atac Bàsic' com a valor per defecte.
  const specialAttack =
    type === 'foc'
      ? 'Llama Infernal'
      : type === 'aigua'
        ? "Torrents d'Aigua"
        : type === 'terra'
          ? 'Terra Poderosa'
          : type === 'aire'
            ? 'Furia del Vent'
            : 'Atac Bàsic';

  //O també amb un "in" per comprovar si existeix la propietat.
  //const specialAttack = type in specialAttacks ? specialAttacks[type] : 'Atac Bàsic';
  // Això ho podem simplificar amb l'operador OR (||) per obtenir el mateix resultat.
  //const specialAttack = specialAttacks[type] || 'Atac Bàsic';
  // O també podríem utilitzar un ternari per obtenir el mateix resultat.

  // Genera un nivell de poder aleatori entre 1 i 100.
  const powerLevel = Math.floor(Math.random() * 100) + 1;

  // Retorna l'objecte 'creature' amb les propietats definides.
  return {
    name,
    type,
    specialAttack,
    powerLevel,
  };
};

// Aquesta funció descriu la criatura, utilitzant les seves propietats per crear un missatge.
// creature: Un objecte que conté 'name', 'type', 'specialAttack' i 'powerLevel'.
export const describeCreature = (creature) => {
  // Desestructuració de l'objecte per accedir fàcilment a les propietats.
  const { name, type, specialAttack, powerLevel } = creature;

  let description;

  // Utilitza un switch per determinar el missatge segons el 'type' de la criatura.
  switch (type) {
    case 'foc':
    case 'aigua':
    case 'terra':
    case 'aire':
      // Per als tipus coneguts, crea un missatge descriptiu incloent el tipus i atac especial.
      description = `${name} és una criatura de ${type} amb l'atac especial: ${specialAttack} i un nivell de poder de ${powerLevel}.`;
      break;
    default:
      // Si el 'type' és desconegut, utilitza un missatge genèric amb 'criatura desconeguda'.
      description = `${name} és una criatura desconeguda amb l'atac especial: ${specialAttack} i un nivell de poder de ${powerLevel}.`;
  }

  // Retorna la descripció completa de la criatura.
  return description;
};
