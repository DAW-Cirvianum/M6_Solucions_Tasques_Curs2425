export function counter() {
  let comptador = 0; // Variable privada del comptador
  return {
    increment: function () {
      comptador++; // Incrementa el comptador
      return comptador; // Retorna el valor actual del comptador
    },
    reset: function () {
      comptador = 0; // Reinicia el comptador a 0
      return comptador; // Retorna el comptador reiniciat
    },
  };
}

const counter1 = counter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.reset()); // 0
console.log(counter1.increment()); // 1

const counter2 = counter(); // Nou comptador independent
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.reset()); // 0

// Ara counter() retorna un objecte amb dues funcions: increment() i reset(). La
// funció increment() augmenta el valor del comptador, mentre que reset() el
// reinicia a 0. Com que fem servir closures, els comptadors són independents
// entre ells, i cada comptador manté el seu propi estat.
