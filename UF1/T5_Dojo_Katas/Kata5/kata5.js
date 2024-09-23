export function counter() {
  let comptador = 0; // Variable privada del comptador
  return function () {
    comptador++; // Incrementa el comptador
    return comptador; // Retorna el valor actual del comptador
  };
}

const count = counter();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log(count()); // 4
