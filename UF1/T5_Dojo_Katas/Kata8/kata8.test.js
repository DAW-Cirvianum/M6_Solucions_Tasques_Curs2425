import { updateBalance } from './kata8'; // Assegura't que el camí sigui correcte segons on tinguis la funció implementada

describe('updateBalance', () => {
  test("hauria d'actualitzar el saldo i afegir la transacció per account1", () => {
    const account1 = { balance: 100, transaction: [50, -20, 30, -10] };
    const result = updateBalance(account1, 50);
    expect(result).toEqual({
      balance: 150,
      transaction: [50, -20, 30, -10, 50],
    });
  });

  test("hauria d'actualitzar el saldo i afegir la transacció per account2", () => {
    const account2 = { balance: 200, transaction: [-50, -30, 20] };
    const result = updateBalance(account2, -30);
    expect(result).toEqual({ balance: 170, transaction: [-50, -30, 20, -30] });
  });

  test("hauria d'actualitzar el saldo i afegir la transacció per account3", () => {
    const account3 = { balance: 500, transaction: [100, -200, -50, 100] };
    const result = updateBalance(account3, 100);
    expect(result).toEqual({
      balance: 600,
      transaction: [100, -200, -50, 100, 100],
    });
  });
});
