'use strict';
// Ex1/ex1.ts
Object.defineProperty(exports, '__esModule', { value: true });
exports.checkCombustible =
  exports.calculateTotalCost =
  exports.getBaseCost =
    void 0;
// Funció que retorna el cost base d'una missió en funció del tipus de missió
var getBaseCost = function (missionType) {
  switch (missionType) {
    case 'exploracio':
      return 1000;
    case 'colonitzacio':
      return 2000;
    case 'mineria':
      return 1500;
    default:
      return 0;
  }
};
exports.getBaseCost = getBaseCost;
// Això ho podríem haver implementat amb un objecte i la notació de claus
// export const getBaseCost = (missionType: MissionType): number => {
//   const baseCosts = {
//     exploracio: 1000,
//     colonitzacio: 2000,
//     mineria: 1500,
//   };
//   return baseCosts[missionType];
// };
// Funcío que calcula el cost total d'una missió en funció de la distància
var calculateTotalCost = function (baseCost, distance) {
  return distance > 1000 ? baseCost * 1.2 : baseCost;
};
exports.calculateTotalCost = calculateTotalCost;
// Funció que comprova si hi ha prou combustible per viatjar una distància donada
// Paràmetres:
// - combustible: un objecte que conté els detalls del combustible
// - distance: la distància que es vol viatjar
// Retorna un missatge indicant si hi ha prou combustible per viatjar la distància donada
var checkCombustible = function (_a, distance) {
  var quantitat = _a.quantitat,
    tipus = _a.tipus,
    preu = _a.preu;
  // Si la quantitat de combustible és suficient per la distància
  return quantitat >= distance
    ? // Retorna un missatge indicant que es pot viatjar
      'Pots viatjar amb '
        .concat(quantitat, ' unitats de ')
        .concat(tipus, ' a un preu de ')
        .concat(preu, '\u20AC per unitat.')
    : // Si no hi ha prou combustible, retorna un missatge indicant-ho
      'No tens prou combustible per viatjar.';
};
exports.checkCombustible = checkCombustible;
