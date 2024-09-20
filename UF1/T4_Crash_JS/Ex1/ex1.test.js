// Importa la funció a testejar
const convertirFahrenheitACelsius = require('./ex1'); // Assegura't que el camí sigui correcte

// // Defineix una prova
// test('Conversió de Fahrenheit a Celsius', () => {
//   // Prova la funció amb un valor de Fahrenheit conegut (per exemple, 32°F)
//   expect(convertirAFahrenheitACelsius(32)).toBe(0); // 32°F és 0°C
//   expect(convertirAFahrenheitACelsius(212)).toBe(100); // 212°F és 100°C
//   expect(convertirAFahrenheitACelsius(-40)).toBe(-40); // -40°F és -40°C
//   expect(convertirAFahrenheitACelsius('no numèric')).toBe('Entrada no vàlida');
// });

test('Conversió de Fahrenheit a Celsius', () => {
  // Crida la funció amb un valor de Fahrenheit conegut
  const resultat = convertirFahrenheitACelsius(100);

  // Comprova si el resultat és el valor esperat
  expect(resultat).toBe(37); // 100°F s'espera que sigui 37°C
  expect(convertirFahrenheitACelsius(212)).toBe(100); // 212°F és 100°C
  expect(convertirFahrenheitACelsius(-40)).toBe(-40); // -40°F és -40°C
  expect(convertirFahrenheitACelsius('no numèric')).toBe(
    'Entrada no vàlida. Si us plau, introdueix una temperatura numèrica en graus Fahrenheit.'
  );
});
