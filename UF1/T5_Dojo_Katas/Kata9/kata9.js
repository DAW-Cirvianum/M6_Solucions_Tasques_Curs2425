// Funció per realitzar operacions bàsiques amb dos números
export function calculator(num1, operator, num2) {
  // Comprovem quin és l'operador passat com a argument
  switch (operator) {
    case '+':
      return num1 + num2; // Si l'operador és '+', sumem els dos números
    case '-':
      return num1 - num2; // Si l'operador és '-', restem els dos números
    case '*':
      return num1 * num2; // Si l'operador és '*', multipliquem els dos números
    case '/':
      return num1 / num2; // Si l'operador és '/', dividim els dos números
    default:
      return 'Operador no vàlid'; // Si l'operador no és cap dels anteriors, retornem un missatge d'error
  }
}
