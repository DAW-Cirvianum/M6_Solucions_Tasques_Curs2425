// Funció per actualitzar el saldo i afegir la nova transacció a l'historial
export function updateBalance(account, amount) {
  // Actualitzem el balance sumant l'amount al balance existent
  const newBalance = account.balance + amount;

  // Creem una còpia de l'historial de transaccions manualment
  const newTransactions = account.transaction.slice(); // Fem una còpia de l'array de transaccions
  newTransactions.push(amount); // Afegim la nova transacció
  // Això és pot fer també amb l'operador spread, ho veurem més endavant

  // Retornem un nou objecte amb el balance i les transactions actualitzades
  return {
    balance: newBalance,
    transaction: newTransactions,
  };
}
