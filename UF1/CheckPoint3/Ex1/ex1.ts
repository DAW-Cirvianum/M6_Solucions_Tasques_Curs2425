// Ex1/ex1.ts

// Tipus que representa els diferents tipus de missió
type MissionType = 'exploracio' | 'colonitzacio' | 'mineria';

// Interfície que representa el combustible
interface Combustible {
  quantitat: number;
  tipus: string;
  preu: number;
}

// Funció que retorna el cost base d'una missió en funció del tipus de missió
export const getBaseCost = (missionType: MissionType): number => {
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
export const calculateTotalCost = (
  baseCost: number,
  distance: number
): number => (distance > 1000 ? baseCost * 1.2 : baseCost);

// Funció que comprova si hi ha prou combustible per viatjar una distància donada
// Paràmetres:
// - combustible: un objecte que conté els detalls del combustible
// - distance: la distància que es vol viatjar
// Retorna un missatge indicant si hi ha prou combustible per viatjar la distància donada
export const checkCombustible = (
  { quantitat, tipus, preu }: Combustible,
  distance: number
): string =>
  // Si la quantitat de combustible és suficient per la distància
  quantitat >= distance
    ? // Retorna un missatge indicant que es pot viatjar
      `Pots viatjar amb ${quantitat} unitats de ${tipus} a un preu de ${preu}€ per unitat.`
    : // Si no hi ha prou combustible, retorna un missatge indicant-ho
      'No tens prou combustible per viatjar.';

// Examples of function declarations.
// Function declaration
/* function exampleFunctionDeclaration(param: string): void {
  console.log(param);
}

// Function expression
const exampleFunctionExpression = function (param: string): void {
  console.log(param);
};


// Arrow function
const exampleArrowFunction = (param: string): void => {
  console.log(param);
}; */
