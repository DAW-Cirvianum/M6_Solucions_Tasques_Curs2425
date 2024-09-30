Per convertir aquest codi JavaScript a TypeScript, cal afegir tipus a les funcions i variables, i fer alguns ajustaments per assegurar que el tipus de dades és consistent. A continuació et comento els principals canvis i ajustaments:

### 1. **Declaració de tipus**
   - Afegir tipus d'entrada i de retorn a les funcions.
   - Assegurar-se que els valors retornats siguin del tipus correcte.

### Principals canvis:
1. **Definir el tipus `Choice`**: He creat un tipus `Choice` que conté les opcions vàlides: `'pedra'`, `'paper'`, i `'tisora'`. Això ens ajuda a limitar les possibles opcions tant per l'usuari com per l'ordinador.
2. **Afegir tipus a les funcions**: 
   - `getUserChoice(userInput: string): Choice | undefined`: La funció ara retorna un tipus definit (`Choice`) o `undefined` si l'entrada no és vàlida.
   - `getComputerChoice(): Choice`: La funció retorna un `Choice` sempre.
   - `determineWinner(userChoice: Choice, computerChoice: Choice): string`: Afegit que sempre retorna un string.
3. **Control d'errors**: El codi maneja situacions com valors nuls de `prompt()` i errors en casos inesperats en el `switch` de `getComputerChoice`.
4. **Seguretat en els retorns**: Sempre assegurem que es retorna algun valor, fins i tot en situacions excepcionals.

Amb aquests canvis, el codi s'ajusta a les bones pràctiques de TypeScript.