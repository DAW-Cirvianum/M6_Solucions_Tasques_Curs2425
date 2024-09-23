# Kata's a Dojo!

Les "Kata's" son demostracions de moviments del Judo. Són les habilitats, "skills", que en el nostre cas ens han d'ajudar a convertir-nos en programadors web!

## Comencem!

D'entrada el primer que hauries de fer és tenir aquest repositori en local. Si has acceptat el repte ("assignment") a través de l'enllaç de la tasca, clona'l a local per tal de poder treballar més còmodament.

## Prettier Global

- Prettier es pot instal·lar globalment, de manera que estigui disponible per a qualsevol projecte al teu ordinador.
- Per instal·lar **Prettier** de manera global, executa aquesta comanda a la terminal:

   ```bash
   npm install -g prettier
   ```

   Això instal·larà Prettier globalment a la teva màquina.

### **Configura Prettier a VSCode**

- Per fer que **Prettier** sigui el formatador per defecte a **VSCode**, segueix aquests passos:

  1. Obre **VSCode**.
  2. Ves a la configuració de l'editor:
     - Fes clic a l'engranatge a la part inferior esquerra del **VSCode** i selecciona "Settings" (o fes servir `Ctrl + ,` o `Cmd + ,` en Mac).
  3. A la barra de cerca de la configuració, escriu "Format on Save".
  4. Marca l'opció **Editor: Format On Save**. Això farà que qualsevol fitxer sigui automàticament formatat quan es guardi.

### **Instal·la l'extensió de Prettier a VSCode**

- Encara que hagis instal·lat **Prettier** globalment, és recomanable tenir l'extensió de **Prettier** a **VSCode** per assegurar una millor integració amb l'editor.
- Instal·la l'extensió **Prettier - Code formatter**:
  1. A **VSCode**, ves a la pestanya d'extensions (`Ctrl + Shift + X` o `Cmd + Shift + X` en Mac).
  2. Cerca **Prettier - Code formatter** i fes clic a "Install".

### **Configura Prettier com a formatador per defecte**

- Un cop instal·lada l'extensió, configura **Prettier** com el formatador per defecte:
  1. A la configuració de **VSCode**, cerca "Default Formatter".
  2. A la secció **Editor: Default Formatter**, selecciona **Prettier** com el formatador predeterminat.

### **5. Crea un fitxer de configuració per Prettier (opcional)**

- Qualsevol fitxer de configuració de prettier `.prettierrc` a la carpeta arrel del projecte serà tingut en compte ara. En aquest cas ja en tens un amb la configuració següent:
  ```json
  {
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always",
  "tabWidth": 2,
  "printWidth": 80
  }
  ```

## Jest

Jest és un framework de testing per a JavaScript. És fàcil d'usar i proporciona una gran varietat de funcionalitats per a provar el teu codi.

Per poder fer servir Jest, primer de tot, has d'instal·lar-lo. Instal·larem tot el que necessitem i que ja està configurat al projecte a través de l'arxiu `packages.json`. Per fer-ho, obre el terminal i executa la següent comanda:

```bash
npm i
```

Això instal·larà Jest com a dependència de desenvolupament al teu projecte. Un cop hagis fet això, podràs executar els tests que s'han definit per a cada kata. Qualssevol arxiu que acabi en `.test.js` o `.spec.js` serà considerat un arxiu de tests per Jest.
Per executar els tests, obre el terminal i executa la següent comanda:

```bash
npx jest
```

Això farà que Jest executi tots els tests que hi hagi en el teu projecte. Si vols executar només els tests d'una kata en concret, pots fer-ho passant el nom de l'arxiu de tests com a argument a Jest. Per exemple, si vols executar els tests de la kata 0, executa la següent comanda:

```bash
npx jest kata0/kata0.test.js
```

Pots instal·lar l'extensió de Visual Studio Code "Jest Runner" per executar els tests des de l'editor. L'extensió "Jest" que et permetrà veure els resultats dels tests directament a l'editor.
![alt text](/img/image.png)

Per poder fer servir la sintaxi `import` i `export` en els teus arxius de tests, s'han d'afegir una sèrie de configuracions que tu aquí ja tens a través de l'arxiu de configuració de Jest i Babel. Simplement sigues conscient que això és el que et permet fer servir aquesta notació.

Pots consultar tota la documentació de Jest per fer servir totes les funcionalitats que ofereix a la seva [pàgina web](https://jestjs.io/docs/getting-started).

Aqueste extensions queden integrades a la barra de Visual Studio Code i pots executar els tests de la mateixa manera que ho farias amb la comanda `npx jest`.

### Estructura d'arxius

Inicialment ens centrarem en resoldre els problemes plantejats i que tenen per objectiu acabar de veure alguns aspectes bàsics de JS. Seguiu l'estructura proposada amb l'exemple kata0.js.

<!-- prettier-ignore -->
- Act2_JS_Basics/
  - kata0/
    - kata0.js
    - kata0.test.js
  - kata1/
    - kata1.js
    - kata1.test.js
    ...

Podeu anar canviant **l'script JS de l'index.html** per provar les diferents kata's

## Katas

### Kata #1. Suma dels elements positius d’un array

Implementa la funció `sumPositiveElements(Array)` que rep un array d'enters com a argument i retorna la suma total dels elements positius.

```javascript
function sumPositiveElements(arr) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
sumPositiveElements([]); // 0
sumPositiveElements([1, 2, 3, 4, 5]); // 15
sumPositiveElements([1, -2, 3, 4, 5]); // 13
sumPositiveElements([-1, 2, 3, 4, -5]); // 9
sumPositiveElements([-1, -2, -3, -4, -5]); // 0
```

### Kata #2. Repeteix un string

Implementa la funció `repeatString(String, Number)` que rep un string i un número com a arguments, i retorna un string que conté l'string argument repetit el número de cops indicat per l'argument numèric.

```javascript
export function repeatString(str, num) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
repeatString("JavaScript", 0); // ''
repeatString("university", 1); // 'university'
repeatString("hello", 3); // 'hellohellohello'
repeatString("?", 10); // '??????????'
```

### Kata #3. Elimina el primer i l’últim caràcter

Implementa la funció `removeFirstAndLast(String)` que rep un string com a argument i retorna l'string argument però sense el seu primer i últim caràcter, obviant els strings amb 2 o menys caràcters.

```javascript
export function removeFirstAndLast(str) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
removeFirstAndLast("JavaScript"); // 'avaScrip'
removeFirstAndLast("Alexandria"); // 'lexandri'
removeFirstAndLast("hydrogen"); // 'ydroge'
removeFirstAndLast("ok"); // 'ok'
```

### Kata #4. Elimina els espais en blanc

Implementa la funció `removeSpaces(String)` que rep un string com a argument i retorna l'string argument sense espais en blanc.

```javascript
export function removeSpaces(str) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
removeSpaces("good morning"); // 'goodmorning'
removeSpaces(" carrot cake "); // 'carrotcake'
removeSpaces("the abbot gave rice to the fox"); // 'theabbotgavericetothefox'
```

### Kata #5. Scope i closure

Anem a veure el concepte de "closure" i com es pot fer servir per aconseguir un comportament específic.

Revisa la documentació: 
[Wiki - Scope/Àmbit](https://es.javascript.info/closure)
[JavaScript Info - Closure](https://es.javascript.info/closure)

Un cop tinguis clar el concepte, resol els següents reptes:

#### Kata #5.1

Implementa la funció `counter()` que retorna una funció que, cada vegada que s'executa, incrementa un comptador en 1.

```javascript
export function counter() {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
const count = counter();
count(); // 1
count(); // 2
count(); // 3
```

#### Kata #5.2 EXTRA!

Utilitza la funció `counter()` per crear més d'un comptador. Si has entès bé el concepte de "closure", hauries de ser capaç d'etendre que cada comptador és independent dels altres.

Comprova-ho.

Ara volem que el comptador es pugui reiniciar a 0. Això és una mica més complicat perquè ens estem avançant al temari... la idea és uqe retornis un objecte amb dues funcions: `increment` i `reset`. T'atreveixes?

### Kata #6. Fibonacci

Implementa la funció `fibonacci(Number)` que rep un número com a argument i retorna el número de la seqüència de Fibonacci corresponent a aquest número.

La seqüència de Fibonacci és una successió de nombres enters en la qual cada terme és la suma dels dos anteriors. Els primers 4 nombres de la seqüència són 0, 1, 1, 2.

```javascript

export function fibonacci(n) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript

fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(5); // 5
fibonacci(6); // 8
fibonacci(7); // 13
fibonacci(8); // 21
fibonacci(9); // 34
fibonacci(10); // 55
```

### Kata #7. BobEsponja

Implementa la funció `fizzBuzz(Number)` que rep un número com a argument i retorna:

- "Bob" si el número és divisible per 3.
- "Esponja" si el número és divisible per 5.
- "BobEsponja" si el número és divisible per 3 i per 5.
- El número en cas contrari.

```javascript
export function bobEsponja(n) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
bobEsponja(3); // 'Bob'
bobEsponja(5); // 'Esponja'
bobEsponja(15); // 'BobEsponja'
bobEsponja(7); // 7
```

### Kata #8. Actualitzar saldo

Implementa la funció `updateBalance(Object, Number)` que rep un objecte amb les propietats `balance` i `transaction` i un número com a argument, i retorna un nou objecte amb la propietat `balance` actualitzada
  
 ```javascript
 // Funció per actualitzar el saldo i afegir la nova transacció a l'historial
function updateBalance(account, amount) {
}
  ```

Tests:

```javascript
const account1 = { balance: 100, transaction: [50, -20, 30, -10] };
const account2 = { balance: 200, transaction: [-50, -30, 20] };
const account3 = { balance: 500, transaction: [100, -200, -50, 100] };

console.log(updateBalance(account1, 50)); // { balance: 150, transaction: [50, -20, 30, -10, 50] }
console.log(updateBalance(account2, -30)); // { balance: 170, transaction: [-50, -30, 20, -30] }
console.log(updateBalance(account3, 100)); // { balance: 600, transaction: [100, -200, -50, 100, 100] }

```

### Kata #9. Calculadora simple

Implementa la funció `calculator(Number, String, Number)` que rep dos números i un operador com a arguments, i retorna el resultat de l'operació.

Els operadors poden ser `+`, `-`, `*` o `/`.

```javascript
function calculator(num1, operator, num2) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
calculator(2, '+', 3); // 5
calculator(5, '-', 2); // 3
calculator(3, '*', 4); // 12
calculator(10, '/', 2); // 5
```

### Kata #10. Manipulació de Strings (Concatenació i Manipulació de Text)

Implementa la funció `manipulateString(String)` que accepti tres strings, el primer i segon nom d'una persona i un adjectiu, i retorni un string amb el següent format:

`"El meu nom és [nom1] [nom2] i és una persona [adjectiu]."`

```javascript
function formatFullName(firstName, lastName) {
  // Escriu aquí la teva solució
}
```

No cal que implementis els tests, simplement fes servir la funció `formatFullName` en l'arxiu `kata10.js` i comprova que el resultat és el correcte.

### Kata #11. Objecte Math

Implementa la funció `calculateCircleArea(radius)` que calculi i retorni l'àrea d'un cercle donat el radi. Utilitza el mètode `Math.PI` per obtenir el valor de Pi.

```javascript
function calculateCircleArea(radius) {
  // Escriu aquí la teva solució
}
```	

Tests:

```javascript
// Tests:
console.log(calculateCircleArea(5)); // 78.53981633974483
console.log(calculateCircleArea(10)); // 314.1592653589793
console.log(calculateCircleArea(0)); // 0
```

### Kata #12. Manipulació de Dates amb Objecte Date

Implementa la funció `daysBetweenDates(date1, date2)` que accepti dues dates en format string (per exemple, `'2024-09-13'`) i retorni el nombre de dies entre aquestes dues dates. Utilitza l'objecte `Date` per calcular la diferència.

```javascript
function daysBetweenDates(date1, date2) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
// Tests:
console.log(daysBetweenDates('2024-09-13', '2024-09-20')); // 7 dies
console.log(daysBetweenDates('2023-12-25', '2024-01-01')); // 7 dies
console.log(daysBetweenDates('2024-01-01', '2024-01-01')); // 0 dies

```

