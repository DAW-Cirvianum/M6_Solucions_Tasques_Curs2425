// El mètode reduce és un mètode de JavaScript que permet aplicar una funció a
// cada element d'un array i reduir l'array a un únic valor.
// reduce(callbackFn, initialValue)
// reduce((accum, currentValue)=>{}, initialValue)
function sum(array) {
  //Quan només tenim una sentència podem estalviarnos {} amb Arrow Functions
  return array.reduce((accum, valorActual) => accum + valorActual);
}

// Nested reduce
// Compte! Si no fem ús d'un valor inicial a la funció exterior
// ens trobarem que multipliquem el l'enter resultat del reduce interior
// pel valor de l'array exterior, en aquest cas un altre array. per ex:
// (1*2*3=6)*[4,5] = NaN
// function productAll(array) {}

// Per tal que poder multiplicar els valors dels arrays dins d'un array, hem de pensar a fer servir un altre reduce (o nested reduce)
function productAll(array) {
  return array.reduce(
    (result, numbers) =>
      result * numbers.reduce((mul, current) => mul * current, 1),
    1
  );
}

// var input = [
//   ['Thundercats', '80s'],
//   ['The Powerpuff Girls', '90s'],
//   ['Sealab 2021', '00s'],
// ];

//Ho podem fer aplicant destructuring d'un Array!!!
//Compte amb l'ús de la notació de punts per afegir el parell key-value!
// Amb la notació de punts i corxetes, pots:
///// accedir al valor d'una propietat pel seu clau
///// modificar el valor d'una propietat existent pel seu clau i
///// afegir una nova propietat a un objecte

//Si el valor amb el que accediu (o afegiu) una variable no el coneixeu, opteu per
//la notació amb "corxetes"

function objectify(array) {
  // Podem rebre directament els valors de la nostra array a través del destructuring de l'array
  return array.reduce((objecte, [key, value]) => {
    objecte[key] = value;
    console.log(objecte);
    return objecte;
  }, {});
}

function luckyNumbers(array) {
  return array.reduce((frase, valorActual, index) => {
    const subfrase =
      index === array.length - 1 ? ` and ${valorActual}` : ` ${valorActual},`;
    return (frase += subfrase);
  }, 'Your lucky numbers are:');
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers,
};
