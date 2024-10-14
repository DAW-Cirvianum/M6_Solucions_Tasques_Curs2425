## 💫 Exercici 1: Explorador Galàctic - TYPESCRIPT!!! (3 punts)

### Descripció:
Ets desenvolupador per a una agència espacial encarregada de planificar missions galàctiques. Has de crear un programa en TypeScript que calculi el cost total d'una missió espacial basant-se en el tipus de missió i la distància a explorar. A més, hauràs de verificar si hi ha suficient combustible per completar la missió, tenint en compte el tipus de combustible i el seu preu per unitat.

### Funcions a implementar:

1. **`getBaseCost(missionType: string): number`**
   - **Propòsit:** Retornar el cost base de la missió segons el tipus de missió seleccionat.
   - **Tipus de missió possibles:** `exploracio`, `colonitzacio`, `mineria`.
   - **Instruccions:**
     - Crea un objecte que emmagatzemi els costos associats a cada tipus de missió utilitzant literals de cadenes per les claus de l'objecte.
     - La funció rep `missionType` com a paràmetre i retorna el cost corresponent.
     - Si el tipus de missió no està reconegut, retorna `0`.

2. **`calculateTotalCost(baseCost: number, distance: number): number`**
   - **Propòsit:** Calcular el cost total de la missió tenint en compte la distància a explorar.
   - **Instruccions:**
     - Implementa una funció fletxa.
     - Si la distància és superior a 1.000 unitats galàctiques, afegeix un increment del 20% al cost base.
     - Utilitza un operador ternari per determinar si s'aplica l'increment.
     - Retorna el cost total ajustat.

3. **Gestió del Combustible**
   - **Propòsit:** Assegurar-se que hi hagi suficient combustible per completar la missió.
   - **Instruccions:**
     - Defineix un objecte literal `combustible` amb les propietats `quantitat`, `tipus` i `preu` per unitat.
     - Implementa una funció fletxa **`checkCombustible`** que:
       - Rep l'objecte `combustible` i la `distance` com a paràmetres.
       - Utilitza destructuring per extreure les propietats necessàries.
       - Utilitza un operador ternari per determinar si la quantitat de combustible és suficient.
       - Retorna un missatge indicant si és possible viatjar o no, incloent detalls sobre el combustible si és suficient. Utilitza **template literals** per incorporar variables en el missatge.

### Especificacions dels Tests:
Els tests verificaràn les següents funcionalitats:

1. **Funció `getBaseCost`:**
   - Passar `missionType` com a `'exploracio'` retorna `1000`.
   - Passar `missionType` com a `'colonitzacio'` retorna `2000`.
   - Passar `missionType` com a `'mineria'` retorna `1500`.
   - Passar un `missionType` no reconegut com a `'unknown'` retorna `0`.

2. **Funció `calculateTotalCost`:**
   - Passar `baseCost` de `1000` i `distance` de `800` retorna `1000`.
   - Passar `baseCost` de `1000` i `distance` de `1200` retorna `1200` (20% increment).
   - Passar `baseCost` de `2000` i `distance` de `1500` retorna `2400`.

3. **Gestió del Combustible (`checkCombustible`):**
   - Combustible amb `quantitat: 800`, `tipus: 'Hidrogen'`, `preu: 50` i `distance: 750` retorna un missatge que indica suficient combustible amb detalls.
   - Combustible amb `quantitat: 800`, `tipus: 'Hidrogen'`, `preu: 50` i `distance: 850` retorna `'No tens prou combustible per viatjar.'`.
   - Combustible amb `quantitat: 500`, `tipus: 'Oxigen'`, `preu: 40` i `distance: 400` retorna un missatge que indica suficient combustible amb detalls.
   - Combustible amb `quantitat: 300`, `tipus: 'Oxigen'`, `preu: 40` i `distance: 350` retorna `'No tens prou combustible per viatjar.'`.

### Puntuació:
- **1 punt** per implementar correctament la funció `getBaseCost`.
- **1 punt** per implementar correctament la funció `calculateTotalCost`.
- **1 punt** per implementar correctament la gestió del combustible utilitzant destructuring i un operador ternari.
